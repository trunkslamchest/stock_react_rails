import React from 'react'

import { Redirect } from 'react-router'

import LogInFormContainer from './logInFormContainer'

import authFunctions from '../../utility/authFunctions'

import './logIn.css'

export default class LogIn extends React.Component {

  state = {
    loggedIn: false,
    cancel: false,
    user_name: "",
    password: "",
    errors: [],
  }

  componentDidMount(){ this.props.onPageLoadFunctions('log_in') }

  onChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

  logInSubmitted = (event) => {
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
        this.props.onClickTrafficFunctions(event, res_obj.user_id)
        this.setState({ loggedIn: true })
      }
    })
  }

  onCancel = (event) => {
    this.props.onClickTrafficFunctions(event)
    this.setState({ cancel: true })
  }

  render(){
    return (
      <>
        {
          {
            true: (() => {
              switch(this.state.cancel) {
                case true: return <Redirect to='/' />
                case false: return <LogInFormContainer
                                     onChange={this.onChange}
                                     onCancel={this.onCancel}
                                     logInSubmitted={this.logInSubmitted}
                                     user_name={this.state.user_name}
                                     password={this.state.password}
                                     errors={this.state.errors}
                                   />
                default: return null;
              }
            })(),
            false: <Redirect to='/' />
          }[!(this.state.loggedIn)]
        }
      </>
    )
  }
}