



    const confirmation_buttons = [
      <button
        key={"b1"}
        name="delete_profile_form"
        interaction="submit"
        className="confirm_button"
        onClick={ this.onClickConfirm }
        onMouseEnter={this.onHoverConfirm}
        onMouseLeave={this.offHoverConfirm}
      >
        {this.state.hoverConfirm ? "✔" : "Yes"}
      </button>,
      <button
        key={"b2"}
        name="delete_profile_form"
        interaction="cancel"
        className="cancel_button"
        onClick={ this.onClickCancel }
        onMouseEnter={this.onHoverCancel}
        onMouseLeave={this.offHoverCancel}
      >
        {this.state.hoverCancel ? "✘" : "No"}
      </button>
    ]