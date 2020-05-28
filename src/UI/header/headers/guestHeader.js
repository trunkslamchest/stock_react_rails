import React from 'react'

import HeaderButton from '../headerButton'
import HeaderButton2 from '../headerButton2'


import '../header.css'
import '../headerButton.css'

const GuestHeader = (props) => {

  const logInButtonFunctions = (event) => {
    props.showLogInModal()
    props.onClickTrafficFunctions(event)
  }

  return(
    <div className='header_nav_links'>
      <HeaderButton2
        name='header_log_in_button'
        onClick={logInButtonFunctions}
      >
        Login
      </HeaderButton2>
      <HeaderButton
        link='/sign_up'
        name='header_sign_up_button'
        onClick={props.onClickTrafficFunctions}
      >
        Sign Up
      </HeaderButton>
    </div>
  )
}

export default GuestHeader