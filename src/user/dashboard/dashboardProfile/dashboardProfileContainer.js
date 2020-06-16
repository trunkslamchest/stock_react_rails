import React, { useEffect } from 'react'

import DashboardProfileButtonContainer from './dashboardProfileButtonContainer'

import './dashboardProfileContainer.css'

const DashboardProfileContainer = (props) => {

  const {onPageLoadFunctions} = props

  const formatDate = (date) => {
    const number_ends = [ 'st', 'nd', 'rd', 'th' ]
    const number_split = localStorage.birth_day.split('').pop()

    if ((parseInt(date, 10) > 10) && (parseInt(date, 10) < 19)) {
      return `${date}` + number_ends[3]
    } else {
      if ((number_split === '1')) {
        return `${date}` + number_ends[0]
      } else if (number_split === '2') {
        return `${date}` + number_ends[1]
      } else if (number_split === '3') {
        return `${date}` + number_ends[2]
      } else {
        return `${date}` + number_ends[3]
      }
    }
  }

  useEffect(() => {onPageLoadFunctions('user_profile') }, [onPageLoadFunctions])

  const age = new Date().getFullYear() - props.user.birth_year

  return(
    <div className='dashboard_profile_wrapper'>
      <div className='alt_header'>
        <h3>{props.user.user_name}</h3>
        <h5>{props.user.email}</h5>
      </div>
      <div className='dashboard_profile_body'>
        <ul>
          <li>{props.user.first_name}</li>
          <li>{props.user.last_name}</li>
        </ul>
        <ul>
          <li>{props.user.gender}</li>
          <li>{age} years old</li>
          <li>{props.user.birth_month} {formatDate(props.user.birth_day)}, {props.user.birth_year}</li>
        </ul>
        <ul>
          <li>{props.user.house_number} {props.user.street_name}</li>
          <li>{props.user.city_town}, {props.user.state}</li>
          <li>{props.user.zip_code}</li>
        </ul>
        <ul>
          <li>Join Date</li>
          <li>{props.user.join_month} {formatDate(props.user.join_day)}, {props.user.join_year}</li>
        </ul>
          <DashboardProfileButtonContainer history={props.history} onClickTrafficFunctions={props.onClickTrafficFunctions} />
      </div>
    </div>
  )
}

export default DashboardProfileContainer