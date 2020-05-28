import React from 'react'

import DashboardEditProfileFormButton from './dashboardEditProfileFormButton'

const DashboardEditProfileFormButtonContainer = (props) => {
  return(
    <div className='edit_buttons_container'>
      <DashboardEditProfileFormButton
        type='submit'
        id='edit_profile_submit'
        name='edit_profile_submit'
        onClick={props.onSubmit}
        value='Update Profile'
      />
      <DashboardEditProfileFormButton
        type='reset'
        id='edit_profile_reset'
        name='edit_profile_reset'
        onClick={props.onReset}
        value='Reset'
      >
        Reset
      </DashboardEditProfileFormButton>
      <DashboardEditProfileFormButton
        type='button'
        id='edit_profile_form_cancel'
        name='edit_profile_form_cancel'
        onClick={props.onCancel}
        value='Cancel'
      />
    </div>
  )
}

export default DashboardEditProfileFormButtonContainer