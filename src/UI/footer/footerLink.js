import React from 'react'

import { NavLink } from 'react-router-dom'

const FooterLink = (props) => {
  return(
    <NavLink
      exact to={props.link}
      name={props.name}
      interaction='click'
      className='footer_link'
      activeClassName='footer_link_active'
      target='_blank'
      onClick={props.onClick}
    >
      {props.children}
    </NavLink>
  )
}

export default FooterLink