import React from 'react'

import { Route, Switch } from 'react-router-dom'

import DBeditIndex from './DBeditIndex'
import DBeditUsersContainer from './users/DBeditUsersContainer'

import DBeditNavBar from './DBeditNavBar'

import './DBedit.css'

const DBeditMainContainer = (props) => {
  return(
    <>
      <div className='DBedit_navbar'>
        <DBeditNavBar />
      </div>
      <Switch>
        <Route exact path='/backroom/DBedit'>
          <DBeditIndex />
        </Route>
        <Route path='/backroom/DBedit/users'>
          <DBeditUsersContainer />
        </Route>
      </Switch>
    </>
  )
}

export default DBeditMainContainer