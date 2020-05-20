import React from 'react'

import { Redirect } from 'react-router'

import LogInForm from './LogInForm'

import authFunctions from '../../utility/authFunctions'

import './LogIn.css'

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
        this.props.onClickTrafficFunctions(event)
        this.props.setToken(res_obj)
        this.props.updateLogin()
        this.setState({ loggedIn: true })
      }
    })
  }

  onCancelFunctions = (event) => {
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
                case false: return <LogInForm
                                     onChange={this.onChange}
                                     onCancelFunctions={this.onCancelFunctions}
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