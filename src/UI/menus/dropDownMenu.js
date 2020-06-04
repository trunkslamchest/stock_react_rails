import React from 'react'

// import './dropDownMenu.css'
// import './myProfileMenu/myProfileMenu.scss'

export default class DropDownMenu extends React.Component {

  render(){
    return(
      <div
        className={this.props.divClass}
      >
        <ul
          // className={this.props.ulClass}
        >
          {this.props.children}
        </ul>
      </div>
    )
  }
}