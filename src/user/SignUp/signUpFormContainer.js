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
        user_name={props.user_name}
        password={props.password}
        email={props.email}
        first_name={props.first_name}
        last_name={props.last_name}
        gender={props.gender}
        birth_day={props.birth_day}
        birth_month={props.birth_month}
        birth_year={props.birth_year}
        house_number={props.house_number}
        street_name={props.street_name}
        city_town={props.city_town}
        state={props.state}
        zip_code={props.zip_code}
        TOSagreement={props.TOSagreement}
      />
    </div>
  )
}

export default SignUpFormContainer