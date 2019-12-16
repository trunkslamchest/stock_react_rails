import React from 'react'
import { Redirect } from 'react-router'

import './SignUp.css'

export default class SignUp extends React.Component {

	state = {
		logIn: false,
		cancel: false,
		sign_up_user_name: "",
		sign_up_password: "",
		sign_up_email: "",
		sign_up_first_name: "",
		sign_up_last_name: "",
		sign_up_gender: "",
		sign_up_birth_day: "",
		sign_up_birth_month: "",
		sign_up_birth_year: "",
		sign_up_house_number: "",
		sign_up_street_name: "",
		sign_up_city_town: "",
		sign_up_state: "",
		sign_up_zip_code: "",
		errors: []
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitSignUpFunctions = (event) => {
		this.signUpSubmitted(event)
		this.props.updateLogin()
	}

	signUpSubmitted = (event) => {
		event.persist()
		event.preventDefault()
		fetch("http://localhost:3001/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_name: this.state.sign_up_user_name,
				password: this.state.sign_up_password,
				email: this.state.sign_up_email,
				first_name: this.state.sign_up_first_name,
				last_name: this.state.sign_up_last_name,
				gender: this.state.sign_up_gender,
				birth_month: this.state.sign_up_birth_month,
				birth_day: this.state.sign_up_birth_day,
				birth_year: this.state.sign_up_birth_year,
				house_number: this.state.sign_up_house_number,
				street_name: this.state.sign_up_street_name,
				city_town: this.state.sign_up_city_town,
				state: this.state.sign_up_state,
				zip_code: this.state.sign_up_zip_code,
			})
		})
	    .then(response => response.json())
	    .then(res_obj => {
			if (res_obj.errors) {
				this.setState({
					errors: res_obj.errors
				})
			} else {
				this.onSubmitUpdateTrafficFunctions(event, res_obj)
				this.props.setToken(res_obj)
				this.setState({
					loggedIn: true
				})
			}
		})
	}

	onResetFunctions = (event) => {
		event.persist()
		event.preventDefault()
		this.onClickUpdateTrafficFunctions(event)
		this.setState({
			sign_up_user_name: "",
			sign_up_password: "",
			sign_up_email: "",
			sign_up_first_name: "",
			sign_up_last_name: "",
			sign_up_gender: "",
			sign_up_birth_day: "",
			sign_up_birth_month: "",
			sign_up_birth_year: "",
			sign_up_house_number: "",
			sign_up_street_name: "",
			sign_up_city_town: "",
			sign_up_state: "",
			sign_up_zip_code: "",
		})
	}

	onCancelFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
		this.setState({
			cancel: true
		})
	}

	onClickUpdateTrafficFunctions = (event, res_obj) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	onSubmitUpdateTrafficFunctions = (event, res_obj) => {
		this.props.update_traffic_data({
			user_id: res_obj.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	render(){
		return (
			<>
				{
			        (!!this.state.errors) ? (
		  				<div className="default_error_report">
		  					{
				              this.state.errors.map( error =>
				                <div className="default_error_item">
				                  { error }
				                </div>
				              )
		            		}
		  				</div>
			        )
			        :
			        (
			          ""
			        )
				}
				{
					!(this.state.loggedIn) ?
						<div className="default_container">
							<div className="default_container_header">
								<h3>Sign Up</h3>
							</div>
							<form
								name="sign_up_form"
								interaction="submit"
								className="sign_up_form"
								onSubmit={ this.onSubmitSignUpFunctions }
							>
								<div className="sign_up_basics">
									<label htmlFor="sign_up_user_name">Username</label>
									<input
										id="sign_up_user_name"
										type="text"
										name="sign_up_user_name"
										placeholder="User Name..."
										onChange={ this.onChange }
										value={ this.state.sign_up_user_name }
									/>
									<br />
									<label htmlFor="sign_up_password">Password</label>
									<input
										id="sign_up_password"
										type="password"
										name="sign_up_password"
										placeholder="Password..."
										onChange={ this.onChange }
										value={ this.state.sign_up_password }
									/>
									<br />
									<label htmlFor="sign_up_email">Email</label>
									<input
										id="sign_up_email"
										type="text"
										name="sign_up_email"
										placeholder="Email Address..."
										onChange={ this.onChange }
										value={ this.state.sign_up_email }
									/>
								</div>
								<div className="sign_up_profile_name">
									<label htmlFor="sign_up_name">Name</label>
									<input
										id="sign_up_first_name"
										type="text"
										name="sign_up_first_name"
										placeholder="First Name..."
										onChange={ this.onChange }
										value={ this.state.sign_up_first_name }
									/>
									<input
										id="sign_up_last_name"
										type="text"
										name="sign_up_last_name"
										placeholder="Last Name..."
										onChange={ this.onChange }
										value={ this.state.sign_up_last_name }
									/>
									<hr />
								</div>
								<div className="sign_up_gender">
									<label htmlFor="sign_up_gender">Gender</label>
									<select
										id="sign_up_gender"
										name="sign_up_gender"
										onChange={ this.onChange }
										value={ this.state.sign_up_gender }
									>
										<option value="Non-Binary">Non-Binary</option>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</select>
									<hr />
								</div>
								<div className="sign_up_birth">
									<label htmlFor="sign_up_birth">Birth Day</label>
									<select
										id="sign_up_birth_month"
										name="sign_up_birth_month"
										onChange={ this.onChange }
										value={ this.state.sign_up_month }
									>
										<option value="January">January</option>
										<option value="Februrary">Februrary</option>
										<option value="March">March</option>
										<option value="April">April</option>
										<option value="May">May</option>
										<option value="June">June</option>
										<option value="July">July</option>
										<option value="August">August</option>
										<option value="September">September</option>
										<option value="October">October</option>
										<option value="November">November</option>
										<option value="December">December</option>
									</select>
									<input
										id="sign_up_birth_day"
										type="number"
										min="1"
										max="31"
										name="sign_up_birth_day"
										placeholder="1"
										onChange={ this.onChange }
										value={ this.state.sign_up_birth_day }
									/>
									<input
										id="sign_up_birth_year"
										type="number"
										min="1900"
										max="2019"
										name="sign_up_birth_year"
										onChange={ this.onChange }
										placeholder="1900"
										value={ this.state.sign_up_birth_year }
								/>
								<hr />
								</div>
								<div className="sign_up_address">
									<label htmlFor="sign_up_address">Address</label>
									<input
										id="sign_up_house_number"
										type="number"
										min="1"
										max="9999"
										name="sign_up_house_number"
										placeholder="Apt./House Number..."
										onChange={ this.onChange }
										value={ this.state.sign_up_house_number }
									/>
									<input
										id="sign_up_street_name"
										type="text"
										name="sign_up_street_name"
										placeholder="Steet..."
										onChange={ this.onChange }
										value={ this.state.sign_up_street_name }
									/>
									<input
										id="sign_up_city_town"
										type="text"
										name="sign_up_city_town"
										placeholder="City/Town..."
										onChange={ this.onChange }
										value={ this.state.sign_up_city_town }
									/>
									<select
										id="sign_up_state"
										name="sign_up_state"
										placeholder="State..."
										onChange={ this.onChange }
										value={ this.state.sign_up_state }
										>
										<option value="Alabama">Alabama</option>
										<option value="Alaska">Alaska</option>
										<option value="Arizona">Arizona</option>
										<option value="Arkansa">Arkansas</option>
										<option value="California">California</option>
										<option value="Colorado">Colorado</option>
										<option value="Connecticut">Connecticut</option>
										<option value="Delaware">Delaware</option>
										<option value="Florida">Florida</option>
										<option value="Georgia">Georgia</option>
										<option value="Hawaii">Hawaii</option>
										<option value="Idaho">Idaho</option>
										<option value="Illinois">Illinois</option>
										<option value="Indiana">Indiana</option>
										<option value="Iowa">Iowa</option>
										<option value="Kansas">Kansas</option>
										<option value="Kentucky">Kentucky</option>
										<option value="Louisiana">Louisiana</option>
										<option value="Maine">Maine</option>
										<option value="Maryland">Maryland</option>
										<option value="Massachusetts">Massachusetts</option>
										<option value="Michigan">Michigan</option>
										<option value="Minnesota">Minnesota</option>
										<option value="Mississippi">Mississippi</option>
										<option value="Missouri">Missouri</option>
										<option value="Montana">Montana</option>
										<option value="Nebraska">Nebraska</option>
										<option value="Nevada">Nevada</option>
										<option value="New Hampshire">New Hampshire</option>
										<option value="New Jersey">New Jersey</option>
										<option value="New Mexico">New Mexico</option>
										<option value="New York">New York</option>
										<option value="North Carolina">North Carolina</option>
										<option value="North Dakota">North Dakota</option>
										<option value="Ohio">Ohio</option>
										<option value="Oklahoma">Oklahoma</option>
										<option value="Oregon">Oregon</option>
										<option value="Pennsylvania">Pennsylvania</option>
										<option value="Rhode Island">Rhode Island</option>
										<option value="South Carolina">South Carolina</option>
										<option value="South Dakota">South Dakota</option>
										<option value="Tennessee">Tennessee</option>
										<option value="Texas">Texas</option>
										<option value="Utah">Utah</option>
										<option value="Vermont">Vermont</option>
										<option value="Virginia">Virginia</option>
										<option value="Washington">Washington</option>
										<option value="West Virginia">West Virginia</option>
										<option value="Wisconsin">Wisconsin</option>
										<option value="Wyoming">Wyoming</option>
									</select>
									<input id="sign_up_zip_code"
										type="number"
										min="10000"
										max="99999"
										onChange={ this.onChange }
										name="sign_up_zip_code"
										placeholder="Zip Code..."
										value={ this.state.sign_up_zip_code }
									/>
								</div>
								<div className="sign_up_form_buttons">
									<input
										className="default_button"
										type="submit"
										value="Create Account"
									/>
									<button
										name="sign_up_form"
	      								interaction="reset"
										className="default_button"
										onClick={ this.onResetFunctions }
									>
										Reset
									</button>
									{
										!(this.state.cancel) ? (
											<input
												name="sign_up_form"
												interaction="cancel"
												className="default_button"
												type="reset"
												onClick={ this.onCancelFunctions }
												value="Cancel"
											/>
										)
										:
										(
											<Redirect to="/" />
										)
									}
								</div>
							</form>
						</div>
					:
						<Redirect to='/dashboard' />
				}
			</>
		)
	}
}