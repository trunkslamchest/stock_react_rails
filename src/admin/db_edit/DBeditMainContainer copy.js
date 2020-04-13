import React from 'react'

import { useHistory } from 'react-router-dom'

import DBeditIndex from './DBeditIndex'
import DBeditUsersContainer from './users/DBeditUsersContainer'

import './DBedit.css'


const DBeditMainContainer = (props) => {
	
	// state = { display: 'index' }
	
	// componentDidMount(){ this.setState({ display: 'index' }) }

	let history = useHistory()

	const showDBIndex = () => { this.setState({ display: 'index' }) }
	
	const showDBusers = (signal) => {
		if(signal !== "signal") {
			this.setState({
				display: 'users',
			})
		}
	}
	
		// const history = useHistory()
		console.log(history)
	return(
		<>
			<div className="DBedit_navbar">
				<div className="DBedit_navbar_item" onClick={ showDBusers }>
					<p>Users</p>
				</div>
			</div>
		</>
	)

}

export default DBeditMainContainer

// <>
// <div className="DBedit_navbar">
// 	<div className="DBedit_navbar_item" onClick={ this.showDBusers }>
// 		<p>Users</p>
// 	</div>
// </div>
// {
// 	(() => {
// 		switch(this.state.display) {
// 			case 'index': return <DBeditIndex />;
// 			case 'users': return <DBeditUsersContainer showDBusers={ this.showDBusers } />;
// 			default: return <DBeditIndex />;
// 		}
// 	})()
// }
// </>