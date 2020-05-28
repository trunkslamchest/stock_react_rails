import React from 'react'

import { Redirect } from 'react-router-dom'

import AltButton from '../../../UI/buttons/altButton'

import userFunctions from '../../../utility/userFunctions'

export default class DBeditDeleteUser extends React.Component {

  state = { errors: [] }

  onClickYes = () => {
    userFunctions('delete', `http://localhost:3001/users/${this.props.user.id}`)
    .then(res_obj => {
      if (res_obj.errors) this.setState({ errors: res_obj.errors })
      else this.props.deleteUser()
    })
  }

  onClickNo = () => {
    const userURL = '/backroom/DBedit/users/' + this.props.user.id
    return <Redirect to={userURL} />
  }

  render(){
    const usersURL = '/backroom/DBedit/users/'
    const userURL = '/backroom/DBedit/users/' + this.props.user.id

    const confirm_buttons = [
      <AltButton
        link={usersURL}
        key={'DBe_delete_user_yes'}
        name='delete_user_yes'
        onClick={this.onClickYes}
      >
        Yes
      </AltButton>,
      <AltButton
        link={ userURL }
        key={'DBe_delete_user_no'}
        name='delete_user_no'
        onClick={this.onClickNo}
      >
        No
      </AltButton>
    ]

    return(
      <div className='DBedit_default_wrapper'>
        <h3>Are you sure you want to delete {this.props.user.user_name}'s account?</h3>
        {
          (!!this.state.errors) ?
            (<div className='default_error_report'>
                { this.state.errors.map(error => <div className='default_error_item'> { error } </div>)}
              </div>)
          :
            ( '' )
        }
        <div className='default_centered_buttons_container'>
          {confirm_buttons}
        </div>
      </div>
    )
  }
}