import React from 'react'

import './backdrop.css'

const Backdrop = (props) => {
  return(
    props.showLogInModal ? <div className='backdrop' onClick={props.clicked}></div> : null
  )
}

export default Backdrop