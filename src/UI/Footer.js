import React from 'react'
import { NavLink } from 'react-router-dom'

import trafficFunctions from '../utility/trafficFunctions'

import './Footer.css'

import flatiron_logo from '../assets/footer_logo_flatiron.png'
import postgres_logo from '../assets/footer_logo_postgres.png'
import rails_logo from '../assets/footer_logo_rails.png'
import react_logo from '../assets/footer_logo_react.png'

const Footer = (props) => {

	// const onClickHomeFunctions = (event) => { onClickUpdateTrafficFunctions(event) }

	const onClickTOSFunctions = (event) => { onClickUpdateTrafficFunctions(event) }

	const onClickPrivacyFunctions = (event) => { onClickUpdateTrafficFunctions(event) }

	const onClickDisclaimerFunctions = (event) => { onClickUpdateTrafficFunctions(event) }

	const onClickFooterLinksFunctions = (event) => { onClickUpdateTrafficFunctions(event) }

	const onClickUpdateTrafficFunctions = (event) => {

		let userID

		if (localStorage.access) {
			userID = localStorage.user_id
		} else {
			userID = props.user_id
		}

		let elementInfo = {
			user_id: userID,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	const extra_links = [
			<NavLink
			exact to="/terms_of_service"
			key={"tos_link"}
			name="footer_tos_button"
			interaction="click"
			target="_blank"
			onClick={ onClickTOSFunctions }
		>
			Terms Of Service
		</NavLink>,
			<NavLink
			exact to="/privacy"
			key={"privacy_link"}
			name="footer_privacy_button"
			interaction="click"
			target="_blank"
			onClick={ onClickPrivacyFunctions }
		>
			Privacy
		</NavLink>,
		<NavLink
			exact to="/disclaimer"
			key={"disclaimer_link"}
			name="footer_disclaimer_button"
			interaction="click"
			target="_blank"
			onClick={ onClickDisclaimerFunctions }
		>
			Disclaimer
		</NavLink>
	]

	const footer_logos = [
		<a
			key={"flatiron_logo"}
			href="https://flatironschool.com/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ flatiron_logo }
				className="logo_rectangle"
				alt="The Flatiron School"
				name="footer_flatiron_logo"
				interaction="click"
				onClick={ onClickFooterLinksFunctions }
			/>
		</a>,
		<a
			key={"postgres_logo"}
			href="https://www.postgresql.org/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ postgres_logo }
				className="logo_rectangle"
				alt="PostgreSQL"
				name="footer_postgres_logo"
				interaction="click"
				onClick={ onClickFooterLinksFunctions }
			/>
		</a>,
		<a
			key={"rails_logo"}
			href="https://rubyonrails.org/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ rails_logo }
				className="logo_rectangle"
				alt="Ruby On Rails"
				name="footer_rails_logo"
				interaction="click"
				onClick={ onClickFooterLinksFunctions }
			/>
		</a>,
		<a
			key={"react_logo"}
			href="https://reactjs.org/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ react_logo }
				className="logo_rectangle"
				alt="React"
				name="footer_react_logo"
				interaction="click"
				onClick={ onClickFooterLinksFunctions }
			/>
		</a>
	]

	const fine_print =
		<>
			© 2019 Created by Austin Smith. All this_project™ logos and marks depicted herein are the property of this_project™ Enterprises and the respective employees and may not be reproduced without the prior written consent of this_project™ Enterprises, L.P. © this_project™ 2019. All Rights Reserved. The Zamboni word mark and configuration of the Zamboni ice resurfacing machine are registered trademarks of Frank J. Zamboni & Co., Inc.© Frank J. Zamboni & Co., Inc. 2019.All Rights Reserved. Any other third party trademarks or copyrights are the property of their respective owners. All rights reserved.
		</>

	return(
		<>
			<div className="footer_left">
				<div className="links">
					<>{ extra_links }</>
				</div>
				<div className="logos">
					<>{ footer_logos }</>
				</div>
				<div className="fine_print">
					{ fine_print }
				</div>
			</div>
			{/* <div className="footer_right">
				{ home_link }
			</div> */}
		</>
	)

}

export default Footer