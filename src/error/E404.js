import React, { useEffect } from 'react'

import './E404.css'

const E404 = (props) => {

  const {onPageLoadFunctions} = props

  useEffect(() => {onPageLoadFunctions('error404')}, [onPageLoadFunctions])

  return(
    <div className='alt_container'>
      <div className='alt_wrapper'>
        <h3>404 Error</h3>
      </div>
    </div>
  )
}

export default E404