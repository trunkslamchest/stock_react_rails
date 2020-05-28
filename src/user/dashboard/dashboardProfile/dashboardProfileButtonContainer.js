import React from 'react'

import DashboardProfileButton from './dashboardProfileButton'

import './dashboardProfileButtonContainer.css'

const DashboardProfileButtonContainer = (props) => {

  const onClickFunctions = (event, url) => {
    props.onClickTrafficFunctions(event)
    props.history.push(url)
  }

  return(
    <div className='dashboard_profile_buttons_container'>
      <DashboardProfileButton
        type='button'
        id='delete_profile_button'
        name='edit_profile_button'
        interaction='click'
        onClick={(event) => onClickFunctions(event, 'profile/edit')}
      >
        Edit Profile
      </DashboardProfileButton>
      <DashboardProfileButton
        type='button'
        id='delete_profile_button'
        name='delete_profile_button'
        interaction='click'
        onClick={(event) => onClickFunctions(event, 'profile/delete')}
      >
        Delete Profile
      </DashboardProfileButton>
    </div>
  )
}

export default DashboardProfileButtonContainer
