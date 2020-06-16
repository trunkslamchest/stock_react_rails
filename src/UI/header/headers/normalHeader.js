import React from 'react'

import MyProfileMenu from '../../menus/myProfileMenu/myProfileMenu'
import TestMenu from '../../menus/testMenu/testMenu'
import Test2Menu from '../../menus/test2Menu/test2Menu'

import HeaderButton2 from '../headerButton2'

import '../header.css'
import '../headerButton2.css'

export default class NormalHeader extends React.Component {

  state = {
    showProfileMenu: false,
    showTestMenu: false,
    showTest2Menu: false,
  }

  showProfileMenu = () => {
    let switchMenu = !this.state.showProfileMenu
    this.setState({showProfileMenu: switchMenu})
  }

  showTestMenu = () => {
    let switchMenu = !this.state.showTestMenu
    this.setState({showTestMenu: switchMenu})
  }

  showTest2Menu = () => {
    let switchMenu = !this.state.showTest2Menu
    this.setState({showTest2Menu: switchMenu})
  }

  render(){
    return(
      <>
        <div className='header_greeting'>
          Hello, {this.props.user_name}!
        </div>
        <div className='header_nav_links'>
          <div
            className='header_nav_links_menu_container'
            onMouseEnter={this.onHover}
            onMouseLeave={this.onHover}
          >
            <HeaderButton2
              name='header_my_profile_button'
              onClick={this.showProfileMenu}
            >
              My Profile
            </HeaderButton2>
            {this.state.showProfileMenu ? <MyProfileMenu showLogOutModal={this.props.showLogOutModal} showProfileMenu={this.showProfileMenu} /> : null}
          </div>
          <div className='header_nav_links_menu_container'>
            <HeaderButton2
              name='test_button_1'
              onClick={this.showTestMenu}
            >
              Test Button 1
            </HeaderButton2>
            {this.state.showTestMenu ? <TestMenu showTestMenu={this.showTestMenu} /> : null}
          </div>
          <div className='header_nav_links_menu_container'>
          <HeaderButton2
            name='test_button_2'
            onClick={this.showTest2Menu}
          >
            Test Button 2
          </HeaderButton2>
            {this.state.showTest2Menu ? <Test2Menu showTest2Menu={this.showTest2Menu} /> : null}
          </div>
        </div>
      </>
    )
  }
}