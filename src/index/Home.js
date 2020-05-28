import React, { useEffect } from 'react'

import HomeLoginSignup from './homeLoginSignup'
import HomeLoggedIn from './homeLoggedIn'

import './Home.css'

const Home = (props) => {

  const {onPageLoadFunctions, onClickTrafficFunctions} = props

  useEffect(() => {onPageLoadFunctions('index')}, [onPageLoadFunctions])

  return(
    <div className='default_wrapper'>
      {localStorage.access === 'guest' ?
          <HomeLoginSignup
            onClickTrafficFunctions={onClickTrafficFunctions}
            onPageLoadFunctions={onPageLoadFunctions}
            history={props.history}
            logInModal={props.logInModal}
            setToken={props.setToken}
            showLogInModal={props.showLogInModal}
            updateLogin={props.updateLogin}
          />
        :
          <HomeLoggedIn />
      }
    </div>
  )
}

export default Home