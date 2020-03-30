import React, { useEffect, useCallback } from 'react'

import trafficFunctions from '../utility/trafficFunctions'

import './Error.css'

var pageInfo = {
	user_id: localStorage.user_id,
	page_name: '404 Error',
}

const E404 = (props) => {

	const onPageLoadFunctions = useCallback(() => {
		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}, [])

	useEffect(() => {onPageLoadFunctions()}, [onPageLoadFunctions])

	return(
		<div className="alt_container">
			<div className="alt_wrapper">
				<h3>404 Error</h3>
			</div>
		</div>
	)
}

export default E404