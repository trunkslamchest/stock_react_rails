import React from 'react'

import { useHistory } from 'react-router-dom'

const DBeditNavBar = (props) => {

  let history = useHistory()

  const onClickDBusersFunctions = () => {history.push('/backroom/DBedit/users')}

  return(
    <div className='DBedit_navbar_item' onClick={onClickDBusersFunctions}>
      <p>Users</p>
    </div>
  )
}

export default DBeditNavBar