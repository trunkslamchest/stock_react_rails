import React from 'react'

import LogOutButtonContainer from './logOutButtonContainer'

import './logOut.css'

export default class LogOut extends React.Component {

  state = {
    hoverConfirm: false,
    hoverCancel: false
  }

  componentDidMount(){this.props.onPageLoadFunctions('log_out')}

  onHoverConfirm = () => {this.setState({ hoverConfirm: true })}

  offHoverConfirm = () => {this.setState({ hoverConfirm: false })}

  onHoverCancel = () => {this.setState({ hoverCancel: true })}

  offHoverCancel = () => {this.setState({ hoverCancel: false })}

  onConfirm = (event) => {
    this.props.onClickTrafficFunctions(event)
    this.props.showLogOutModal()
    this.props.logOut(this.props.token)
    this.props.history.push('/')
  }

  onCancel = (event) => {
    this.props.onClickTrafficFunctions(event)
    this.props.showLogOutModal()
  }

  render(){
    return(
      <>
        <div className='alt_header'>
          <h3>Are you sure you want to log out?</h3>
        </div>
        <LogOutButtonContainer
          onHoverConfirm={this.onHoverConfirm}
          offHoverConfirm={this.offHoverConfirm}
          onHoverCancel={this.onHoverCancel}
          offHoverCancel={this.offHoverCancel}
          onConfirm={this.onConfirm}
          onCancel={this.onCancel}
        />
      </>
    )
  }
}