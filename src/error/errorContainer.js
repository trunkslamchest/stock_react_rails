import React from 'react'

import './errorContainer.scss'

const ErrorContainer = (props) => {
  return(
    <div className='error_container' key={'log_in_error_report'}>
      {props.errors.map(error =>
        <div className='error_item' key={props.errors.indexOf(error)}>
          {error}
        </div>
      )}
    </div>
  )
}

export default ErrorContainer