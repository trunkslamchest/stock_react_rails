import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import BackroomIndex from './BackroomIndex'
import BackroomNavBar from './BackroomNavBar'
import RTVusersContainer from './rtv/RTVusersContainer'
import RTVpagesContainer from './rtv/RTVpagesContainer'
import DBeditMainContainer from './db_edit/DBeditMainContainer'
import STanalyticsIndex from './stats/STanalyticsIndex'

import TestTemp from './TestTemp'

import './Backroom.css'

const Backroom = (props) => {

  let routes =
    <Switch>
      <Route exact path='/backroom'>
        <BackroomIndex />
      </Route>
      <Route path='/backroom/RTVusers'>
        <RTVusersContainer />
      </Route>
      <Route path='/backroom/RTVpages'>
        <RTVpagesContainer />
      </Route>
      <Route path='/backroom/DBedit'>
        <DBeditMainContainer />
      </Route>
      <Route path='/backroom/STAnalytics'>
        <STanalyticsIndex />
      </Route>
      <Route path='/backroom/test_temp'>
        <TestTemp />
      </Route>
    </Switch>

  return(
    <div className='backroom_wrapper'>
      <div className='side_window'>
        <BackroomNavBar />
      </div>
      <div className='main_window'>
        {localStorage.length === 0 || localStorage.access !== 'admin' ? <Redirect to='/' /> : routes}
      </div>
    </div>
  )
}

export default Backroom