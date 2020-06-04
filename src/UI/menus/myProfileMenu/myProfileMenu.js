import React from 'react'

import DropDownMenu from '../dropDownMenu'
import DropDownMenuItem from '../dropDownMenuItem'

// import './myProfileMenu.css'
// import './myProfileMenu.sass'
import './myProfileMenu.scss'

const MyProfileMenu = (props) => {

  return(
    <DropDownMenu
      divClass='myProfileMenu'
    >
      <DropDownMenuItem
        text='prop text1'
      />
      <DropDownMenuItem
        text='prop text2'
      />
      <DropDownMenuItem
        text='prop text3'
      />
      <DropDownMenuItem
        text='prop text4'
      />
      <DropDownMenuItem
        text='prop text5'
      />
    </DropDownMenu>
  )
}

export default MyProfileMenu