import React from 'react'

import Button3 from 'UI/buttons/button3'

import './homeLoginSignup.css'

export default class HomeLoginSignup extends React.Component {

  onLogIn = (event) => {
    this.props.showLogInModal()
    this.props.onClickTrafficFunctions(event)
  }

  onSignUp = (event) => {
    this.props.showSignUpModal()
    this.props.onClickTrafficFunctions(event)
  }

  onTestModal = () => {
    this.props.showModal()
  }

  render(){
    return(
      <div className='login_signup_container'>
        <Button3
          name='log_in_button'
          onClick={this.onLogIn}
        >
          Log In
        </Button3>
        <Button3
          name='sign_up_button'
          onClick={this.onSignUp}
        >
          Sign Up
        </Button3>
      </div>
    )
  }
}