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

  onClickConfirm = (event) => {
    this.props.onClickTrafficFunctions(event)
    this.props.logOut(this.props.token)
    this.props.history.push('/')
  }

  onClickCancel = (event) => {
    this.props.onClickTrafficFunctions(event)
    this.props.history.push('/dashboard')
  }

  render(){
    return(
      <LogOutButtonContainer
        onHoverConfirm={this.onHoverConfirm}
        offHoverConfirm={this.offHoverConfirm}
        onHoverCancel={this.onHoverCancel}
        offHoverCancel={this.offHoverCancel}
        onClickConfirm={this.onClickConfirm}
        onClickCancel={this.onClickCancel}
      />
    )
  }
}