import React from 'react'

import './dashboardProfileButton.css'

const dashboardProfileButton = (props) => {
  return(
    <button
      type={props.type}
      id={props.id}
      name={props.name}
      interaction={props.interaction}
      className='alt_button'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default dashboardProfileButton