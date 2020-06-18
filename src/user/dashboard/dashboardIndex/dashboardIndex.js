import React, { useEffect } from 'react'

const DashboardIndex = (props) => {

  const {onPageLoadFunctions} = props

  useEffect(() => {onPageLoadFunctions('user_dashboard') }, [onPageLoadFunctions])

  return(
    <div className='dashboard_index'>
      <div className='alt_header'>
        <h3>Welcome, {props.firstName}!</h3>
      </div>
    </div>
  )
}

export default DashboardIndex