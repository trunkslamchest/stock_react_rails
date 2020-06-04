import React from 'react'

const DropDownMenuItem = (props) => {
  return(
    <li
      // className={props.liClass}
    >
      {props.children}
    </li>
  )
}

export default DropDownMenuItem