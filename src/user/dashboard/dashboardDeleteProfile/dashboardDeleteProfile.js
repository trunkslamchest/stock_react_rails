import React from 'react'

import DashboardDeleteProfileButtonContainer from './dashboardDeleteProfileButtonContainer'

import userFunctions from '../../../utility/userFunctions'

import './dashboardDeleteProfile.css'

export default class DashboardDeleteProfile extends React.Component {

  componentDidMount(){this.props.onPageLoadFunctions('delete_profile')}

  onConfirm = (event) => {
    userFunctions('delete', `http://localhost:3001/users/${this.props.user_id}`)
    .then(
      this.props.logOut(),
      this.props.onClickTrafficFunctions(event),
      this.props.history.push('/')
    )
  }

  onCancel = (event) => {
    this.props.onClickTrafficFunctions(event)
    this.props.history.push('/dashboard/profile')
  }

  render(){
    return(
      <div className='default_wrapper'>
        <div className='alt_header'>
          <h3>Are you sure you want to delete your profile?</h3>
        </div>
          <DashboardDeleteProfileButtonContainer
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}
          />
      </div>
    )
  }
}