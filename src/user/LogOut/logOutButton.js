import React from 'react'

const logOutButton = (props) => {
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

export default logOutButton