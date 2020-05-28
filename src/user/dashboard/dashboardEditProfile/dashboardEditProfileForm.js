import React from 'react'

import DashboardEditProfileFormInput from './dashboardEditProfileFormInput'
import DashboardEditProfileFormSelect from './dashboardEditProfileFormSelect'
import DashboardEditProfileFormButtonContainer from './dashboardEditProfileFormButtonContainer'

import genders from 'datasets/genders'
import months from 'datasets/months'
import states from 'datasets/states'

import ErrorContainer from 'error/errorContainer'

const dashboardEditProfileForm = (props) => {

  // <div className='edit_div'>

  // </div>

  return(
    <>
      <div className='alt_header'>
        <h3>Edit Profile</h3>
      </div>
      <form
        id='edit_profile_form'
        name='edit_profile_form'
        className='edit_profile_form'
      >
        <ErrorContainer errors={props.errors} />
          <div className='edit_div'>
            <label>Basics</label>
            <DashboardEditProfileFormInput
              type='text'
              id='user_name'
              name='user_name'
              placeholder='User Name'
              onChange={props.onChange}
              value={props.user_name}
            />
            <DashboardEditProfileFormInput
              type='text'
              id='email'
              name='email'
              placeholder='Email'
              onChange={props.onChange}
              value={props.email}
            />
          </div>
          <div className='edit_div'>
            <label>Name</label>
            <DashboardEditProfileFormInput
              type='text'
              id='first_name'
              name='first_name'
              placeholder='First Name'
              onChange={props.onChange}
              value={props.first_name}
            />
            <DashboardEditProfileFormInput
              type='text'
              id='last_name'
              name='last_name'
              placeholder='Last Name'
              onChange={props.onChange}
              value={props.last_name}
            />
          </div>
          <div className='edit_div'>
            <DashboardEditProfileFormSelect
              label='Gender'
              id='gender'
              name='gender'
              options={genders}
              onChange={props.onChange}
              value={props.gender}
            />
          </div>
          <div className='edit_div'>
            <label>Date of Birth</label>
              <DashboardEditProfileFormInput
                type='number'
                id='birth_day'
                name='birth_day'
                min='1'
                max='31'
                onChange={props.onChange}
                value={props.birth_day}
              />
              <DashboardEditProfileFormSelect
                id='birth_month'
                name='birth_month'
                options={months}
                onChange={props.onChange}
                value={props.birth_month}
              />
              <DashboardEditProfileFormInput
                type='number'
                id='birth_year'
                name='birth_year'
                min='1900'
                max='2020'
                onChange={props.onChange}
                value={props.birth_year}
              />
          </div>
          <div className='edit_div'>
            <label>Address</label>
            <DashboardEditProfileFormInput
              type='number'
              id='house_number'
              name='house_number'
              placeholder='Apt./House Number'
              min='1'
              max='9999'
              onChange={props.onChange}
              value={props.house_number}
            />
            <DashboardEditProfileFormInput
              type='text'
              id='street_name'
              name='street_name'
              placeholder='Street Name'
              onChange={props.onChange}
              value={props.street_name}
            />
            <DashboardEditProfileFormInput
              type='text'
              id='city_town'
              name='city_town'
              placeholder='City/Town'
              onChange={props.onChange}
              value={props.city_town}
            />
            <DashboardEditProfileFormSelect
              id='state'
              name='state'
              defaultOption='State'
              options={states}
              onChange={props.onChange}
              value={props.state}
            />
            <DashboardEditProfileFormInput
              type='number'
              id='zip_code'
              name='zip_code'
              min='10000'
              max='99999'
              onChange={props.onChange}
              value={props.zip_code}
            />
          </div>
          <DashboardEditProfileFormButtonContainer
            onSubmit={props.onSubmit}
            onReset={props.onReset}
            onCancel={props.onCancel}
          />
      </form>
    </>
  )
}

export default dashboardEditProfileForm