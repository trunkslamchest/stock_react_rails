import React from 'react'

import './defaultButton.css'

const DefaultButton = (props) => {
  return(
    <button
      id={props.id}
      name={props.name}
      className='def_button'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default DefaultButton