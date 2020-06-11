import React from 'react'

import DashboardEditProfileFormInput from './dashboardEditProfileFormInput'
import DashboardEditProfileFormSelect from './dashboardEditProfileFormSelect'
import DashboardEditProfileFormButtonContainer from './dashboardEditProfileFormButtonContainer'

import genders from 'datasets/genders'
import months from 'datasets/months'
import states from 'datasets/states'

import ErrorContainer from 'error/errorContainer'

const dashboardEditProfileForm = (props) => {
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
          {props.errors.user_name ? <ErrorContainer errors={props.errors.user_name} /> : null }
          <DashboardEditProfileFormInput
            type='text'
            id='email'
            name='email'
            placeholder='Email'
            onChange={props.onChange}
            value={props.email}
          />
          {props.errors.email ? <ErrorContainer errors={props.errors.email} /> : null }
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
          {props.errors.first_name ? <ErrorContainer errors={props.errors.first_name} /> : null }
          <DashboardEditProfileFormInput
            type='text'
            id='last_name'
            name='last_name'
            placeholder='Last Name'
            onChange={props.onChange}
            value={props.last_name}
          />
          {props.errors.last_name ? <ErrorContainer errors={props.errors.last_name} /> : null }
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
          {props.errors.gender ? <ErrorContainer errors={props.errors.gender} /> : null }
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
            {props.errors.birth_day ? <ErrorContainer errors={props.errors.birth_day} /> : null }
            <DashboardEditProfileFormSelect
              id='birth_month'
              name='birth_month'
              options={months}
              onChange={props.onChange}
              value={props.birth_month}
            />
            {props.errors.birth_month ? <ErrorContainer errors={props.errors.birth_month} /> : null }
            <DashboardEditProfileFormInput
              type='number'
              id='birth_year'
              name='birth_year'
              min='1900'
              max='2020'
              onChange={props.onChange}
              value={props.birth_year}
            />
            {props.errors.birth_year ? <ErrorContainer errors={props.errors.birth_year} /> : null }

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
          {props.errors.house_number ? <ErrorContainer errors={props.errors.house_number} /> : null }
          <DashboardEditProfileFormInput
            type='text'
            id='street_name'
            name='street_name'
            placeholder='Street Name'
            onChange={props.onChange}
            value={props.street_name}
          />
          {props.errors.street_name ? <ErrorContainer errors={props.errors.street_name} /> : null }
          <DashboardEditProfileFormInput
            type='text'
            id='city_town'
            name='city_town'
            placeholder='City/Town'
            onChange={props.onChange}
            value={props.city_town}
          />
          {props.errors.city_town ? <ErrorContainer errors={props.errors.city_town} /> : null }
          <DashboardEditProfileFormSelect
            id='state'
            name='state'
            defaultOption='State'
            options={states}
            onChange={props.onChange}
            value={props.state}
          />
          {props.errors.state ? <ErrorContainer errors={props.errors.state} /> : null }
          <DashboardEditProfileFormInput
            type='number'
            id='zip_code'
            name='zip_code'
            min='10000'
            max='99999'
            onChange={props.onChange}
            value={props.zip_code}
          />
          {props.errors.zip_code ? <ErrorContainer errors={props.errors.zip_code} /> : null }
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