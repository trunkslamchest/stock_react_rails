import React from 'react'

import LogIn from '../user/logIn/logIn'
import SignUp from '../user/signUp/signUp'


import Modal from 'UI/modal/modal'
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

  render(){
    return(
      <div className='login_signup_container'>
        <Modal
          showModal={ this.props.logInModal }
        >
          <LogIn
            history={this.props.history}
            onClickTrafficFunctions={this.props.onClickTrafficFunctions}
            setToken={this.props.setToken}
            showLogInModal={this.props.showLogInModal}
            updateLogin={this.props.updateLogin}
          />
        </Modal>
        <Modal
          showModal={ this.props.signUpModal }
        >
          <SignUp
            history={this.props.history}
            onClickTrafficFunctions={this.props.onClickTrafficFunctions}
            setToken={this.props.setToken}
            showSignUpModal={this.props.showSignUpModal}
            updateLogin={this.props.updateLogin}
          />
        </Modal>
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