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

            logInModal={props.logInModal}
            showLogInModal={props.showLogInModal}

            signUpModal={props.signUpModal}
            showSignUpModal={props.showSignUpModal}
          />
        :
          <HomeLoggedIn />
      }
    </div>
  )
}

export default Home