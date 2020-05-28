import React from 'react'

import Backdrop from '../backdrop/backdrop'

import './modal.css'

export default class Modal extends React.Component {
  render() {
    const modal =
      <>
        <Backdrop
          showLogInModal={this.props.showLogInModal}
          clicked={this.props.modalClosed}
        />
        <div className={this.props.showLogInModal ? 'show_modal_wrapper' : 'hide_modal_wrapper'}>
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
        { this.props.showLogInModal ? modal : null }
      </>
    )
  }
}
