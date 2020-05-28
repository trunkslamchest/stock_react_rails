import React from 'react'

import LogOutButton from './logOutButton'

export default class LogOutButtonContainer extends React.Component {

  state={
    hoverConfirm: false,
    hoverCancel: false
  }

  onHoverConfirm = () => {this.setState({ hoverConfirm: true })}

  offHoverConfirm = () => {this.setState({ hoverConfirm: false })}

  onHoverCancel = () => {this.setState({ hoverCancel: true })}

  offHoverCancel = () => {this.setState({ hoverCancel: false })}

  render(){
    return(
      <div className='default_centered_buttons_container'>
        <LogOutButton
          id='log_out_form_confirm'
          name='log_out_form_confirm'
          className='confirm_button'
          interaction='confirm'
          onClick={this.props.onConfirm}
          onMouseEnter={this.onHoverConfirm}
          onMouseLeave={this.offHoverConfirm}
        >
          {this.state.hoverConfirm ? '✔' : 'Yes'}
        </LogOutButton>
        <LogOutButton
          id='log_out_form_cancel'
          name='log_out_form_cancel'
          className='cancel_button'
          interaction='cancel'
          onClick={this.props.onCancel}
          onMouseEnter={this.onHoverCancel}
          onMouseLeave={this.offHoverCancel}
        >
          {this.state.hoverCancel ? '✘' : 'No'}
        </LogOutButton>
      </div>
    )
  }
}