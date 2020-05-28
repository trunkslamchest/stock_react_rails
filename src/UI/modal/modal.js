import React from 'react'

import Backdrop from '../backdrop/backdrop'

import './modal.css'

export default class Modal extends React.Component {
  render() {
    const modal =
      <>
        <Backdrop
          logInModal={this.props.logInModal}
        />
        <div className={this.props.logInModal ? 'show_modal_wrapper' : 'hide_modal_wrapper'}>
          {/* <div
                className='modal_wrapper'
              style={{
                transform: this.props.showLogInModal ? 'translateY(0)' : 'translateY(-100vh)',
                  opacity: this.props.showLogInModal ? '1': '0'
                }}
            > */}
          {this.props.children}
        </div>
      </>

    return(
      <>
        {/* { modal } */}
        { this.props.logInModal ? modal : null }
      </>
    )
  }
}
