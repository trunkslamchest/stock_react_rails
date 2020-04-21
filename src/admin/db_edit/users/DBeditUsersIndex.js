import React from 'react'

import DBeditUsersTable from './DBeditUsersTable'

import AltButton from '../../../UI/buttons/altButton'

export default class DBeditUsersContainer extends React.Component{

	render(){
		const distribute_users_data = this.props.users && this.props.users.map( user_obj =>
			<DBeditUsersTable
				key={user_obj.id}
				user={user_obj}
				getUser={this.props.getUser}
			/>
		)

		const add_button =
			<AltButton
				link='/backroom/DBedit/users/add'
				name="DBedit_add_user_button"
				onClick={ this.addUserFunctions }
			>
				Add User
			</AltButton>

		const DBedit_table_frame =
	 		<table
			 	className="DBedit_table"
			>
				<tbody>
					<tr>
						<th>User ID</th>
						<th>User Name</th>
						<th>Email</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Gender</th>
						<th>Birth Day</th>
						<th>Birth Month</th>
						<th>Birth Year</th>
						<th>House Number</th>
						<th>Street Name</th>
						<th>City/Town</th>
						<th>State</th>
						<th>Zip Code</th>
						<th>Join Date</th>
					</tr>
					{ distribute_users_data }
				</tbody>
			</table>

		return(
			<>
				{ add_button }
				{ DBedit_table_frame }
			</>
		)
	}
}