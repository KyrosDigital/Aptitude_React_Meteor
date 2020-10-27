import { Meteor } from 'meteor/meteor';
import React, {useEffect, useState} from 'react';
import { useHistory, Link } from 'react-router-dom'

export const SignupComponent = () => {

	// get router history
	const history = useHistory()

	const [username, setUsername] = useState(null)
	const [email, setEmail] = useState(null)
	const [password, setPassword] = useState(null)

	const getUserRoleAndRedirect = () => {
		Meteor.call('Get_User_Role', (error, result) => {
			if(error) alert(error)
			if(result === 'USER') history.push('/dashboard/conversations') 
		})
	}

	useEffect(() => {
		if(Meteor.userId()) getUserRoleAndRedirect()
	}, []);

	const createAccount = () => {
		const data = {username, email, password}
		Meteor.call('Create_New_User', data, (error, result) => {
			if(error) alert(error)
			else {
				Meteor.loginWithPassword(email, password, error => {
					if (error) {
						alert(error)
					} else {
						history.push('/dashboard/conversations') 
					}
				})
			}
		})
	}

	return (
		<div className="SignupComponent">

    	<div className="box">
				<h1>Signup</h1>
				<div className="form">
					<label>username</label>
					<input type="text" onChange={(e) => setUsername(e.target.value)} />
					<label>email</label>
					<input type="text" onChange={(e) => setEmail(e.target.value)} />
					<label>Password</label>
					<input type="password" onChange={(e) => setPassword(e.target.value)} />

					<button onClick={() => createAccount()}>Create Account</button>
				</div>

				<div>
					<Link to="/login">Login</Link>
				</div>
				
			</div>
  	</div>
	)
};
