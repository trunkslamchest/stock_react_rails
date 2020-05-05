import React from 'react'

import GuestHeader from './headers/guestHeader'
import NormalHeader from './headers/normalHeader'
import AdminHeader from './headers/adminHeader'

import HeaderButton from './headerButton'

import trafficFunctions from '../../utility/trafficFunctions'

import './Header.css'

const Header = (props) => {

  const onClickHomeFunctions = (event) => { onClickTrafficFunctions(event) }

  const onClickTrafficFunctions = (event) => {
    let elementInfo = {
      user_id: props.user_id,
      interaction: event.target.attributes.interaction.value,
      element: event.target.name
    }

    trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
  }

  const blank = <></>

  const home_link =
    <HeaderButton
      link="/"
      name="header_home_button"
      onClick={ onClickHomeFunctions }
    >
      Home
    </HeaderButton>

  return(
    <div className="header">
      <div className="header_left">
        { !!props.user_token ? home_link : blank }
      </div>
      <div className="header_right">
        {
          {
            false: <GuestHeader onClickTrafficFunctions={ onClickTrafficFunctions } />,
            true: (() => {
              switch(localStorage.access) {
                case 'normal': return <NormalHeader user_name={props.user_name} onClickTrafficFunctions={ onClickTrafficFunctions } />;
                case 'admin': return <AdminHeader user_name={props.user_name} onClickTrafficFunctions={ onClickTrafficFunctions } />;
                default: return blank;
              }
            })()
          }[!!props.user_token]
        }
      </div>
    </div>
  )
}

export default Header