import React from 'react'

import HeaderButton from '../headerButton'

import '../Header.css'
import '../headerButton.css'

const GuestHeader = (props) => {
  return(
    <div className="header_nav_links">
      <HeaderButton
        link="/log_in"
        name="header_log_in_button"
        onClick={ props.onClickTrafficFunctions }
      >
        Login
      </HeaderButton>
      <HeaderButton
        link="/sign_up"
        name="header_sign_up_button"
        onClick={ props.onClickTrafficFunctions }
      >
        Sign Up
      </HeaderButton>
    </div>
  )
}

export default GuestHeader