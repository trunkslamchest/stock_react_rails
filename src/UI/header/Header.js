import React from 'react'

import GuestHeader from './headers/guestHeader'
import NormalHeader from './headers/normalHeader'
import AdminHeader from './headers/adminHeader'

import HeaderButton from './headerButton'

import './header.css'

export default class Header extends React.Component {

  onClickHomeFunctions = (event) => { this.props.onClickTrafficFunctions(event) }

  render(){

    let home_link = null

    if(!!this.props.user_token) {
      home_link =
        <HeaderButton
          link='/'
          name='header_home_button'
          onClick={this.onClickHomeFunctions}
        >
          Home
        </HeaderButton>
    }

    return(
      <>
        <div className='header'>
          <div className='header_left'>
            {home_link}
          </div>
          <div className='header_right'>
            {
              {
                false: <GuestHeader
                          onClickTrafficFunctions={this.props.onClickTrafficFunctions}
                          showLogInModal={this.props.showLogInModal}
                          showSignUpModal={this.props.showSignUpModal}
                        />,
                true: (() => {
                  switch(localStorage.access) {
                    case 'normal': return <NormalHeader
                                            user_name={this.props.user_name}
                                            showLogOutModal={this.props.showLogOutModal}
                                            showProfileMenu={this.showProfileMenu}
                                            onClickTrafficFunctions={this.props.onClickTrafficFunctions}
                                          />;
                    case 'admin': return <AdminHeader user_name={this.props.user_name} onClickTrafficFunctions={this.props.onClickTrafficFunctions} />;
                    default: return null;
                  }
                })()
              }[!!this.props.user_token]
            }
          </div>
        </div>
      </>
    )
  }
}