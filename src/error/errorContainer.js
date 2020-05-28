import React from 'react'

const ErrorContainer = (props) => {
  return(
    <div className='default_error_report' key={'log_in_error_report'}>
      {props.errors.map( error =>
        <div className='default_error_item' key={props.errors.indexOf(error)}>
          {error}
        </div>
      )}
    </div>
  )
}

export default ErrorContainer