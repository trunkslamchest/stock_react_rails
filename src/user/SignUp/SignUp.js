import React from 'react'

import SignUpFormContainer from './signUpFormContainer'

import userFunctions from '../../utility/userFunctions'
import authFunctions from '../../utility/authFunctions'

import './signUp.css'

export default class SignUp extends React.Component {

  state = {
    errors: [],
    TOSagreement: false,
    sign_up_user_name: '',
    sign_up_password: '',
    sign_up_email: '',
    sign_up_first_name: '',
    sign_up_last_name: '',
    sign_up_gender: '',
    sign_up_birth_day: '',
    sign_up_birth_month: '',
    sign_up_birth_year: '',
    sign_up_house_number: '',
    sign_up_street_name: '',
    sign_up_city_town: '',
    sign_up_state: '',
    sign_up_zip_code: ''
  }

  componentDidMount(){this.props.onPageLoadFunctions('sign_up')}

  onChange = (event) => {this.setState({[event.target.name]: event.target.value})}

  onChecked = (event) => {
    let flipChecked = !event.target.checked
    this.setState({TOSagreement: !flipChecked})
  }

  onSubmit = (event) => {
    event.persist()
    event.preventDefault()

    if (!this.state.TOSagreement) alert('You must agree to the Terms of Service Agreement in order to make a new account.')
    else {

      let signUpObj = {
        user_name: this.state.sign_up_user_name,
        password: this.state.sign_up_password,
        email: this.state.sign_up_email,
        first_name: this.state.sign_up_first_name,
        last_name: this.state.sign_up_last_name,
        gender: this.state.sign_up_gender,
        birth_month: this.state.sign_up_birth_month,
        birth_day: this.state.sign_up_birth_day,
        birth_year: this.state.sign_up_birth_year,
        house_number: this.state.sign_up_house_number,
        street_name: this.state.sign_up_street_name,
        city_town: this.state.sign_up_city_town,
        state: this.state.sign_up_state,
        zip_code: this.state.sign_up_zip_code
      }

      userFunctions('signUp', 'http://localhost:3001/users', signUpObj)
      .then(res_obj => {
        if (res_obj.errors) this.setState({errors: res_obj.errors})
        else {

          let logInObj = {
            user_name: this.state.sign_up_user_name,
            password: this.state.sign_up_password
          }

          authFunctions('logIn', 'http://localhost:3001/login', logInObj)
          .then(res_obj => {
            if (res_obj.errors) this.setState({errors: res_obj.errors})
            else {
              this.props.setToken(res_obj)
              this.props.updateLogin()
              this.props.onClickTrafficFunctions(event)
              this.props.history.push('/dashboard')
            }
          })
        }
      })
    }
  }

  onReset = (event) => {
    event.persist()
    event.preventDefault()

    this.props.onClickTrafficFunctions(event)

    this.setState({
      sign_up_user_name: '',
      sign_up_password: '',
      sign_up_email: '',
      sign_up_first_name: '',
      sign_up_last_name: '',
      sign_up_gender: '',
      sign_up_birth_day: '',
      sign_up_birth_month: '',
      sign_up_birth_year: '',
      sign_up_house_number: '',
      sign_up_street_name: '',
      sign_up_city_town: '',
      sign_up_state: '',
      sign_up_zip_code: '',
    })
  }

  onCancel = (event) => {
    this.props.onClickTrafficFunctions(event)
    this.props.history.push('/')
  }

  render(){
    return (
      <SignUpFormContainer
        errors={this.state.errors}
        onChange={this.onChange}
        onChecked={this.onChecked}
        onSubmit={this.onSubmit}
        onCancel={this.onCancel}
        onReset={this.onReset}
        sign_up_user_name={this.state.sign_up_user_name}
        sign_up_password={this.state.sign_up_password}
        sign_up_email={this.state.sign_up_email}
        sign_up_first_name={this.state.sign_up_first_name}
        sign_up_last_name={this.state.sign_up_last_name}
        sign_up_gender={this.state.sign_up_gender}
        sign_up_birth_day={this.state.sign_up_birth_day}
        sign_up_birth_month={this.state.sign_up_birth_month}
        sign_up_birth_year={this.state.sign_up_birth_year}
        sign_up_house_number={this.state.sign_up_house_number}
        sign_up_street_name={this.state.sign_up_street_name}
        sign_up_city_town={this.state.sign_up_city_town}
        sign_up_state={this.state.sign_up_state}
        sign_up_zip_code={this.state.sign_up_zip_code}
        TOSagreement={this.state.TOSagreement}
      />
    )
  }
}
