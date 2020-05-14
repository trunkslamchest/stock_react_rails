import React from 'react'

import { NavLink } from 'react-router-dom'

import './dashboardProfileContainerButton.css'

const dashboardProfileContainerButton = (props) => {

  return(
    <NavLink
      exact to={props.link}
      name={props.name}
      interaction="click"
      className={'alt_button'}
      onClick={ props.onClick }
    >
      {props.children}
    </NavLink>
  )
}

export default dashboardProfileContainerButton