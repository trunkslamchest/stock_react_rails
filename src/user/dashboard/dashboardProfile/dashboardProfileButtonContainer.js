import React from 'react'

import DashboardProfileButton from './dashboardProfileButton'

import './dashboardProfileButtonContainer.css'

const DashboardProfileButtonContainer = (props) => {
  return(
    <div className='dashboard_profile_buttons_container'>
      <DashboardProfileButton
        link='/dashboard/profile/edit'
        name='edit_profile_button'
        onClick={props.onClickTrafficFunctions}
      >
        Edit Profile
      </DashboardProfileButton>
      <DashboardProfileButton
        link='/dashboard/profile/delete'
        name='delete_profile_button'
        onClick={props.onClickTrafficFunctions}
      >
        Delete Profile
      </DashboardProfileButton>
    </div>
  )
}

export default DashboardProfileButtonContainer
