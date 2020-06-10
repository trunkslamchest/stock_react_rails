import React from 'react'

import LogOutButtonContainer from './logOutButtonContainer'

import './logOut.css'

const LogOut = (props) => {

  const onConfirm = (event) => {
    props.onClickTrafficFunctions(event)
    props.showLogOutModal()
    props.logOut(props.token)
    props.history.push('/')
  }

  const onCancel = (event) => {
    props.onClickTrafficFunctions(event)
    props.showLogOutModal()
  }

  return(
    <>
      <div className='alt_header'>
        <h3>Are you sure you want to log out?</h3>
      </div>
      <LogOutButtonContainer
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  )
}

export default LogOut