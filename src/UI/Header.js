import React from 'react'

import HeaderButton from './buttons/headerButton'

import trafficFunctions from '../utility/trafficFunctions'

import './Header.css'

const Header = (props) => {

	const onClickHomeFunctions = (event) => { onClickTrafficFunctions(event) }

	const onClickSignUpFunctions = (event) => { onClickTrafficFunctions(event) }

	const onClickLogInFunctions = (event) => { onClickTrafficFunctions(event) }

	const onClickLogOutFunctions = (event) => { onClickTrafficFunctions(event) }

	const onClickDashboardFunctions = (event) => { onClickTrafficFunctions(event) }

	const onClickBackroomFunctions = (event) => { onClickTrafficFunctions(event) }

	const onClickTrafficFunctions = (event) => {
		let elementInfo = {
			user_id: props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	const blank = <></>

	const user_greeting =
		<span
			key={"h_user_greeting"}
			className="header_greeting">
			Logged In: { props.user_name }
		</span>

	const home_link =
		<HeaderButton
			link="/"
			buttonName="header_home_button"
			onClick={ onClickHomeFunctions }
		>
			Home
		</HeaderButton>

	const logged_in_links =
		<>
			<HeaderButton
				link="/dashboard"
				name="header_dashboard_button"
				onClick={ onClickDashboardFunctions }
			>
				Dashboard
			</HeaderButton>
			<HeaderButton
				link="/log_out"
				name="header_log_out_button"
				onClick={ onClickLogOutFunctions }
			>
				Log Out
			</HeaderButton>
		</>

	const logged_out_links =
		<>
			<HeaderButton
				link="/log_in"
				name="header_log_in_button"
				onClick={ onClickLogInFunctions }
			>
				Login
			</HeaderButton>
			<HeaderButton
				link="/sign_up"
				name="header_sign_up_button"
				onClick={ onClickSignUpFunctions }
			>
				Sign Up
			</HeaderButton>
		</>

	const normal_header =
		<>
			{ user_greeting }
			<div className="header_nav_links">
				{logged_in_links}
			</div>
		</>

	const admin_header =
		<>
			{ user_greeting }
			<div className="header_nav_links">
				<HeaderButton
					link="/backroom"
					name="header_backroom_button"
					onClick={ onClickBackroomFunctions }
				>
					Admin Panel
				</HeaderButton>
				{logged_in_links}
			</div>
		</>

	return(
		<>
			<div className="header_left">
				{ !!props.token ? home_link : blank }
			</div>
			<div className="header_right">
				{
					{
						false: blank,
						true: (() => {
							switch(localStorage.access) {
								case false: return logged_out_links;
								case 'normal': return normal_header;
								case 'admin': return admin_header;
								default: return blank;
							}
						})()
					}[!!props.token]
				}
			</div>
		</>
	)
}

export default Header