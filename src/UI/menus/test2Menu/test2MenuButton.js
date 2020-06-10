import React from 'react'
import { NavLink } from 'react-router-dom'

const Test2Button = (props) => {
  return(
    <NavLink
      exact to={props.link}
      name={props.name}
      interaction='click'
      className='test2MenuButton'
      activeClassName='default_active'
      onClick={props.onClick}
    >
      {props.children}
    </NavLink>
  )
}

export default Test2Button