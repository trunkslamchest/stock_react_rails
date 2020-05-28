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
            setToken={props.setToken}
            updateLogin={props.updateLogin}
            showLogInModal={props.showLogInModal}
            showSignUpModal={props.showSignUpModal}
            showModal={props.showModal}
          />
        :
          <HomeLoggedIn />
      }
    </div>
  )
}

export default Home