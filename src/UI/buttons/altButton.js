import React from 'react'
import { NavLink } from 'react-router-dom'

import './altButton.css'

const AltButton = (props) => {
	return(
		<NavLink
			exact to={props.link}
			name={props.buttonName}
			interaction='click'
			className='alt_button'
			onClick={props.onClick}
		>
			{props.children}
		</NavLink>
	)
}

export default AltButton