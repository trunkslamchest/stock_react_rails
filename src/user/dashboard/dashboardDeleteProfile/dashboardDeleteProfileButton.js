import React from 'react'

import './dashboardDeleteProfileButton.css'

const DashboardDeleteProfileButton = (props) => {
  return(
    <button
      type='button'
      id={props.id}
      name={props.name}
      className={props.className}
      interaction='click'
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </button>
  )
}

export default DashboardDeleteProfileButton