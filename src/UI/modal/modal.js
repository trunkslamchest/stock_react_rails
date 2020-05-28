import React from 'react'

import Backdrop from '../backdrop/backdrop'

import './modal.css'

const Modal = (props) => {

  const modal =
    <>
      <Backdrop
        showModal={props.showModal}
      />
      <div className='modal_wrapper'>
        {/* <div
              className='modal_wrapper'
            style={{
              transform: this.props.showLogInModal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.showLogInModal ? '1': '0'
              }}
          > */}
        {props.children}
      </div>
    </>

  return(
    <>
      {/* { modal } */}
      { props.showModal ? modal : null }
    </>
  )
}

export default Modal
