import React from 'react'

import { NavLink, useHistory } from 'react-router-dom'

const DashboardNavBarButton = (props) => {

  let currentLocation = useHistory().location.pathname

  return(
    <NavLink
      exact to={props.link}
      name={props.name}
      interaction='click'
      className={props.link === currentLocation ? 'dashboard_navbar_button_disabled' : 'dashboard_navbar_button'}
      activeClassName='dashboard_navbar_button_active'
      onClick={props.link === currentLocation ? null : props.onClick}
    >
      {props.children}
    </NavLink>
  )
}

export default DashboardNavBarButton