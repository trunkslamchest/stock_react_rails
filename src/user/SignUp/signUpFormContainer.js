import React from 'react'

import SignUpForm from './signUpForm'

import genders from 'datasets/genders'
import months from 'datasets/months'
import states from 'datasets/states'

const SignUpFormContainer = (props) => {

  const signUpFormRef = React.createRef()

  const onChange = (event) => {props.onChange(event)}

  const onChecked = (event) => {props.onChecked(event)}

  const onSubmit = (event) => {
    if(props.errors.length === 0) signUpFormRef.current.scrollTop = 0
    props.onSubmit(event)
  }

  const onCancel = (event) => {props.onCancel(event)}

  const onReset = (event) =>{props.onReset(event)}

  return(
    <SignUpForm
      // functional props
      errors={props.errors}
      onChange={onChange}
      onChecked={onChecked}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onReset={onReset}
      signUpFormRef={signUpFormRef}
      // form datasets
      genders={genders}
      months={months}
      states={states}
      // form data
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
  )
}

export default SignUpFormContainer