import React from 'react'

import DropDownMenu from '../dropDownMenu'

import TestMenuButton from './testMenuButton'
import TestMenuButton2 from './testMenuButton2'

import './testMenu.scss'
import './testMenuButton.scss'
import './testMenuButton2.scss'

const testMenu = (props) => {

  return(
    <DropDownMenu
      divClass='testMenu'
      showMenu={props.showTestMenu}
    >
      <TestMenuButton
        link='/'
        name='Test Menu Item 1'
        onClick={props.showTestMenu}
      >
        Test Item 1
      </TestMenuButton>
      <TestMenuButton2
        name='Test Menu Item 2'
        onClick={props.showTestMenu}
      >
        Test Item 2
      </TestMenuButton2>
    </DropDownMenu>
  )
}

export default testMenu