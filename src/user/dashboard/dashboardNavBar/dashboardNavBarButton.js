import React from 'react'

import { NavLink } from 'react-router-dom'

const DashboardNavBarButton = (props) => {
  return(
    <NavLink
      exact to={props.link}
      name={props.name}
      interaction="click"
      className="dashboard_navbar_button"
      activeClassName='dashboard_navbar_button_active'
      onClick={ props.onClick }
    >
      {props.children}
    </NavLink>
  )
}

export default DashboardNavBarButton