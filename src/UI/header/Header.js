import React from 'react'

import GuestHeader from './headers/guestHeader'
import NormalHeader from './headers/normalHeader'
import AdminHeader from './headers/adminHeader'

import HeaderButton from './headerButton'

import trafficFunctions from '../../utility/trafficFunctions'

import './header.css'

const Header = (props) => {

  const onClickHomeFunctions = (event) => { props.onClickTrafficFunctions(event) }

  // const onClickTrafficFunctions = (event) => {
  //   let elementInfo = {
  //     user_id: props.user_id,
  //     interaction: event.target.attributes.interaction.value,
  //     element: event.target.name
  //   }

  //   trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
  // }

  let home_link = null

  if(!!props.user_token) {
    home_link =
      <HeaderButton
        link='/'
        name='header_home_button'
        onClick={onClickHomeFunctions}
      >
        Home
      </HeaderButton>
  }

  return(
    <div className='header'>
      <div className='header_left'>
        {home_link}
      </div>
      <div className='header_right'>
        {
          {
            false: <GuestHeader
                      onClickTrafficFunctions={props.onClickTrafficFunctions}
                      showLogInModal={props.showLogInModal}
                      showSignUpModal={props.showSignUpModal}
                    />,
            true: (() => {
              switch(localStorage.access) {
                case 'normal': return <NormalHeader
                                        user_name={props.user_name}
                                        showLogOutModal={props.showLogOutModal}
                                        onClickTrafficFunctions={props.onClickTrafficFunctions}
                                      />;
                case 'admin': return <AdminHeader user_name={props.user_name} onClickTrafficFunctions={props.onClickTrafficFunctions} />;
                default: return null;
              }
            })()
          }[!!props.user_token]
        }
      </div>
    </div>
  )
}

export default Header