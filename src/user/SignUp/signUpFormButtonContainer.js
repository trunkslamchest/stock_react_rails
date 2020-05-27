import React from 'react'

import SignUpFormButton from './signUpFormButton'

const SignUpFormButtonContainer = (props) => {
  return(
    <div className='edit_buttons_container'>
      <SignUpFormButton
        type='submit'
        id='sign_up_submit'
        name='sign_up_submit'
        onClick={props.onSubmit}
        value='Create Account'
      />
      <SignUpFormButton
        type='reset'
        id='sign_up_reset'
        name='sign_up_reset'
        onClick={props.onReset}
        value='Reset'
      >
        Reset
      </SignUpFormButton>
      <SignUpFormButton
        type='button'
        id="sign_up_form_cancel"
        name="sign_up_form_cancel"
        onClick={props.onCancel}
        value='Cancel'
      />
    </div>
  )
}

export default SignUpFormButtonContainer