import React from 'react'

import Header from './UI/Header'
import Home from './index/Home'
import Footer from './UI/Footer'

import LogIn from './user/LogIn'
import SignUp from './user/SignUp'
import LogOut from './user/LogOut'

import DashboardContainer from './user/dashboard/DashboardContainer'

import TermsOfService from './docs/TermsOfService'
import Privacy from './docs/Privacy'
import Disclaimer from './docs/Disclaimer'

import Backroom from './admin/Backroom'

import E404 from './error/E404'

import userFunctions from './utility/userFunctions'

import {
	// NavLink,
	// Link,
	// Redirect,
	Route,
	Switch,
	// useRouteMatch,
	// useParams,
	// useHistory,
	// useLocation
	} from 'react-router-dom'

import './App.css'
import './UI/Response.css'
import './UI/Loading.css'

export default class App extends React.Component {

	state = {
		user: {
			token: null,
			loggedIn: null,
			// ~~~~~~~~~~~~~~~~~~~~
			id: null,
			user_name: null,
			email: null,
			// ~~~~~~~~~~~~~~~~~~~~
			first_name: null,
			last_name: null,
			gender: null,
			// ~~~~~~~~~~~~~~~~~~~~
			birth_day: null,
			birth_month: null,
			birth_year: null,
			// ~~~~~~~~~~~~~~~~~~~~
			house_number: null,
			street_name: null,
			city_town: null,
			state: null,
			zip_code: null,
			// ~~~~~~~~~~~~~~~~~~~~
			join_day: null,
			join_month: null,
			join_year: null,
		}
	}

	componentDidMount(){
		if (!localStorage.token)  {
			localStorage.clear()
		} else {
			this.setState({
				user: {
					token: localStorage.token,
					loggedIn: true,
					// ~~~~~~~~~~~~~~~~~~~~
					id: parseInt(localStorage.user_id, 10),
					user_name: localStorage.user_name,
					email: localStorage.email,
					access: localStorage.access,
					// ~~~~~~~~~~~~~~~~~~~~
					first_name: localStorage.first_name,
					last_name: localStorage.last_name,
					gender: localStorage.gender,
					// ~~~~~~~~~~~~~~~~~~~~
					birth_day: localStorage.birth_day,
					birth_month: localStorage.birth_month,
					birth_year: localStorage.birth_year,
					// ~~~~~~~~~~~~~~~~~~~~
					house_number: localStorage.house_number,
					street_name: localStorage.street_name,
					city_town: localStorage.city_town,
					state: localStorage.state,
					zip_code: localStorage.zip_code,
					// ~~~~~~~~~~~~~~~~~~~~
					join_day: localStorage.join_day,
					join_month: localStorage.join_month,
					join_year: localStorage.join_year,
				}
			})
		}
	}

	setToken = ({ token, user_id })  => {

		localStorage.user_id = user_id
		localStorage.token = token

		this.setState({
			token: token,
			loggedIn: true,
		})

		userFunctions('get', `http://localhost:3001/users/${user_id}`)
		.then(res_obj => {
			let current_user = res_obj.data.attributes.user

			localStorage.user_name = current_user.user_name
			localStorage.email = current_user.email
			localStorage.access = current_user.access
			// ~~~~~~~~~~~~~~~~~~~~
			localStorage.first_name = current_user.first_name
			localStorage.last_name = current_user.last_name
			localStorage.gender = current_user.gender
			// ~~~~~~~~~~~~~~~~~~~~
			localStorage.birth_day = current_user.birth_day
			localStorage.birth_month = current_user.birth_month
			localStorage.birth_year = current_user.birth_year
			// ~~~~~~~~~~~~~~~~~~~~
			localStorage.house_number = current_user.house_number
			localStorage.street_name = current_user.street_name
			localStorage.city_town = current_user.city_town
			localStorage.state = current_user.state
			localStorage.zip_code = current_user.zip_code
			// ~~~~~~~~~~~~~~~~~~~~
			localStorage.join_day = current_user.join_day
			localStorage.join_month = current_user.join_month
			localStorage.join_year = current_user.join_year

			this.setState({
				user_id: user_id,
				user_name: current_user.user_name,
				email: current_user.email,
				access: current_user.access,
				// ~~~~~~~~~~~~~~~~~~~~
				first_name: current_user.first_name,
				last_name: current_user.last_name,
				gender: current_user.gender,
				// ~~~~~~~~~~~~~~~~~~~~
				birth_day: current_user.birth_day,
				birth_month: current_user.birth_month,
				birth_year: current_user.birth_year,
				// ~~~~~~~~~~~~~~~~~~~~
				house_number: current_user.house_number,
				street_name: current_user.street_name,
				city_town: current_user.city_town,
				state: current_user.state,
				zip_code: current_user.zip_code,
				// ~~~~~~~~~~~~~~~~~~~~
				join_day: current_user.join_day,
				join_month: current_user.join_month,
				join_year: current_user.join_year,
				// ~~~~~~~~~~~~~~~~~~~~
				user: { token, loggedIn: true, ...current_user }
			})
		})
	}

