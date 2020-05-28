import React from 'react'

import SignUpForm from './signUpForm'

const SignUpFormContainer = (props) => {

  const onChange = (event) => {props.onChange(event)}

  const onChecked = (event) => {props.onChecked(event)}

  const onSubmit = (event) => {props.onSubmit(event)}

  const onCancel = (event) => {props.onCancel(event)}

  const onReset = (event) =>{props.onReset(event)}

  return(
    <div className='default_wrapper'>
      <SignUpForm
        errors={props.errors}
        onChange={onChange}
        onChecked={onChecked}
        onSubmit={onSubmit}
        onCancel={onCancel}
        onReset={onReset}
        sign_up_user_name={props.sign_up_user_name}
        sign_up_password={props.sign_up_password}
        sign_up_email={props.sign_up_email}
        sign_up_first_name={props.sign_up_first_name}
        sign_up_last_name={props.sign_up_last_name}
        sign_up_gender={props.sign_up_gender}
        sign_up_birth_day={props.sign_up_birth_day}
        sign_up_birth_month={props.sign_up_birth_month}
        sign_up_birth_year={props.sign_up_birth_year}
        sign_up_house_number={props.sign_up_house_number}
        sign_up_street_name={props.sign_up_street_name}
        sign_up_city_town={props.sign_up_city_town}
        sign_up_state={props.sign_up_state}
        sign_up_zip_code={props.sign_up_zip_code}
        TOSagreement={props.TOSagreement}
      />
    </div>
  )
}

export default SignUpFormContainer