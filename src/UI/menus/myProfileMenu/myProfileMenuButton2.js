import React from 'react'


const MyProfileMenuButton2 = (props) => {
  return(
    <button
      name={props.name}
      interaction='click'
      className='myProfileMenuButton'
      // activeClassName='default_active'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default MyProfileMenuButton2