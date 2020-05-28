import React from 'react'

const SignUpFormButton = (props) => {
  return(
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      className='alt_button'
      interaction='click'
      onClick={props.onClick}
      value={props.value}
    />
  )
}

export default SignUpFormButton