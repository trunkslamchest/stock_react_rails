import React from 'react'

import DashboardEditProfileFormButton from './dashboardEditProfileFormButton'

const DashboardEditProfileFormButtonContainer = (props) => {
  return(
    <div className='edit_buttons_container'>
      <DashboardEditProfileFormButton
        type='submit'
        id='edit_profile_submit'
        name='edit_profile_submit'
        interaction='confirm'
        onClick={props.onSubmit}
        value='Update Profile'
      />
      <DashboardEditProfileFormButton
        type='reset'
        id='edit_profile_reset'
        name='edit_profile_reset'
        interaction='reset'
        onClick={props.onReset}
        value='Reset'
      />
      <DashboardEditProfileFormButton
        type='button'
        id='edit_profile_form_cancel'
        name='edit_profile_form_cancel'
        interaction='cancel'
        onClick={props.onCancel}
        value='Cancel'
      />
    </div>
  )
}

export default DashboardEditProfileFormButtonContainer