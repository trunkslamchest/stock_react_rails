import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderButton = (props) => {
  return(
    <NavLink
      exact to={props.link}
      name={props.name}
      interaction='click'
      className='myProfileMenuButton'
      activeClassName='default_active'
      onClick={props.onClick}
    >
      {props.children}
    </NavLink>
  )
}

export default HeaderButton