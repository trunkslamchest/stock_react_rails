import React from 'react'

const SignUpFormSelect = (props) => {
  return(
    <>
      {props.label ? <label htmlFor={props.id}>{props.label}</label> : null }
      <br />
      <select
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.sign_up_gender}
      >
        <option value='' key='blank'>{props.defaultOption}</option>
        { props.options.map ( option => <option value={option} key={props.options.indexOf(option)}>{option}</option> )}
      </select>
    </>
  )
}

export default SignUpFormSelect