import React from 'react'

import LogIn from '../user/logIn/logIn'

import Modal from 'UI/modal/modal'
import HomeLoginSignupButton from './homeLoginSignupButton'
import Button3 from 'UI/buttons/button3'

import './homeLoginSignup.css'

export default class HomeLoginSignup extends React.Component {

  state={ showLogInModal: false }

  logInModalFunctions = () => {
    let switchModal = !this.state.showLogInModal
    this.setState({showLogInModal: switchModal})
  }

  render(){
    return(
      <div className='login_signup_container'>
        <Modal
          showLogInModal={ this.state.showLogInModal }
        >
          <LogIn
            history={this.props.history}
            logInModalFunctions={this.logInModalFunctions}
            onPageLoadFunctions={this.props.onPageLoadFunctions}
            onClickTrafficFunctions={this.props.onClickTrafficFunctions}
            setToken={this.props.setToken}
            updateLogin={this.props.updateLogin}
          />
        </Modal>
        <Button3
          name='log_in_button'
          onClick={this.logInModalFunctions}
        >
          Log In
        </Button3>
        <HomeLoginSignupButton
          link='/sign_up'
          name='sign_up_button'
          onClick={this.props.onClickTrafficFunctions}
        >
          Sign Up
        </HomeLoginSignupButton>
      </div>
    )
  }
}