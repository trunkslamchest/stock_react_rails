import React from 'react'

import DashboardNavBarButton from './dashboardNavBarButton'

import './dashboardNavBar.css'
import './dashboardNavBarButton.css'

const DashboardNavBarContainer = (props) => {
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