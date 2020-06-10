import React from 'react'

import { Link } from 'react-router-dom'

import SignUpFormInput from './signUpFormInput'
import SignUpFormSelect from './signUpFormSelect'
import SignUpFormButtonContainer from './signUpFormButtonContainer'

import ErrorContainer from 'error/errorContainer'

const SignUpForm = (props) => {

  console.log(props.errors.password)

  return(
    <>
      <div className='alt_header'>
        <h3>Create New Account</h3>
      </div>
      <form
        id='sign_up_form'
        name='sign_up_form'
        className='sign_up_form'
        ref={props.signUpFormRef}
      >
        <div className='sign_up_div'>
          <label>Basics</label>
          <SignUpFormInput
            type='text'
            id='user_name'
            name='user_name'
            placeholder='User Name'
            onChange={props.onChange}
            value={props.user_name}
          />
          {props.errors.user_name ? <ErrorContainer errors={props.errors.user_name} /> : null }
          <SignUpFormInput
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            onChange={props.onChange}
            value={props.password}
          />
          {props.errors.password ? <ErrorContainer errors={props.errors.password} /> : null }
          <SignUpFormInput
            type='text'
            id='email'
            name='email'
            placeholder='Email Address'
            onChange={props.onChange}
            value={props.email}
          />
          {props.errors.email ? <ErrorContainer errors={props.errors.email} /> : null }
        </div>
        <div className='sign_up_div'>
          <label>Name</label>
          <SignUpFormInput
            type='text'
            id='first_name'
            name='first_name'
            placeholder='First Name'
            onChange={props.onChange}
            value={props.first_name}
          />
          <SignUpFormInput
            type='text'
            id='last_name'
            name='last_name'
            placeholder='Last Name'
            onChange={props.onChange}
            value={props.last_name}
          />
        </div>
        <div className='sign_up_div'>
          <SignUpFormSelect
            label='Gender'
            id='gender'
            name='gender'
            defaultOption='Select'
            options={props.genders}
            onChange={props.onChange}
            value={props.gender}
          />
        </div>
        <div className='sign_up_div'>
          <label>Date of Birth</label>
          <SignUpFormInput
            type='number'
            id='birth_day'
            name='birth_day'
            placeholder='Day'
            min='1'
            max='31'
            onChange={props.onChange}
            value={props.birth_day}
          />
          <SignUpFormSelect
            id='birth_month'
            name='birth_month'
            defaultOption='Month'
            options={props.months}
            onChange={props.onChange}
            value={props.birth_month}
          />
          <SignUpFormInput
            type='number'
            id='birth_year'
            name='birth_year'
            placeholder='Year'
            min='1900'
            max='2020'
            onChange={props.onChange}
            value={props.birth_year}
          />
        </div>
        <div className='sign_up_div'>
          <label>Address</label>
          <SignUpFormInput
            type='number'
            id='house_number'
            name='house_number'
            placeholder='Apt./House Number'
            min='1'
            max='9999'
            onChange={props.onChange}
            value={props.house_number}
          />
          <SignUpFormInput
            type='text'
            id='street_name'
            name='street_name'
            placeholder='Steet Name'
            onChange={props.onChange}
            value={props.street_name}
          />
          <SignUpFormInput
            type='text'
            id='city_town'
            name='city_town'
            placeholder='City/Town'
            onChange={props.onChange}
            value={props.city_town}
          />
          <SignUpFormSelect
            id='state'
            name='state'
            defaultOption='State'
            options={props.states}
            onChange={props.onChange}
            value={props.state}
          />
          <SignUpFormInput
            type='number'
            id='zip_code'
            name='zip_code'
            placeholder='Zip Code'
            min='10000'
            max='99999'
            onChange={props.onChange}
            value={props.zip_code}
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
      </form>
      <SignUpFormButtonContainer
        onSubmit={props.onSubmit}
        onReset={props.onReset}
        onCancel={props.onCancel}
      />
    </>
  )
}

export default SignUpForm