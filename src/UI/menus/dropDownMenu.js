import React from 'react'

const DropDownMenu = (props) => {
  return(
    <div
      className={props.divClass}
    >
      <ul>
        {props.children}
      </ul>
    </div>
  )
}

export default DropDownMenu