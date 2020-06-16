import React from 'react'

import './backdrop.css'

const Backdrop = (props) => {
  return(
    props.showModal ? <div className='backdrop'></div> : null
  )
}

export default Backdrop