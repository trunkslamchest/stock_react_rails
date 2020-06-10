import React from 'react'

// import { NavLink } from 'react-router-dom'

import MyProfileMenuButton from './myProfileMenuButton'
import MyProfileMenuButton2 from './myProfileMenuButton2'

import DropDownMenu from '../dropDownMenu'
import DropDownMenuItem from '../dropDownMenuItem'

import './myProfileMenu.scss'

const MyProfileMenu = (props) => {

  const onLogOut = () => {
    props.showProfileMenu()
    props.showLogOutModal()
  }

  return(
    <DropDownMenu
      divClass='myProfileMenu'
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