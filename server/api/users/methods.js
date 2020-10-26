// Framework Resources
import { Meteor } from 'meteor/meteor'
import { clrs } from '../../utilities/terminal_colors'
import { enforceRoles } from '../../utilities/enforceRoles'
import { check, Match } from "meteor/check"

import { Message_Threads_Model } from '../messageThreads/model'

Meteor.methods({

	/*******************************************************************************
	* @description creates a new user document and account
	* @note 
	* @returns {  }
	*******************************************************************************/
	Create_New_User: function(data) {
		check(data, {username: String, email: String, password: String}) // complete this

		const generateMeteorUser = () => {
			const newUserId = Accounts.createUser({
				...data,
				profile: {}
			})
	
			console.log(clrs.FgGreen, `Accounts.createUser() made a new user document with _id ${newUserId}`, clrs.Reset)
	
			return newUserId
		}

		const assignRoles = (userId) => {
			Roles.addUsersToRoles(userId, ['USER'])
			console.log(clrs.FgGreen, 'Roles.addUsersToRoles()', clrs.Reset)
		}

		const run = async () => {
			let userId = await generateMeteorUser()
			await assignRoles(userId)
		}

		return run()
	},