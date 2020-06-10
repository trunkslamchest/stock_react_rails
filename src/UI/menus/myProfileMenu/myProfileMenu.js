import React from 'react'

import DropDownMenu from '../dropDownMenu'

import MyProfileMenuButton from './myProfileMenuButton'
import MyProfileMenuButton2 from './myProfileMenuButton2'

import './myProfileMenu.scss'
import './myProfileMenuButton.scss'
import './myProfileMenuButton2.scss'

const MyProfileMenu = (props) => {

  const onLogOut = () => {
    props.showProfileMenu()
    props.showLogOutModal()
  }

  return(
    <DropDownMenu
      divClass='myProfileMenu'
      showMenu={props.showProfileMenu}
    >
      <MyProfileMenuButton
        link='/dashboard'
        name='My Profile'
        onClick={props.showProfileMenu}
      >
        Dashboard
      </MyProfileMenuButton>
      <MyProfileMenuButton
        link='/dashboard/profile'
        name='View Profile'
        onClick={props.showProfileMenu}
      >
        View Profile
      </MyProfileMenuButton>
      <MyProfileMenuButton
        link='/dashboard/profile/edit'
        name='Edit Profile'
        onClick={props.showProfileMenu}
      >
        Edit Profile
      </MyProfileMenuButton>
      <MyProfileMenuButton2
        name='Log Out'
        onClick={onLogOut}
      >
        Log Out
      </MyProfileMenuButton2>
    </DropDownMenu>
  )
}

export default MyProfileMenu