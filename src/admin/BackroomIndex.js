import React from 'react'

import DefaultButton from '../UI/buttons/defaultButton'

const BackroomIndex = (props) => {

		return(
			<>
				<h3> Backroom Dashboard </h3>
				<DefaultButton
					link='/backroom/test_temp'
					name='test_page_button'
					onClick={null}
				>
					Test Temp
				</DefaultButton>
			</>
		)

}

export default BackroomIndex