import React from 'react'

import { useHistory } from 'react-router-dom'

const DashboardNavBar = (props) => {

	// console.log(props)


	let history = useHistory()

	const onClickDashboardUserInfo = () => { history.push('/dashboard/profile') }

	return(
		// <div className="DBedit_navbar_item" onClick={ onClickDashboardUserInfo }>
		// 	<p>My Profile</p>
		// </div>

		<ul>
			<li
				key={"dashboard_info"}
				name="dashboard_user_info_button"
				interaction="click"
				onClick={ onClickDashboardUserInfo }
			>
				My Profile
			</li>
		</ul>
	)

}

export default DashboardNavBar