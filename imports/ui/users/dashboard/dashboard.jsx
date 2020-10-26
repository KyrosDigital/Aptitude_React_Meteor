import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import { UserSideNav } from './components/sideNav'

export const UserDashboard = (props) => {

	// get router history
	const history = useHistory()

	useEffect(() => {
		if(!Meteor.userId()) {
			history.push('/')
		}
	}, [])

	return (
		<div className=" UserDashboard">
			<UserSideNav />

			<div className=" UserDashboardMain">
				<div className=" UserDashboardMainPadding">
					{props.children}
				</div>
			</div>
			
  	</div>
	)
};