import React from 'react'

import DropDownMenu from '../dropDownMenu'

import Test2MenuButton from './test2MenuButton'
import Test2MenuButton2 from './test2MenuButton2'

import './test2Menu.scss'
import './test2MenuButton.scss'
import './test2MenuButton2.scss'

const Test2Menu = (props) => {

  return(
    <DropDownMenu
      divClass='test2Menu'
      showMenu={props.showTest2Menu}
    >
      <Test2MenuButton
        link='/'
        name='Test Menu Item 1'
        onClick={props.showTestMenu}
      >
        Test Item 1
      </Test2MenuButton>
      <Test2MenuButton2
        name='Test Menu Item 2'
        onClick={props.showTestMenu}
      >
        Test Item 2
      </Test2MenuButton2>
    </DropDownMenu>
  )
}

export default Test2Menu