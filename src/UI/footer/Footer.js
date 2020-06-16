import React from 'react'

import FooterLinks from './footerLinks'
import FooterLogos from './footerLogos'
import FooterFinePrint from './footerFinePrint'

import trafficFunctions from '../../utility/trafficFunctions'

import './footer.css'

const Footer = (props) => {

  const onClickUpdateTrafficFunctions = (event) => {

    let userID

    if (localStorage.access) userID = localStorage.user_id
    else userID = props.user_id

    let elementInfo = {
      user_id: userID,
      interaction: event.target.attributes.interaction.value,
      element: event.target.name
    }

    trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
  }

  return(
    <div className='footer'>
      <div className='footer_left'>
        <FooterLinks onClickUpdateTrafficFunctions={onClickUpdateTrafficFunctions} />
        <FooterLogos onClickUpdateTrafficFunctions={onClickUpdateTrafficFunctions} />
        <FooterFinePrint />
      </div>
    </div>
  )
}

export default Footer