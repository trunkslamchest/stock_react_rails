import React from 'react'

const DashboardEditProfileFormInput = (props) => {
  return(
    <>
      {props.label ? <label htmlFor={props.id}>{props.label}</label> : null}
      <br />
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        className={props.className ? props.className : null}
        placeholder={props.placeholder ? props.placeholder : null}
        min={props.min ? props.min : null}
        max={props.max ? props.max : null}
        onChange={props.onChange}
        onClick={props.onClick ? props.onClick : null}
        value={props.value ? props.value : ''}
      />
    </>
  )
}

export default DashboardEditProfileFormInput