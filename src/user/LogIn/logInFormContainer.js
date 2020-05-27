import React from 'react'

import ErrorContainer from 'error/errorContainer'

const LogInFormContainer = (props) => {

  const submitFunctions = (event) => { props.logInSubmitted(event) }

  const onChangeFunctions = (event) => { props.onChange(event) }

  const onCancelFunctions = (event) => { props.onCancel(event) }

  // let errors = []

  // if(!!props.errors) {
  //   errors = <div className="default_error_report" key={"log_in_error_report"}>
  //     { props.errors.map( error =>
  //       <div className="default_error_item" key={"log_in_error_item"}>
  //         { error }
  //       </div>
  //     )}
  //   </div>
  // }

  return(
    <div className="default_wrapper">
      <div className="alt_header">
        <h3>Log In</h3>
      </div>
      <form
        name="log_in_form"
        interaction="submit"
        className="log_in_form"
        onSubmit={ submitFunctions }
      >
        <ErrorContainer errors={ props.errors }/>
        <div className="log_in_div">
          <label htmlFor="log_in_user_name">User Name</label>
          <br />
          <input
            id="log_in_user_name"
            type="text"
            name="user_name"
            onChange={ onChangeFunctions }
            value={ props.user_name }
          />
          <br />
          <label htmlFor="log_in_password">Password</label>
          <br />
          <input
            id="log_in_password"
            type="password"
            name="password"
            onChange={ onChangeFunctions }
            value={ props.password }
          />
        </div>
        <div className="log_in_buttons_container">
          <input
            type="submit"
            className="alt_button"
          />
          <input
            type="reset"
            name="Log In Form"
            interaction="Cancel"
            className="alt_button"
            onClick={ onCancelFunctions }
            value="Cancel"
          />
        </div>
      </form>
    </div>
  )

}

export default LogInFormContainer