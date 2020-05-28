import React from 'react'

import DashboardDeleteProfileButton from './dashboardDeleteProfileButton'

import './dashboardDeleteProfileButtonContainer.css'

export default class DashboardDeleteProfileButtonContainer extends React.Component {

  state = {
    hoverConfirm: false,
    hoverCancel: false
  }

  onHoverConfirm = () => { this.setState({ hoverConfirm: true }) }

  offHoverConfirm = () => { this.setState({ hoverConfirm: false }) }

  onHoverCancel = () => { this.setState({ hoverCancel: true }) }

  offHoverCancel = () => { this.setState({ hoverCancel: false}) }

  render(){
    return(
      <div className='delete_buttons_container'>
        <DashboardDeleteProfileButton
          id='delete_profile_form_confirm'
          name='delete_profile_form_confirm'
          className='confirm_button'
          interaction='confirm'
          onClick={this.props.onConfirm}
          onMouseEnter={this.onHoverConfirm}
          onMouseLeave={this.offHoverConfirm}
        >
          {this.state.hoverConfirm ? '✔' : 'Yes'}
        </DashboardDeleteProfileButton>
        <DashboardDeleteProfileButton
          id='delete_profile_form_cancel'
          name='delete_profile_form_cancel'
          className='cancel_button'
          interaction='cancel'
          onClick={this.props.onCancel}
          onMouseEnter={this.onHoverCancel}
          onMouseLeave={this.offHoverCancel}
        >
          {this.state.hoverCancel ? '✘' : 'No'}
        </DashboardDeleteProfileButton>
      </div>
    )
  }
}