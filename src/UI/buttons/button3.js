import React from 'react'

import './button3.css'

const Button3 = (props) => {
  return(
    <button
      name={props.name}
      interaction='click'
      className='button3'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button3