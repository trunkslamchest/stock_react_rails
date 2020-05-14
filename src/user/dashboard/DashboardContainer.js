import React from 'react'

import { Route, Switch } from 'react-router-dom'

import DashboardNavBarContainer from './dashboardNavBar/dashboardNavBarContainer'
import DashboardIndex from './dashboardIndex/dashboardIndex'
import DashboardProfileContainer from './dashboardProfile/dashboardProfileContainer'

import DashboardTest from './dashboardTest'

import EditProfile from './editProfile/editProfile'
import DeleteProfile from './deleteProfile/deleteProfile'

import './dashboardContainer.css'

export default class Dashboard extends React.Component{

  state = { mounted: false }

  componentDidMount(){ this.setState({ mounted: true }) }

  componentDidUpdate(){ if (this.state.mounted && this.props.user.id && !this.state.loaded){ this.setState({ loaded: true }) } }

  render(){
    const routes =
    <Switch>
      <Route exact path='/dashboard'>
        <DashboardIndex
          firstName={this.props.user.first_name}
          onPageLoadFunctions={ this.props.onPageLoadFunctions }
        />
      </Route>
      <Route exact path='/dashboard/profile'>
        <DashboardProfileContainer
          user={this.props.user}
          onPageLoadFunctions={ this.props.onPageLoadFunctions }
          onClickTrafficFunctions={ this.props.onClickTrafficFunctions }
        />
      </Route>
      <Route path='/dashboard/profile/edit'>
        <EditProfile
          setUser={ this.props.setUser }
          user={this.props.user}
          onPageLoadFunctions={ this.props.onPageLoadFunctions }
          onClickTrafficFunctions={ this.props.onClickTrafficFunctions }
        />
      </Route>
      <Route path='/dashboard/profile/delete'>
        <DeleteProfile
          setToken={ this.props.setToken }
          user_id={this.props.user.id }
          access={ this.props.user.access }
          logOut={ this.props.logOut }
          onPageLoadFunctions={ this.props.onPageLoadFunctions }
          onClickTrafficFunctions={ this.props.onClickTrafficFunctions }
        />
      </Route>
    <Route path='/dashboard/test'>
        <DashboardTest />
      </Route>
    </Switch>

    const loading =
      <div className='loading_container'>
        <div className='loading_animation_container'>
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      </div>

    return(
      <div className='dashboard_wrapper'>
        <DashboardNavBarContainer onClickTrafficFunctions={ this.props.onClickTrafficFunctions } />
        { this.state.loaded ? routes : loading }
      </div>
    )
  }
}
