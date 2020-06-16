import React from 'react'

import DBeditUsersTable from './DBeditUsersTable'

import AltButton from '../../../UI/buttons/altButton'

const DBeditUsersIndex = (props) => {

  const distributeUsers = props.users && props.users.map( user_obj =>
    <DBeditUsersTable
      key={user_obj.id}
      user={user_obj}
      getUser={props.getUser}
    />
  )

  const addButton =
    <AltButton
      link='/backroom/DBedit/users/add'
      name='DBedit_add_user_button'
    >
      Add User
    </AltButton>

  const DBeditTableFrame =
    <table
      className='DBedit_table'
    >
      <tbody>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Birth Day</th>
          <th>Birth Month</th>
          <th>Birth Year</th>
          <th>House Number</th>
          <th>Street Name</th>
          <th>City/Town</th>
          <th>State</th>
          <th>Zip Code</th>
          <th>Join Date</th>
        </tr>
        {distributeUsers}
      </tbody>
    </table>

  return(
    <>
      {addButton}
      {DBeditTableFrame}
    </>
  )
}

export default DBeditUsersIndex