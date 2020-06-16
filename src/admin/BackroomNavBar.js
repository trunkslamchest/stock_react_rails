import React from 'react'

import { useHistory } from 'react-router-dom'

import './BackroomNavBar.css'

const BackroomNavBar = (props) => {

  let history = useHistory()

  const onClickRTVusersFunctions = () => {history.push('/backroom/RTVusers')}

  const onClickRTVpagesFunctions = () => {history.push('/backroom/RTVpages')}

  const onClickDBeditFunctions = () => {history.push('/backroom/DBedit')}

  const onClickSTAnalyticsFunctions = () => { history.push('/backroom/STAnalytics')}

  return(
    <div className='side_bar'>
      <ul>
        <li onClick={onClickRTVusersFunctions}>
          Real Time User Traffic
        </li>
        <li onClick={onClickRTVpagesFunctions}>
          Real Time Page Traffic
        </li>
        <li onClick={onClickDBeditFunctions}>
          Database Editor
        </li>
        <li onClick={onClickSTAnalyticsFunctions}>
          Statistical Analytics
        </li>
      </ul>
    </div>
  )

}

export default BackroomNavBar