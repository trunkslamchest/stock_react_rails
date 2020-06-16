import React from 'react'

export default class DropDownMenu extends React.Component {

  constructor(props) {
    super(props)
    this.setMenuRef = this.setMenuRef.bind(this)
  }

  componentDidMount() {document.addEventListener('mousedown', this.handleMouseStatus)}

  setMenuRef(node){this.menuRef = node}

  handleMouseStatus = (event) => {if (this.menuRef && !this.menuRef.contains(event.target)) this.props.showMenu()}

  componentWillUnmount() { document.removeEventListener('mousedown', this.handleMouseStatus) }

  render(){
    return(
      <div
        className={this.props.divClass}
        ref={this.setMenuRef}
      >
        <ul>
          {this.props.children}
        </ul>
      </div>
    )
  }
}