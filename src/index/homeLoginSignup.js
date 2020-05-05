import React from 'react'

import HomeLoginSignupButton from './homeLoginSignupButton'

import './homeLoginSignup.css'

const HomeLoginSignup = (props) => {
  return(
		<div className="login_signup_container">
      <HomeLoginSignupButton
        link="/log_in"
        name="log_in_button"
        onClick={ props.onClickTrafficFunctions }
      >
        Log In
      </HomeLoginSignupButton>
      <HomeLoginSignupButton
        link="/sign_up"
        name="sign_up_button"
        onClick={ props.onClickTrafficFunctions }
      >
        Sign Up
      </HomeLoginSignupButton>
		</div>
  )
}

export default HomeLoginSignup