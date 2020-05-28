import React from 'react'

import DefaultButton from '../UI/buttons/defaultButton'

const BackroomIndex = (props) => {
  return(
    <>
      <div className='main_window_header'>
        <p> Backroom Dashboard </p>
      </div>
      <DefaultButton
        link='/backroom/test_temp'
        name='test_page_button'
        onClick={null}
      >
        Test Temp
      </DefaultButton>
    </>
  )
}

export default BackroomIndex