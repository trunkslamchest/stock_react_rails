import React from 'react'

import { Link } from 'react-router-dom'

import SignUpFormInput from './signUpFormInput'
import SignUpFormSelect from './signUpFormSelect'
import SignUpFormButtonContainer from './signUpFormButtonContainer'

import genders from 'datasets/genders'
import months from 'datasets/months'
import states from 'datasets/states'

import ErrorContainer from 'error/errorContainer'

const SignUpForm = (props) => {
  return(
    <>
      <div className='alt_header'>
        <h3>Create New Account</h3>
      </div>
      <form
        id='sign_up_form'
        name='sign_up_form'
        className='sign_up_form'
      >
        <ErrorContainer errors={props.errors} />
          <div className='sign_up_div'>
            <label>Basics</label>
            <SignUpFormInput
              type='text'
              id='sign_up_user_name'
              name='sign_up_user_name'
              placeholder='User Name'
              onChange={props.onChange}
              value={props.sign_up_user_name}
            />
            <SignUpFormInput
              type='password'
              id='sign_up_password'
              name='sign_up_password'
              placeholder='Password'
              onChange={props.onChange}
              value={props.sign_up_password}
            />
            <SignUpFormInput
              type='text'
              id='sign_up_email'
              name='sign_up_email'
              placeholder='Email Address'
              onChange={props.onChange}
              value={props.sign_up_email}
            />
          </div>
          <div className='sign_up_div'>
            <label>Name</label>
            <SignUpFormInput
              type='text'
              id='sign_up_first_name'
              name='sign_up_first_name'
              placeholder='First Name'
              onChange={props.onChange}
              value={props.sign_up_first_name}
            />
            <SignUpFormInput
              type='text'
              id='sign_up_last_name'
              name='sign_up_last_name'
              placeholder='Last Name'
              onChange={props.onChange}
              value={props.sign_up_last_name}
            />
          </div>
          <div className='sign_up_div'>
            <SignUpFormSelect
              label='Gender'
              id='sign_up_gender'
              name='sign_up_gender'
              defaultOption='Select'
              options={genders}
              onChange={props.onChange}
              value={props.sign_up_gender}
            />
          </div>
          <div className='sign_up_div'>
            <label>Date of Birth</label>
            <SignUpFormInput
              type='number'
              id='sign_up_birth_day'
              name='sign_up_birth_day'
              placeholder='Day'
              min='1'
              max='31'
              onChange={props.onChange}
              value={props.sign_up_birth_day}
            />
            <SignUpFormSelect
              id='sign_up_birth_month'
              name='sign_up_birth_month'
              defaultOption='Month'
              options={months}
              onChange={props.onChange}
              value={props.sign_up_birth_month}
            />
            <SignUpFormInput
              type='number'
              id='sign_up_birth_year'
              name='sign_up_birth_year'
              placeholder='Year'
              min='1900'
              max='2020'
              onChange={props.onChange}
              value={props.sign_up_birth_year}
            />
          </div>
          <div className='sign_up_div'>
            <label>Address</label>
            <SignUpFormInput
              type='number'
              id='sign_up_house_number'
              name='sign_up_house_number'
              placeholder='Apt./House Number'
              min='1'
              max='9999'
              onChange={props.onChange}
              value={props.sign_up_house_number}
            />
            <SignUpFormInput
              type='text'
              id='sign_up_street_name'
              name='sign_up_street_name'
              placeholder='Steet Name'
              onChange={props.onChange}
              value={props.sign_up_street_name}
            />
            <SignUpFormInput
              type='text'
              id='sign_up_city_town'
              name='sign_up_city_town'
              placeholder='City/Town'
              onChange={props.onChange}
              value={props.sign_up_city_town}
            />
            <SignUpFormSelect
              id='sign_up_state'
              name='sign_up_state'
              defaultOption='State'
              options={states}
              onChange={props.onChange}
              value={props.sign_up_state}
            />
            <SignUpFormInput
              type='number'
              id='sign_up_zip_code'
              name='sign_up_zip_code'
              placeholder='Zip Code'
              min='10000'
              max='99999'
              onChange={props.onChange}
              value={props.sign_up_zip_code}
            />
          </div>
          <hr />
          <div className='tos_agree_div'>
            <SignUpFormInput
              type='checkbox'
              id='TOS_agreement'
              name='TOS_agreement'
              className='TOS_check'
              checked={props.TOSagreement}
              onChange={props.onChecked}
            />
            I acknowledge that I have read and agree to the <Link to='/terms_of_service' target='_blank'>Terms and Conditions</Link> and <Link to='/privacy' target='_blank'>Privacy Policy</Link> statelments supplied by this_project.com
          </div>
          <hr />
          <SignUpFormButtonContainer
            onSubmit={props.onSubmit}
            onReset={props.onReset}
            onCancel={props.onCancel}
          />
      </form>
    </>
  )
}

export default SignUpForm