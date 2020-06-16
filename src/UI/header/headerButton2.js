import React from 'react'

import './headerButton2.css'

const HeaderButton2 = (props) => {
  return(
    <button
      name={props.name}
      interaction='click'
      className='header_button2'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default HeaderButton2