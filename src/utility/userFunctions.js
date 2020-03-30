// export function UserUpdate() {

// 	this.logInSubmit = function(username, password) {
// 		return fetch("http://localhost:3001/login", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify({
// 				user_name: username,
// 				password: password
// 			})
// 		})
// 		.then(res => res.json())
// 	}

// 	this.signUpSubmit = function(signUpObj) {
// 		return fetch("http://localhost:3001/users", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify(signUpObj)
// 		})
// 		.then(res => res.json())
// 	}

// 	this.editProfileSubmit = function(userID, editProfileObj) {
// 		return fetch(`http://localhost:3001/users/${userID}`, {
// 			method: "PATCH",
// 			headers: {
// 				"content-type":"application/json"
// 			},
// 			body: JSON.stringify(editProfileObj)
// 		})
// 		.then(res => res.json())
// 	}

// 	this.deleteUser = function(userID) {
// 		return fetch(`http://localhost:3001/users/${userID}`, {
// 			method: "DELETE"
// 		})
// 	}

// }

;(function(env) {

	var userFunctions = function(method, url, obj){
		var init = new userFunctions.init(method, url, obj)
		return init[method]
	}

	userFunctions.init = function(method, url, obj){
		this[method] = this[method](url, obj)
	}

	userFunctions.prototype = {

		get: function(url) {
			return fetch(url)
			.then(res => res.json())
		},

	}

	userFunctions.init.prototype = userFunctions.prototype

	env.userFunctions = userFunctions

	module.exports = userFunctions

})(typeof window === "undefined" ? global : window)