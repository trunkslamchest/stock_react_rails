import React from 'react'

import { useHistory } from 'react-router-dom'

import './RTVsidebar.css'

const RTVsidebar = (props) => {

	let history = useHistory()

	const onClickRTVusersFunctions = () => {
		history.push('/backroom/RTVusers')
		props.showRTVusers()
	}

	const onClickRTVpagesFunctions = () => {
		history.push('/backroom/RTVpages')
		props.showRTVpages()
	}

	const onClickDBeditFunctions = () => {
		let db_index_msg = "index"
		props.update_db_view_from_sidebar(db_index_msg)
		history.push('/backroom/DBedit')
		props.showDBedit()
	}

	const onClickSTAnalyticsFunctions = () => {
		history.push('/backroom/STAnalytics')
		props.showSTanalytics()
	}

	return(
		<div className="side_bar">
			<ul>
				<li onClick={ onClickRTVusersFunctions }>
					Real Time User Traffic
				</li>
				<li onClick={ onClickRTVpagesFunctions }>
					Real Time Page Traffic
				</li>
				<li onClick={ onClickDBeditFunctions }>
					Database Editor
				</li>
				<li onClick={ onClickSTAnalyticsFunctions }>
					Statistical Analytics
				</li>
			</ul>
		</div>
	)

}

export default RTVsidebar