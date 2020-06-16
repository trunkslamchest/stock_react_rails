import React from 'react'
import { NavLink } from 'react-router-dom'

import './headerButton.css'

const HeaderButton = (props) => {
  return(
    <NavLink
      exact to={props.link}
      name={props.name}
      interaction='click'
      className='default_header_link'
      activeClassName='default_active'
      onClick={props.onClick}
    >
      {props.children}
    </NavLink>
  )
}

export default HeaderButton