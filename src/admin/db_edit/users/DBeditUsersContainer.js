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

import userFunctions from '../../../utility/userFunctions'

export default class DBeditUsersContainer extends React.Component{

	state = { user: {}, users: [] }

	componentDidMount(){ this.getUsers() }

	getUsers = () => {
		userFunctions('get', 'http://localhost:3001/users')
		.then(res_obj => this.setState({ users: res_obj.data }) )
	}

	getUser = (user) => { this.setState({ user: user}) }

	deleteUser = () => {
		let filteredUsers = this.state.users.filter( user => parseInt(user.id) !== this.state.user.id )
		this.setState({ users: filteredUsers })
	}

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
						<DBeditUsersIndex
							getUser={this.getUser}
							getUsers={this.getUsers}
							users={this.state.users}
						/>
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
						<DBeditDeleteUser
							user={this.state.user}
							deleteUser={this.deleteUser}
						/>
					</Route>
				</Switch>
			</>
		)
	}
}