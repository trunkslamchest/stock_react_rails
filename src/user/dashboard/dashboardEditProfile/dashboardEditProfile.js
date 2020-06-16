import React from 'react'

import DashboardEditProfileFormContainer from './dashboardEditProfileFormContainer'

import userFunctions from '../../../utility/userFunctions'

import './dashboardEditProfile.css'

export default class DashboardEditProfile extends React.Component {

  state = {
    errors: [],
    user_name: '',
    email: '',
    first_name: '',
    last_name: '',
    gender: '',
    birth_day: '',
    birth_month: '',
    birth_year: '',
    house_number: '',
    street_name: '',
    city_town: '',
    state: '',
    zip_code: '',
  }

  componentDidMount(){
    if (this.props.user) {
      this.setState({
        user_name: this.props.user.user_name,
        email: this.props.user.email,
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        gender: this.props.user.gender,
        birth_day: this.props.user.birth_day,
        birth_month: this.props.user.birth_month,
        birth_year: this.props.user.birth_year,
        house_number: this.props.user.house_number,
        street_name: this.props.user.street_name,
        city_town: this.props.user.city_town,
        state: this.props.user.state,
        zip_code: this.props.user.zip_code
      })
    }

    this.props.onPageLoadFunctions('edit_profile')
  }

  onChange = (event) => {this.setState({ [event.target.name]: event.target.value })}

  onSubmit = (event) => {
    event.persist()
    event.preventDefault()

    let userObj = {
      user_name: this.state.user_name,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      gender: this.state.gender,
      birth_month: this.state.birth_month,
      birth_day: this.state.birth_day,
      birth_year: this.state.birth_year,
      house_number: this.state.house_number,
      street_name: this.state.street_name,
      city_town: this.state.city_town,
      state: this.state.state,
      zip_code: this.state.zip_code
    }

    userFunctions('patch', `http://localhost:3001/users/${this.props.user.id}`, userObj)
    .then(res_obj => {
      if (res_obj.errors) this.setState({errors: res_obj.errors})
      else {
        this.props.onClickTrafficFunctions(event)
        this.props.setUser(res_obj, this.props.user.token)
        this.props.history.push('/dashboard/profile')
      }
    })
  }

  onReset = (event) => {
    event.persist()
    event.preventDefault()

    this.props.onClickTrafficFunctions(event)

    this.setState({
      user_name: this.props.user.user_name,
      email: this.props.user.email,
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      gender: this.props.user.gender,
      birth_day: this.props.user.birth_day,
      birth_month: this.props.user.birth_month,
      birth_year: this.props.user.birth_year,
      house_number: this.props.user.house_number,
      street_name: this.props.user.street_name,
      city_town: this.props.user.city_town,
      state: this.props.user.state,
      zip_code: this.props.user.zip_code
    })

  }

  onCancel = (event) => {
    this.props.onClickTrafficFunctions(event)
    this.props.history.push('/dashboard/profile')
  }

  render(){
    return(
      <DashboardEditProfileFormContainer
        errors={this.state.errors}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onCancel={this.onCancel}
        onReset={this.onReset}
        user_name={this.state.user_name}
        password={this.state.password}
        email={this.state.email}
        first_name={this.state.first_name}
        last_name={this.state.last_name}
        gender={this.state.gender}
        birth_day={this.state.birth_day}
        birth_month={this.state.birth_month}
        birth_year={this.state.birth_year}
        house_number={this.state.house_number}
        street_name={this.state.street_name}
        city_town={this.state.city_town}
        state={this.state.state}
        zip_code={this.state.zip_code}
      />
    )
  }
}
