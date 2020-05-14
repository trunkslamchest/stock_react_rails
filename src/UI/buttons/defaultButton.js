import React from 'react'
import { NavLink } from 'react-router-dom'

import './defaultButton.css'

const DefaultButton = (props) => {
  return(
    <NavLink
      exact to={props.link}
      name={props.buttonName}
      interaction='click'
      className='def_button'
      onClick={props.onClick}
    >
      {props.children}
    </NavLink>
  )
}

export default DefaultButton