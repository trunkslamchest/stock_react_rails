import React from 'react'

import Header from './UI/header/Header'
import Home from './index/Home'
import Footer from './UI/footer/Footer'

import LogIn from './user/LogIn/LogIn'
import LogOut from './user/LogOut/LogOut'
import SignUp from './user/SignUp/SignUp'

import DashboardContainer from './user/dashboard/dashboardContainer'

import TermsOfService from './docs/TermsOfService'
import Privacy from './docs/Privacy'
import Disclaimer from './docs/Disclaimer'

import Backroom from './admin/Backroom'

import E404 from './error/E404'

import userFunctions from './utility/userFunctions'
import trafficFunctions from './utility/trafficFunctions'

import {
	// NavLink,
	// Link,
	// Redirect,
	Route,
	Switch,
	// useRouteMatch,
	// useParams,
	// useHistory,
	// useLocation
	} from 'react-router-dom'

import './App.css'
import './UI/Response.css'
import './UI/Loading.css'

export default class App extends React.Component {

  state = {
    user: {
      token: null,
      loggedIn: null,
      id: null,
      user_name: null,
      email: null,
      first_name: null,
      last_name: null,
      gender: null,
      birth_day: null,
      birth_month: null,
      birth_year: null,
      house_number: null,
      street_name: null,
      city_town: null,
      state: null,
      zip_code: null,
      join_day: null,
      join_month: null,
      join_year: null,
    }
  }

  componentDidMount(){
    if (!localStorage.token)  {
      localStorage.clear()
      localStorage.access = 'guest'
    } else {
      this.setState({
        user: {
          token: localStorage.token,
          loggedIn: true,
          id: parseInt(localStorage.user_id, 10),
          user_name: localStorage.user_name,
          email: localStorage.email,
          access: localStorage.access,
          first_name: localStorage.first_name,
          last_name: localStorage.last_name,
          gender: localStorage.gender,
          birth_day: localStorage.birth_day,
          birth_month: localStorage.birth_month,
          birth_year: localStorage.birth_year,
          house_number: localStorage.house_number,
          street_name: localStorage.street_name,
          city_town: localStorage.city_town,
          state: localStorage.state,
          zip_code: localStorage.zip_code,
          join_day: localStorage.join_day,
          join_month: localStorage.join_month,
          join_year: localStorage.join_year,
        }
      })
    }
  }

  setToken = ({ token, user_id })  => {
    console.log(token)
    console.log(user_id)

    localStorage.user_id = user_id
    localStorage.token = token

    userFunctions('get', `http://localhost:3001/users/${user_id}`)
    .then(res_obj => {
      let current_user = res_obj.data.attributes.user

      localStorage.user_name = current_user.user_name
      localStorage.email = current_user.email
      localStorage.access = current_user.access
      localStorage.first_name = current_user.first_name
      localStorage.last_name = current_user.last_name
      localStorage.gender = current_user.gender
      localStorage.birth_day = current_user.birth_day
      localStorage.birth_month = current_user.birth_month
      localStorage.birth_year = current_user.birth_year
      localStorage.house_number = current_user.house_number
      localStorage.street_name = current_user.street_name
      localStorage.city_town = current_user.city_town
      localStorage.state = current_user.state
      localStorage.zip_code = current_user.zip_code
      localStorage.join_day = current_user.join_day
      localStorage.join_month = current_user.join_month
      localStorage.join_year = current_user.join_year

      this.setState({
        user: {
          token,
          loggedIn: true,
          ...current_user
        }
      })
    })

  }

  setUser = ( res_obj, token ) => {
    let current_user = res_obj.data.attributes.user

    localStorage.user_name = current_user.user_name
    localStorage.email = current_user.email
    localStorage.access = current_user.access
    localStorage.first_name = current_user.first_name
    localStorage.last_name = current_user.last_name
    localStorage.gender = current_user.gender
    localStorage.birth_day = current_user.birth_day
    localStorage.birth_month = current_user.birth_month
    localStorage.birth_year = current_user.birth_year
    localStorage.house_number = current_user.house_number
    localStorage.street_name = current_user.street_name
    localStorage.city_town = current_user.city_town
    localStorage.state = current_user.state
    localStorage.zip_code = current_user.zip_code
    localStorage.join_day = current_user.join_day
    localStorage.join_month = current_user.join_month
    localStorage.join_year = current_user.join_year

    this.setState({
      user: {
        token,
        loggedIn: true,
        ...current_user
      }
    })
  }

