import React from 'react'

const LogInFormInput = (props) => {
  return(
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.user_name}
      />
    </>
  )
}

export default LogInFormInput