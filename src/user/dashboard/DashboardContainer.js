import React from 'react'

import {
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

	state = { mounted: false }

	componentDidMount(){
		this.setState({ mounted: true })
		this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if (this.state.mounted && this.props.user.id && !this.state.loaded){ this.setState({ loaded: true }) }
	}

	onPageLoadFunctions = () => {
		let pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'user_dasboard',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}

	render(){

		const routes =
		<Switch>
			<Route exact path='/dashboard'>
				<DashboardIndex
					firstName={this.props.user.first_name}
				/>
			</Route>
			<Route exact path='/dashboard/profile'>
				<DashboardUserInfo
					user={this.props.user}
				/>
			</Route>
			<Route path='/dashboard/profile/edit'>
				<EditProfile
					setUser={ this.props.setUser }
					user={this.props.user}
				/>
			</Route>
			<Route path='/dashboard/profile/delete'>
				<DeleteProfile
					setToken={ this.props.setToken }
					user_id={this.props.user.id }
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
