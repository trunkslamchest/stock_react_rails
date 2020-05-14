import React from 'react'

import { NavLink } from 'react-router-dom'

import './dashboardDeleteProfileButton.css'

const DashboardDeleteProfileButton = (props) => {
  return(
    <NavLink
      exact to={ props.link }
      name={ props.name }
      interaction='click'
      className={ props.className }
      onClick={ props.onClick }
      onMouseEnter={ props.onMouseEnter }
      onMouseLeave={ props.onMouseLeave }
    >
      {props.children}
    </NavLink>
  )
}

export default DashboardDeleteProfileButton