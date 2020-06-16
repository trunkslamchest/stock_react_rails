import React from 'react'

import { NavLink } from 'react-router-dom'

const HomeLoginSignupButton = (props) => {
  return(
    <NavLink
      exact to={props.link ? props.link : null }
      name={props.name}
      interaction='click'
      className='login_signup_button'
      onClick={ props.onClick }
    >
      {props.children}
    </NavLink>
  )
}

export default HomeLoginSignupButton