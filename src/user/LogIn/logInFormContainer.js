import React from 'react'

import ErrorContainer from 'error/errorContainer'

const LogInFormContainer = (props) => {

  const onSubmitFunctions = (event) => { props.logInSubmitted(event) }

  const onChangeFunctions = (event) => { props.onChange(event) }

  const onCancelFunctions = (event) => { props.onCancel(event) }

  return(
    <div className="default_wrapper">
      <div className="alt_header">
        <h3>Log In</h3>
      </div>
      <form
        id="log_in_form"
        name="log_in_form"
        className="log_in_form"
      >
        <ErrorContainer errors={ props.errors }/>
        <div className="log_in_div">
          <label htmlFor="log_in_user_name">User Name</label>
          <br />
          <input
            type="text"
            id="log_in_user_name"
            name="user_name"
            onChange={ onChangeFunctions }
            value={ props.user_name }
          />
          <br />
          <label htmlFor="log_in_password">Password</label>
          <br />
          <input
            type="password"
            id="log_in_password"
            name="password"
            onChange={ onChangeFunctions }
            value={ props.password }
          />
        </div>
        <div className="log_in_buttons_container">
          <input
            type="submit"
            id="log_in_submit"
            name="log_in_submit"
            className="alt_button"
            interaction="submit"
            onClick={ onSubmitFunctions }
            value="Login"
          />
          <input
            type="reset"
            id="log_in_cancel"
            name="log_in_cancel"
            className="alt_button"
            interaction="cancel"
            onClick={ onCancelFunctions }
            value="Cancel"
          />
        </div>
      </form>
    </div>
  )

}

export default LogInFormContainer