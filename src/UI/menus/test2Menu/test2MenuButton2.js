import React from 'react'

const Test2MenuButton2 = (props) => {
  return(
    <button
      name={props.name}
      interaction='click'
      className='test2MenuButton2'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Test2MenuButton2