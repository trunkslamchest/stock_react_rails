import React from 'react'

import HeaderButton from '../headerButton'

import HeaderButton2 from '../headerButton2'

import '../header.css'
import '../headerButton.css'
import '../headerButton2.css'

const NormalHeader = (props) => {

  const showLogOutModal = () => {
    props.showLogOutModal()
  }

  return(
    <>
      <span
        className='header_greeting'>
        Logged In: {props.user_name}
      </span>
      <div className='header_nav_links'>
        <HeaderButton
          link='/dashboard'
          name='header_dashboard_button'
          onClick={props.onClickTrafficFunctions}
        >
          Dashboard
        </HeaderButton>
        <HeaderButton2
          name='log_out_button'
          onClick={showLogOutModal}
        >
          Log Out
        </HeaderButton2>
      </div>
    </>
  )
}

export default NormalHeader