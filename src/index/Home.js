import React, { useEffect, useCallback } from 'react'
import { NavLink } from 'react-router-dom'

import trafficFunctions from '../utility/trafficFunctions'

import './Home.css'

var pageInfo = {
	user_id: localStorage.user_id,
	page_name: 'index',
}

const Home = (props) => {

	const onClickLogInFunctions = (event) => {
		onClickUpdateTrafficFunctions(event)
	}

	const onClickSignUpFunctions = (event) => {
		onClickUpdateTrafficFunctions(event)
	}

	const onSubmitFunctions = (event) => {
		event.preventDefault()
		const formData = new FormData(event.target)
		console.log(formData)
	}

	const onClickUpdateTrafficFunctions = (event) => {
		let elementInfo = {
			user_id: props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	const onPageLoadFunctions = useCallback(() => {
		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}, [])

	useEffect(() => {onPageLoadFunctions()}, [onPageLoadFunctions])

	const logged_in_home = <>
		<h3>Index Template</h3>
	</>

	const log_in_button =
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

	const sign_up_button =
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

	const logged_out_home =
		<>
			<div className="log_in_sign_up_container">
				{ log_in_button }
				{ sign_up_button }
			</div>
		</>

	const img_upload_form =
		<>
			<form id="img_upload_form"
				onSubmit={ onSubmitFunctions }
			>
				<input type="file"
					name="img_input_upload"
					id="img_input_upload"
					className="img_input_upload"
					accept="image/*"
				/>
				<input
					type="submit"
					value="Submit"
				/>
			</form>
		</>

	return(
		<div className="default_wrapper">
			{ localStorage.length === 0 ? logged_out_home : logged_in_home }
			{ img_upload_form }
		</div>
	)
}

export default Home