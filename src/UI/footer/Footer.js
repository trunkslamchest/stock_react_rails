import React from 'react'

import FooterLinks from './footerLinks'
import FooterLogos from './footerLogos'


import trafficFunctions from '../../utility/trafficFunctions'

import './Footer.css'

const Footer = (props) => {

  const onClickUpdateTrafficFunctions = (event) => {

    let userID

    if (localStorage.access) userID = localStorage.user_id
    else userID = props.user_id

    let elementInfo = {
      user_id: userID,
      interaction: event.target.attributes.interaction.value,
      element: event.target.name
    }

    trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
  }

  const fine_print =
    <>
      © 2019 Created by Austin Smith. All this_project™ logos and marks depicted herein are the property of this_project™ Enterprises and the respective employees and may not be reproduced without the prior written consent of this_project™ Enterprises, L.P. © this_project™ 2019. All Rights Reserved. The Zamboni word mark and configuration of the Zamboni ice resurfacing machine are registered trademarks of Frank J. Zamboni & Co., Inc.© Frank J. Zamboni & Co., Inc. 2019.All Rights Reserved. Any other third party trademarks or copyrights are the property of their respective owners. All rights reserved.
    </>

  return(
    <div className="footer">
      <div className="footer_left">
        <FooterLinks onClickUpdateTrafficFunctions={ onClickUpdateTrafficFunctions } />
        <FooterLogos onClickUpdateTrafficFunctions={ onClickUpdateTrafficFunctions } />
        <div className="fine_print">
          { fine_print }
        </div>
      </div>
    </div>
  )

}

export default Footer