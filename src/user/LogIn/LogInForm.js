import React from 'react'

import LogInFormInput from './logInFormInput'
import LogInFormButtonContainer from './logInFormButtonContainer'

import ErrorContainer from 'error/errorContainer'

const LogInForm = (props) => {
  return(
    <>
      <div className='alt_header'>
        <h3>Log In</h3>
      </div>
      <form
        id='log_in_form'
        name='log_in_form'
        className='log_in_form'
      >
        <div className='log_in_div'>
          {props.errors.form ? <ErrorContainer errors={props.errors.form} /> : null }
          <LogInFormInput
            type='text'
            label='User Name'
            id='user_name'
            name='user_name'
            onChange={props.onChange}
            value={props.user_name}
          />
          {props.errors.user_name ? <ErrorContainer errors={props.errors.user_name} /> : null }
          <br />
          <LogInFormInput
            type='password'
            label='Password'
            id='password'
            name='password'
            onChange={props.onChange}
            value={props.password}
          />
        {props.errors.password ? <ErrorContainer errors={props.errors.password} /> : null }
        </div>
        <LogInFormButtonContainer
          onSubmit={props.onSubmit}
          onCancel={props.onCancel}
        />
      </form>
    </>
  )
}

export default LogInForm