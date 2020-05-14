import React from 'react'

import { Link, useHistory } from 'react-router-dom'

import DashboardNavBarButton from './dashboardNavBarButton'

import './dashboardNavBar.css'
import './dashboardNavBarButton.css'

const DashboardNavBarContainer = (props) => {

  let history = useHistory()

  const onClickDashboardUserInfo = () => { history.push('/dashboard/profile') }

  return(
    <div className="dashboard_navbar">
      <ul>
        <DashboardNavBarButton
          name="dashboard_user_info_button"
          interaction="click"
          link='/dashboard/profile'
          onClick={ props.onClickTrafficFunctions }
        >
          My Profile
        </DashboardNavBarButton>
      </ul>
    </div>
  )

}

export default DashboardNavBarContainer