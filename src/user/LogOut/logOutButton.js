import React from 'react'

const logOutButton = (props) => {
  return(
    <button
      type='button'
      id={props.id}
      name={props.name}
      className={props.className}
      interaction={props.interaction}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </button>
  )
}

export default logOutButton