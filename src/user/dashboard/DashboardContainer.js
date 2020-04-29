import React from 'react'

import {
	// Redirect,
	Switch,
	Route
} from 'react-router-dom'

import DashboardNavBar from './DashboardNavBar'
import DashboardIndex from './DashboardIndex'
import DashboardUserInfo from './DashboardUserInfo'

import EditProfile from './EditProfile'
import DeleteProfile from './DeleteProfile'

import trafficFunctions from '../../utility/trafficFunctions'

import './Dashboard.css'

export default class Dashboard extends React.Component{

	state = {
		user: {},
		mounted: false,
		updated_user: false,
	}

	componentDidMount(){
		this.setState({ mounted: true })

		this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if (this.state.mounted && this.props.user.id && !this.state.loaded){
			this.setState({
				loaded: true
			})
		}
	}

	onClickTrafficFunctions = (event) => {
		let elementInfo = {
			user_id: this.props.user.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	onClickTrafficFunctionsLI = (event) => {
		let elementInfo = {
			user_id: this.props.user.user_id,
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

		// console.log(this.props)

		const routes =
		<Switch>
			<Route exact path='/dashboard'>
				<DashboardIndex
					firstName={this.props.user.first_name}
				/>
			</Route>
			<Route exact path='/dashboard/profile'>
				<DashboardUserInfo
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
					// ~~~~~~~~~~~~~~~~~~~~
					user={this.props.user}
				/>
			</Route>
			<Route path='/dashboard/profile/edit'>
				<EditProfile
					setUser={ this.props.setUser }
					// ~~~~~~~~~~~~~~~~~~~~
					// user_id= {this.props.user_id }
					// user_name={ this.props.user_name }
					// email={ this.props.email }
					// access={ this.props.access }
					// // ~~~~~~~~~~~~~~~~~~~~
					// first_name={ this.props.first_name }
					// last_name={ this.props.last_name }
					// gender={ this.props.gender }
					// // ~~~~~~~~~~~~~~~~~~~~
					// birth_day={ this.props.birth_day }
					// birth_month={ this.props.birth_month }
					// birth_year={ this.props.birth_year }
					// // ~~~~~~~~~~~~~~~~~~~~
					// house_number={ this.props.house_number }
					// street_name={ this.props.street_name }
					// city_town={ this.props.city_town }
					// state={ this.props.state }
					// zip_code={ this.props.zip_code }
					// // ~~~~~~~~~~~~~~~~~~~~
					// join_day={this.props.join_day}
					// join_month={this.props.join_month}
					// join_year={this.props.join_year}
					// // ~~~~~~~~~~~~~~~~~~~~
					user={this.props.user}
				/>
			</Route>
			<Route path='/dashboard/profile/delete'>
				<DeleteProfile
					setToken={ this.props.setToken }
					user_id={this.props.user.user_id }
					access={ this.props.user.access }
					logOut={ this.props.logOut }
				/>
			</Route>
		</Switch>

		const loading =
			<div className="loading_container">
				<div className="loading_animation_container">
					<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
				</div>
			</div>

		return(
			<div className="dashboard_wrapper">
				<div className="dashboard_tabs">
					<DashboardNavBar />
				</div>
				{ this.state.loaded ? routes : loading }
			</div>
		)
	}
}
