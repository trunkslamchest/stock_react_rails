import React, { useEffect, useCallback } from 'react'

import HomeLoginSignup from './homeLoginSignup'
import HomeLoggedIn from './homeLoggedIn'

import trafficFunctions from '../utility/trafficFunctions'

import './Home.css'

const Home = (props) => {

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

	return(
		<div className="default_wrapper">
			{ localStorage.access === 'guest' ?
          <HomeLoginSignup onClickTrafficFunctions={ onClickTrafficFunctions } />
        :
          <HomeLoggedIn />
      }
		</div>
	)
}

export default Home