import { Meteor } from 'meteor/meteor';
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'

export const Login = () => {

	// get router history
	const history = useHistory()

	const [username, setUsername] = useState(null)
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

	const login = () => {
		Meteor.loginWithPassword(username, password, (error) => {
			if(error) alert(error)
			else {
				getUserRoleAndRedirect()
			}
		})
	}

	return (
		<div className="Login">

    	<div className="box">
				<h1>Login</h1>
				<div className="form">
					<label>username</label>
					<input type="text" onChange={(e) => setUsername(e.target.value)} />

					<label>Password</label>
					<input type="password" onChange={(e) => setPassword(e.target.value)} />

					<button onClick={() => login()}>Login</button>
				</div>
				
			</div>
  	</div>
	)
};