	setUser = ( res_obj, token ) => {
		let current_user = res_obj.data.attributes.user

		localStorage.user_name = current_user.user_name
		localStorage.email = current_user.email
		localStorage.access = current_user.access
		// ~~~~~~~~~~~~~~~~~~~~
		localStorage.first_name = current_user.first_name
		localStorage.last_name = current_user.last_name
		localStorage.gender = current_user.gender
		// ~~~~~~~~~~~~~~~~~~~~
		localStorage.birth_day = current_user.birth_day
		localStorage.birth_month = current_user.birth_month
		localStorage.birth_year = current_user.birth_year
		// ~~~~~~~~~~~~~~~~~~~~
		localStorage.house_number = current_user.house_number
		localStorage.street_name = current_user.street_name
		localStorage.city_town = current_user.city_town
		localStorage.state = current_user.state
		localStorage.zip_code = current_user.zip_code
		// ~~~~~~~~~~~~~~~~~~~~
		localStorage.join_day = current_user.join_day
		localStorage.join_month = current_user.join_month
		localStorage.join_year = current_user.join_year

		this.setState({
			user: {
				token,
				loggedIn: true,
				...current_user
			}
		})
	}

	updateLogin = () => {
		this.setState({
			user: {
				...this.state.user,
				loggedIn: !this.state.loggedIn
			}
		})
	}

	logOut = () => {
		localStorage.clear()

		this.setState({
			user: {
				token: null,
				loggedIn: null,
				// ~~~~~~~~~~~~~~~~~~~~
				id: null,
				user_name: null,
				email: null,
				access: "guest",
				// ~~~~~~~~~~~~~~~~~~~~
				first_name: null,
				last_name: null,
				gender: null,
				// ~~~~~~~~~~~~~~~~~~~~
				birth_day: null,
				birth_month: null,
				birth_year: null,
				// ~~~~~~~~~~~~~~~~~~~~
				house_number: null,
				street_name: null,
				city_town: null,
				state: null,
				zip_code: null,
				// ~~~~~~~~~~~~~~~~~~~~
				join_day: null,
				join_month: null,
				join_year: null
			}
		})
	}

	render(){

		console.log(this.state.user)
		return (
			<>
				<div className="header">
					<Header
						user_token={ this.state.user.token }
						user_id={ this.state.user.id }
						user_name={ this.state.user.user_name }
						user_access={ this.state.user.access }
						logOut={ this.logOut }
					/>
				</div>
				<div className="main_container">
					<Switch>
						<Route exact path='/'>
							<Home
								user_id={ this.state.user.id }
							/>
						</Route>
						<Route exact path='/log_in'>
							<LogIn
								setToken={ this.setToken }
								updateLogin={ this.updateLogin }
							/>
						</Route>
						<Route exact path='/sign_up'>
							<SignUp
								setToken={ this.setToken }
								updateLogin={ this.updateLogin }
							/>
						</Route>
						<Route path='/dashboard'>
							<DashboardContainer
								user={this.state.user}
								setToken={ this.setToken }
								setUser={ this.setUser }
								logOut={ this.logOut }
							/>
						</Route>
						<Route exact path='/log_out'>
							<LogOut
								logOut={ this.logOut }
								// ~~~~~~~~~~~~~~~~~~~~
								token={ this.state.token }
								user_id={ this.state.user.id }
								user_name={ this.state.user.user_name }
								access={ this.state.user.access }
							/>
						</Route>
						<Route exact path='/terms_of_service'>
							<TermsOfService />
						</Route>
						<Route exact path='/privacy'>
							<Privacy />
						</Route>
						<Route exact path='/disclaimer'>
							<Disclaimer />
						</Route>
						<Route path='/backroom'>
							<Backroom
								token={ this.state.token }
								user_name={ this.state.user.user_name }
								access={ this.state.user.access }
							/>
						</Route>
						<Route component={ E404 } />
					</Switch>
				</div>
				<div className="footer">
					<Footer/>
				</div>
			</>
		)
	}
}