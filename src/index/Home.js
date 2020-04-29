import React, { useEffect, useCallback } from 'react'
import { NavLink } from 'react-router-dom'

import trafficFunctions from '../utility/trafficFunctions'

import './Home.css'

const Home = (props) => {

	const onClickLogInFunctions = (event) => { onClickTrafficFunctions(event) }

	const onClickSignUpFunctions = (event) => { onClickTrafficFunctions(event) }

	const onClickTrafficFunctions = (event) => {
		let elementInfo = {
			user_id: props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	const onPageLoadFunctions = useCallback(() => {
		var pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'index',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}, [])

	useEffect(() => {onPageLoadFunctions()}, [onPageLoadFunctions])

	const loggedIn =
		<h3> Index Template </h3>

	const logInButton =
		<NavLink
			exact to="/log_in"
			key={"log_in_link"}
			name="log_in_button"
			interaction="click"
			className="log_in_button"
			onClick={ onClickLogInFunctions }
		>
			Log In
		</NavLink>

	const signUpButton =
		<NavLink
			exact to="/sign_up"
			key={"sign_up_link"}
			name="sign_up_button"
			interaction="click"
			className="sign_up_button"
			onClick={ onClickSignUpFunctions }
		>
			Sign Up
		</NavLink>

	const loggedOut =
		<div className="log_in_sign_up_container">
			{ logInButton }
			{ signUpButton }
		</div>

	return(
		<div className="default_wrapper">
			{ localStorage.length === 0 ? loggedOut : loggedIn }
		</div>
	)
}

export default Home