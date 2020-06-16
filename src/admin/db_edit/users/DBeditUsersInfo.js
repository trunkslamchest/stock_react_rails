import React from 'react'

import { useHistory } from 'react-router-dom'

import AltButton from '../../../UI/buttons/altButton'

const DBeditUsersInfo = (props) => {

  let history = useHistory()

  const user = props.user

  const editUserURL = '/backroom/DBedit/users/' + user.id + '/edit'
  const deleteUserURL = '/backroom/DBedit/users/' + user.id + '/delete'

  const editUserFunctions = () => {history.push(editUserURL)}

  const deleteUserFunctions = () => {history.push(deleteUserURL)}

  const user_info =
    <ul>
      <li>User ID: {user.id}</li>
      <li>User Name: {user.user_name}</li>
      <li>Email Address: {user.email}</li>
      <li>Access Level: {user.access}</li>
    <br />
      <li>First Name: {user.first_name}</li>
      <li>Last Name: {user.last_name}</li>
      <li>Gender: {user.gender}</li>
    <br />
      <li>Birth Day: {user.birth_day}</li>
      <li>Birth Month: {user.birth_month}</li>
      <li>Birth Year: {user.birth_year}</li>
    <br />
      <li>Apartment/House Number: {user.house_number}</li>
      <li>Street Name: {user.street_name}</li>
      <li>City/Town: {user.city_town}</li>
      <li>State: {user.state}</li>
      <li>Zip Code: {user.zip_code}</li>
    <br />
      <li>Join Day: {user.join_day}</li>
      <li>Join Month: {user.join_month}</li>
      <li>Join Year: {user.join_year}</li>
    </ul>

  const buttons = [
    <AltButton
      link={editUserURL}
      key={'DBe_edit_user'}
      name='DBedit_edit_user_button'
      onClick={editUserFunctions}
    >
      Edit User
    </AltButton>,
    <AltButton
      link={deleteUserURL}
      key={'DBe_delete_user'}
      name='DBedit_delete_user_button'
      onClick={deleteUserFunctions}
    >
      Delete User
    </AltButton>
  ]

  return(
    <div className='DBedit_default_wrapper'>
      <h3>User Info</h3>
        {user_info}
      <hr />
      <div className='DBedit_default_buttons_container'>
        {buttons}
      </div>
    </div>
  )
}

export default DBeditUsersInfo