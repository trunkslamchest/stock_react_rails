import React from 'react'

import {
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'

import BackroomIndex from './BackroomIndex'
import RTVsidebar from './rtv/RTVsidebar'
import RTVusersContainer from './rtv/RTVusersContainer'
import RTVpagesContainer from './rtv/RTVpagesContainer'
import DBeditMainContainer from './db_edit/DBeditMainContainer'
import STanalyticsIndex from './stats/STanalyticsIndex'

import TestTemp from './TestTemp'

import './Backroom.css'

export default class Backroom extends React.Component{

	state = { 
		display: null,
		// db_display: null
	}

	showRTVusers = () => { this.setState({ display: "RTVusers" }) }

	showRTVpages = () => { this.setState({ display: "RTVpages" }) }

	showDBedit = () => { this.setState({ display: "DBedit" }) }

	showSTanalytics = () => { this.setState({ display: "STanalytics" }) }

	// update_db_view_from_sidebar = (db_index_msg) => { this.setState({ db_display: db_index_msg }) }

	render(){

		let routes =
			<Switch>
				<Route exact path='/backroom'>
					<BackroomIndex token={ this.state.token } />
				</Route>
				<Route path='/backroom/RTVusers'>
					<RTVusersContainer />
				</Route>
				<Route path='/backroom/RTVpages'>
					<RTVpagesContainer />
				</Route>
				<Route path='/backroom/DBedit'>
					<DBeditMainContainer 
					// update_db_display={ this.state.db_display }
					/>
				</Route>
				<Route path='/backroom/STAnalytics'>
					<STanalyticsIndex />
				</Route>
				<Route path='/backroom/test_temp'>
					<TestTemp token={ this.state.token } />
				</Route>
			</Switch>

		return(
			<div className="backroom_wrapper">
				<div className="side_window">
					<RTVsidebar
						showRTVusers={ this.showRTVusers }
						showRTVpages={ this.showRTVpages }
						showDBedit={ this.showDBedit }
						showSTanalytics={ this.showSTanalytics }
						// update_db_view_from_sidebar={ this.update_db_view_from_sidebar }
					/>
				</div>

				<div className="main_window">
					{localStorage.length === 0 || localStorage.access !== 'admin' ? <Redirect to='/' /> : routes }
				</div>
			</div>
		)
	}
}
