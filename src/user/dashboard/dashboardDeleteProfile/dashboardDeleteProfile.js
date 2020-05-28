import React from 'react'

import DashboardDeleteProfileButtonContainer from './dashboardDeleteProfileButtonContainer'

import userFunctions from '../../../utility/userFunctions'

import './dashboardDeleteProfile.css'

export default class DashboardDeleteProfile extends React.Component {

  componentDidMount(){this.props.onPageLoadFunctions('delete_profile')}

  onClickConfirm = (event) => {
    userFunctions('delete', `http://localhost:3001/users/${this.props.user_id}`)
    .then(
      this.props.logOut(),
      this.props.onClickTrafficFunctions(event)
    )
  }

  onClickCancel = (event) => {this.props.onClickTrafficFunctions(event)}

  render(){
    return(
      <div className='default_wrapper'>
        <div className='alt_header'>
          <h3>Are you sure you want to delete your profile?</h3>
        </div>
          <DashboardDeleteProfileButtonContainer confirm={this.onClickConfirm} cancel={this.onClickCancel} />
      </div>
    )
  }
}