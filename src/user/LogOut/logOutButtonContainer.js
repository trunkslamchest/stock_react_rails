import React from 'react'

import LogOutButton from './logOutButton'

const LogOutButtonContainer = (props) => {
  return(
    <div className="default_wrapper">
      <div className="alt_header">
        <h3>Are you sure you want to log out?</h3>
      </div>
      <div className="default_centered_buttons_container">
        <LogOutButton
          id="log_out_form_confirm"
          name="log_out_form_confirm"
          className="confirm_button"
          interaction="confirm"
          onClick={props.onClickConfirm}
          onMouseEnter={props.onHoverConfirm}
          onMouseLeave={props.offHoverConfirm}
        >
          {props.hoverConfirm ? "✔" : "Yes"}
        </LogOutButton>
        <LogOutButton
          id="log_out_form_cancel"
          name="log_out_form_cancel"
          className="cancel_button"
          interaction="cancel"
          onClick={props.onClickCancel}
          onMouseEnter={props.onHoverCancel}
          onMouseLeave={props.offHoverCancel}
        >
          {props.hoverCancel ? "✘" : "No"}
        </LogOutButton>
      </div>
    </div>
  )
}

export default LogOutButtonContainer