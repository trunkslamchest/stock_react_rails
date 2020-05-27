import React from 'react'

import LogInForm from 'user/logIn/logInForm'

const LogInFormContainer = (props) => {

  const onChange = (event) => {props.onChange(event)}

  const onSubmit = (event) => {props.onSubmit(event)}

  const onCancel = (event) => {props.onCancel(event)}

  return(
    <div className="default_wrapper">
      <LogInForm
        errors={props.errors}
        onChange={onChange}
        onSubmit={onSubmit}
        onCancel={onCancel}
        user_name={props.user_name}
        password={props.password}
      />
    </div>
  )
}

export default LogInFormContainer