import React from 'react';
import { useHistory, Link } from 'react-router-dom'

export const UserSideNav = () => {

	// get router history
	const history = useHistory()
	
	return (
		<div className="UserSideNav">
    	<Link to='/dashboard/orders'>Messages</Link>
			<div className="hr"></div>
			<Link to='/dashboard/shipments'>Account</Link>
			<div className="hr"></div>
			<Link to='#'>Logout</Link>
  	</div>
	)
};