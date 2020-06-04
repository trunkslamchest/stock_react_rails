import React from 'react'

// import { NavLink } from 'react-router-dom'

import MyProfileMenuButton from './myProfileMenuButton'
import MyProfileMenuButton2 from './myProfileMenuButton2'

import DropDownMenu from '../dropDownMenu'
import DropDownMenuItem from '../dropDownMenuItem'

import './myProfileMenu.scss'

const MyProfileMenu = (props) => {

  return(
    <DropDownMenu
      divClass='myProfileMenu'
    >
      <MyProfileMenuButton
        link='/dashboard'
        name='My Profile'
      >
        Dashboard
      </MyProfileMenuButton>
      <MyProfileMenuButton
        link='/dashboard/profile'
        name='View Profile'
      >
        View Profile
      </MyProfileMenuButton>
      <MyProfileMenuButton
        link='/dashboard/profile/edit'
        name='Edit Profile'
      >
        Edit Profile
      </MyProfileMenuButton>
      <MyProfileMenuButton2
        name='Log Out'
        onClick={props.showLogOutModal}
      >
        Log Out
      </MyProfileMenuButton2>
    </DropDownMenu>
  )
}

export default MyProfileMenu