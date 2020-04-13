import React from 'react'

import DashboardIndex from './DashboardIndex'
import DashboardUserInfo from './DashboardUserInfo'

import { Redirect } from 'react-router-dom'

import trafficFunctions from '../../utility/trafficFunctions'

import './Dashboard.css'

export default class Dashboard extends React.Component{

	state = {
		display: '',
		user: [],
		mounted: false,
		updated_user: false,
	}

	componentDidMount(){
		this.setState({ mounted: true })

		this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if (this.state.mounted && this.props.user_id && !this.state.loaded){
			this.setState({
				loaded: true,
				display: 'dashboard'
			})
		}
	}

	getUser = (user_id) => {
		fetch(`http://localhost:3001/users/${user_id}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				user: res_obj.data.attributes.user,
				updated_user: true
			})
		)
	}

	displaySwitchToDashboard = () => {
		this.setState({ display: 'dashboard' })
	}

	displaySwitchToUserInfo = (event) => {
		this.setState({ display: 'user_info' }, this.onClickTrafficFunctionsLI(event))
	}

	onClickEditProfileFunctions = (event) => {
		this.onClickTrafficFunctions(event)
	}

	onClickDeleteProfileFunctions = (event) => {
		this.onClickTrafficFunctions(event)
	}

	onClickTrafficFunctions = (event) => {
		let elementInfo = {
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	onClickTrafficFunctionsLI = (event) => {
		let elementInfo = {
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.attributes.name.value
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	onPageLoadFunctions = () => {
		let pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'user_dasboard',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}

	render(){
		const dashboard_tabs = [
			<li
				key={"dashboard_info"}
				name="dashboard_user_info_button"
				interaction="click"
				onClick={ this.displaySwitchToUserInfo }
			>
				Info
			</li>
		]

		const loading =
			<div className="loading_container">
				<div className="loading_animation_container">
					<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
				</div>
			</div>

		const dashboard =
			<>
				<div className="dashboard_tabs">
					<ul>
						{ dashboard_tabs }
					</ul>
				</div>
				{
					{
						true: <Redirect to='/' />,
						false: 	(() => {
							switch(this.state.display) {
								case 'dashboard': return <DashboardIndex
															first_name={ this.props.first_name }
														/>;
								case 'user_info': return <DashboardUserInfo
															update_traffic_data={ this.props.update_traffic_data }
															update_page_data={ this.props.update_page_data }
															// ~~~~~~~~~~~~~~~~~~~~
															user_id= {this.props.user_id }
															user_name={ this.props.user_name }
															email={ this.props.email }
															access={ this.props.access }
															// ~~~~~~~~~~~~~~~~~~~~
															first_name={ this.props.first_name }
															last_name={ this.props.last_name }
															gender={ this.props.gender }
															// ~~~~~~~~~~~~~~~~~~~~
															birth_day={ this.props.birth_day }
															birth_month={ this.props.birth_month }
															birth_year={ this.props.birth_year }
															// ~~~~~~~~~~~~~~~~~~~~
															house_number={ this.props.house_number }
															street_name={ this.props.street_name }
															city_town={ this.props.city_town }
															state={ this.props.state }
															zip_code={ this.props.zip_code }
															// ~~~~~~~~~~~~~~~~~~~~
															join_day={this.props.join_day}
															join_month={this.props.join_month}
															join_year={this.props.join_year}
														/>;
								default: return <></>;
							}
						})()
					}[localStorage.length === 0]
				}
			</>

		return(
			<div className="dashboard_wrapper">
				{ this.state.loaded ? dashboard : loading }
			</div>
		)
	}
}
