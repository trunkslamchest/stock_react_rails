import React from 'react'

import { Redirect } from 'react-router-dom'

export default class TestTemp extends React.Component{

  onSubmitFunctions = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    console.log(formData)
  }

  render(){

    const img_upload_form =
    <>
      <form id='img_upload_form'
        onSubmit={this.onSubmitFunctions}
      >
        <input type='file'
          name='img_input_upload'
          id='img_input_upload'
          className='img_input_upload'
          accept='image/*'
        />
        <input
          type='submit'
          value='Submit'
        />
      </form>
    </>

  const temp_default =
    <div className='default_wrapper'>

      {img_upload_form}

    </div>

    return (
      <>
        {
          (() => {
            switch(localStorage.length === 0 || localStorage.access !== 'admin') {
              case true: return <Redirect to='/' />
              case false: return temp_default
              default: return null;
            }
          })()
        }
      </>
    )
  }
}