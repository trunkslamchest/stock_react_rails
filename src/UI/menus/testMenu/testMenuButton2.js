import React from 'react'

const testMenuButton2 = (props) => {
  return(
    <button
      name={props.name}
      interaction='click'
      className='testMenuButton2'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default testMenuButton2