  updateLogin = () => {
    this.setState({
      user: {
        ...this.state.user,
        loggedIn: !this.state.loggedIn
      }
    })
  }

  logOut = () => {
    localStorage.clear()

    localStorage.access = 'guest'

    this.setState({
      user: {
        token: null,
        loggedIn: null,
        id: null,
        user_name: null,
        email: null,
        access: "guest",
        first_name: null,
        last_name: null,
        gender: null,
        birth_day: null,
        birth_month: null,
        birth_year: null,
        house_number: null,
        street_name: null,
        city_town: null,
        state: null,
        zip_code: null,
        join_day: null,
        join_month: null,
        join_year: null
      }
    })
  }

  onPageLoadFunctions = ( page ) => {
    let pageInfo = {
      user_id: localStorage.user_id,
      page_name: page,
    }

    trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
  }

  onClickTrafficFunctions = (event) => {
    let elementInfo = {
      user_id: this.state.user.id,
      interaction: event.target.attributes.interaction.value,
      element: event.target.name
    }

    trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
  }

  render(){
    return (
      <>
        <Header
          user_token={ this.state.user.token }
          user_id={ this.state.user.id }
          user_name={ this.state.user.user_name }
          user_access={ this.state.user.access }
          logOut={ this.logOut }
        />

        <div className="main_container">
          <Switch>
            <Route exact path='/'>
              <Home
                user_id={ this.state.user.id }
                onPageLoadFunctions={ this.onPageLoadFunctions }
                onClickTrafficFunctions={ this.onClickTrafficFunctions }
              />
            </Route>
            <Route exact path='/log_in'>
              <LogIn
                setToken={ this.setToken }
                updateLogin={ this.updateLogin }
                onPageLoadFunctions={ this.onPageLoadFunctions }
                onClickTrafficFunctions={ this.onClickTrafficFunctions }
              />
            </Route>
            <Route exact path='/sign_up'>
              <SignUp
                setToken={ this.setToken }
                updateLogin={ this.updateLogin }
                onPageLoadFunctions={ this.onPageLoadFunctions }
                onClickTrafficFunctions={ this.onClickTrafficFunctions }
              />
            </Route>
            <Route path='/dashboard'>
              <DashboardContainer
                user={this.state.user}
                setToken={ this.setToken }
                setUser={ this.setUser }
                logOut={ this.logOut }
                onPageLoadFunctions={ this.onPageLoadFunctions }
                onClickTrafficFunctions={ this.onClickTrafficFunctions }
              />
            </Route>
            <Route exact path='/log_out'>
              <LogOut
                logOut={ this.logOut }
                token={ this.state.user.token }
                user_id={ this.state.user.id }
                user_name={ this.state.user.user_name }
                access={ this.state.user.access }
                onPageLoadFunctions={ this.onPageLoadFunctions }
                onClickTrafficFunctions={ this.onClickTrafficFunctions }
              />
            </Route>
            <Route exact path='/terms_of_service'>
              <TermsOfService
                onPageLoadFunctions={ this.onPageLoadFunctions }
              />
            </Route>
            <Route exact path='/privacy'>
              <Privacy
                onPageLoadFunctions={ this.onPageLoadFunctions }
              />
            </Route>
            <Route exact path='/disclaimer'>
              <Disclaimer
                onPageLoadFunctions={ this.onPageLoadFunctions }
              />
            </Route>
            <Route path='/backroom'>
              <Backroom
                token={ this.state.user.token }
                user_name={ this.state.user.user_name }
                access={ this.state.user.access }
              />
            </Route>
            <Route>
              <E404
                onPageLoadFunctions={ this.onPageLoadFunctions }
              />
            </Route>
          </Switch>
        </div>

        <Footer/>
      </>
    )
  }
}