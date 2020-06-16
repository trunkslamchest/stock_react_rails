import React from 'react'

import './altButton.css'

const AltButton = (props) => {
  return(
    <button
      name={props.name}
      interaction='click'
      className='alt_button'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default AltButton