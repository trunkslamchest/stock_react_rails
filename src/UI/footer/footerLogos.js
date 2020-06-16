import React from 'react'

import FooterLogo from './footerLogo'
import FooterLogoImg from './footerLogoImg'

import './footerLogos.css'

import flatiron_logo from '../../assets/footer_logo_flatiron.png'
import postgres_logo from '../../assets/footer_logo_postgres.png'
import rails_logo from '../../assets/footer_logo_rails.png'
import react_logo from '../../assets/footer_logo_react.png'

const FooterLogos = (props) => {
  return(
    <div className='footer_logos'>
      <FooterLogo link='https://flatironschool.com/'>
        <FooterLogoImg
          image={flatiron_logo}
          alt='The Flatiron School'
          name='footer_flatiron_logo'
          onClick={props.onClickUpdateTrafficFunctions}
        />
      </FooterLogo>
      <FooterLogo link='https://www.postgresql.org/'>
        <FooterLogoImg
          image={postgres_logo}
          alt='PostgreSQL'
          name='footer_postgres_logo'
          onClick={props.onClickUpdateTrafficFunctions}
        />
      </FooterLogo>
      <FooterLogo link='https://rubyonrails.org/'>
        <FooterLogoImg
          image={rails_logo}
          alt='Ruby On Rails'
          name='footer_rails_logo'
          onClick={props.onClickUpdateTrafficFunctions}
        />
      </FooterLogo>
      <FooterLogo link='https://reactjs.org/'>
        <FooterLogoImg
          image={react_logo}
          alt='React'
          name='footer_react_logo'
          onClick={props.onClickUpdateTrafficFunctions}
        />
      </FooterLogo>
    </div>
  )
}

export default FooterLogos