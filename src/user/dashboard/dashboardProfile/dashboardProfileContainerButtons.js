import React from 'react'

import DashboardProfileContainerButton from './dashboardProfileContainerButton'

import './dashboardProfileContainerButtons.css'

const DashboardProfileContainerButtons = (props) => {
  return(
    <>
      <div className="user_info_buttons_container">
        <DashboardProfileContainerButton
          link='/dashboard/profile/edit'
          name="edit_profile_button"
          onClick={ props.onClickTrafficFunctions }
        >
          Edit Profile
        </DashboardProfileContainerButton>
        <DashboardProfileContainerButton
          link='/dashboard/profile/delete'
          name="delete_profile_button"
          onClick={ props.onClickTrafficFunctions }
        >
          Delete Profile
        </DashboardProfileContainerButton>
      </div>
    </>
  )
}

export default DashboardProfileContainerButtons
