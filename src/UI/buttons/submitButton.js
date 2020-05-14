import React from 'react'
import { NavLink } from 'react-router-dom'

import './altButton.css'

const SubmitButton = (props) => {
  return(
    <NavLink
      exact to={props.link}
      name={props.buttonName}
      interaction='submit'
      className='alt_button'
      type='submit'
      onClick={props.onClick}
    >
      {props.children}
    </NavLink>
  )
}

export default SubmitButton