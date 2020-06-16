import React from 'react'

import FooterLink from './footerLink'

import './footerLinks.css'

const FooterLinks = (props) => {
  return(
    <div className='footer_links'>
      <FooterLink
        link='/terms_of_service'
        name='footer_tos_button'
        onClick={props.onClickUpdateTrafficFunctions}
      >
        Terms Of Service
      </FooterLink>
      <FooterLink
        link='/privacy'
        name='footer_privacy_button'
        onClick={props.onClickUpdateTrafficFunctions}
      >
        Privacy
      </FooterLink>
      <FooterLink
        link='/disclaimer'
        name='footer_disclaimer_button'
        onClick={props.onClickUpdateTrafficFunctions}
      >
        Disclaimer
      </FooterLink>
    </div>
  )
}

export default FooterLinks