import React from 'react'

const FooterLogoImg = (props) => {
  return(
    <img
      src={props.image}
      className='footer_logo_rectangle'
      alt={props.alt}
      name={props.name}
      interaction='click'
      onClick={props.onClick}
    />
  )
}

export default FooterLogoImg