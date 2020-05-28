import React from 'react'

import LogInFormContainer from './logInFormContainer'

import authFunctions from '../../utility/authFunctions'

import './logIn.css'

export default class LogIn extends React.Component {

  state = {
    errors: [],
    user_name: '',
    password: ''
  }

  onChange = (event) => {this.setState({[event.target.name]: event.target.value})}

  onSubmit = (event) => {
    event.preventDefault()
    event.persist()

    let logInObj = {
      user_name: this.state.user_name,
      password: this.state.password
    }

    authFunctions('logIn', 'http://localhost:3001/login', logInObj)
    .then(res_obj => {
      if (res_obj.errors) this.setState({ errors: res_obj.errors })
      else {
        this.props.setToken(res_obj)
        this.props.updateLogin()
        this.props.showLogInModal()
        this.props.onClickTrafficFunctions(event, res_obj.user_id)
        this.props.history.push('/dashboard')
      }
    })
  }

  onCancel = (event) => {
    this.props.onClickTrafficFunctions(event)
    this.props.showLogInModal()
  }

  render(){
    return (
      <div className='login_wrapper'>
        <LogInFormContainer
          errors={this.state.errors}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onCancel={this.onCancel}
          user_name={this.state.user_name}
          password={this.state.password}
        />
      </div>
    )
  }
}
