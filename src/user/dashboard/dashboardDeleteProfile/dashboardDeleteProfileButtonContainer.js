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
      <>
        <div className="delete_buttons_container">
          <DashboardDeleteProfileButton
            link='/'
            name='delete_profile_form'
            className='confirm_button'
            onClick={ this.props.confirm }
            onMouseEnter={ this.onHoverConfirm }
            onMouseLeave={ this.offHoverConfirm }
          >
            {this.state.hoverConfirm ? '✔' : 'Yes'}
          </DashboardDeleteProfileButton>
          <DashboardDeleteProfileButton
            link='/dashboard/profile'
            name='delete_profile_form'
            className='cancel_button'
            onClick={ this.props.cancel }
            onMouseEnter={ this.onHoverCancel }
            onMouseLeave={ this.offHoverCancel }
          >
            {this.state.hoverCancel ? '✘' : 'No'}
          </DashboardDeleteProfileButton>
        </div>
      </>
    )
  }
}