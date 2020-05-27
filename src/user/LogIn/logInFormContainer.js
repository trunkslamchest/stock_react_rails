import React from 'react'

import LogInForm from 'user/logIn/logInForm'

const LogInFormContainer = (props) => {

  const onChange = (event) => { props.onChange(event) }

  const onSubmit = (event) => { props.onSubmit(event) }

  const onCancel = (event) => { props.onCancel(event) }

  return(
    <div className="default_wrapper">
      <div className="alt_header">
        <h3>Log In</h3>
        <LogInForm
          errors={props.errors}
          user_name={props.user_name}
          password={props.password}
          onChange={onChange}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      </div>
    </div>
  )
}

export default LogInFormContainer