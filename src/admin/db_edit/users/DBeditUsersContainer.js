import React from 'react'

import {
	Route,
	Switch,
} from 'react-router-dom'

import DBeditUsersIndex from './DBeditUsersIndex'
import DBeditUsersInfo from './DBeditUsersInfo'
import DBeditAddUser from './DBeditAddUser'
import DBeditEditUser from './DBeditEditUser'
import DBeditDeleteUser from './DBeditDeleteUser'

export default class DBeditUsersContainer extends React.Component{

	state = { user: {} }

	getUser = (user) => { this.setState({ user: user}) }

	render(){

		const baseURL = '/backroom/DBedit/users/'
		const userURL = baseURL + this.state.user.id
		const addUserURL = baseURL + 'add'
		const editUserURL = baseURL + this.state.user.id + '/edit'
		const deleteUserURL = baseURL + this.state.user.id + '/delete'

		return(
			<>
				<Switch>
					<Route exact path={baseURL}>
						<DBeditUsersIndex getUser={this.getUser} />
					</Route>
					<Route exact path={userURL}>
						<DBeditUsersInfo user={this.state.user} />
					</Route>
					<Route path={addUserURL}>
						<DBeditAddUser />
					</Route>
					<Route path={editUserURL}>
						<DBeditEditUser user={this.state.user} />
					</Route>
					<Route path={deleteUserURL}>
						<DBeditDeleteUser user={this.state.user} />
					</Route>
				</Switch>
			</>
		)
	}
}