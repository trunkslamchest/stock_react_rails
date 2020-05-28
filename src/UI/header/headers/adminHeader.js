import React from 'react'

import HeaderButton from '../headerButton'

import '../header.css'
import '../headerButton.css'

const AdminHeader = (props) => {
  return(
    <>
      <span
        className='header_greeting'>
        Logged In: {props.user_name}
      </span>
      <div className='header_nav_links'>
        <HeaderButton
          link='/backroom'
          name='header_backroom_button'
          onClick={props.onClickTrafficFunctions}
        >
          Admin Panel
        </HeaderButton>
        <HeaderButton
          link='/dashboard'
          name='header_dashboard_button'
          onClick={props.onClickTrafficFunctions}
        >
          Dashboard
        </HeaderButton>
        <HeaderButton
          link='/log_out'
          name='header_log_out_button'
          onClick={props.onClickTrafficFunctions}
        >
          Log Out
        </HeaderButton>
      </div>
    </>
  )
}

export default AdminHeader