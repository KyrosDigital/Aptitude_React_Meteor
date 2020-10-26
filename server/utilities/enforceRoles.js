// Framework Resources
import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'
import { check, Match } from "meteor/check"



/**
 * @description This function is used to restrict access to methods based on the role
 * the logged in user is in
 * 
 * @param { String || Array } role The role or roles to be matched
 */
export const enforceRoles = (targetRoles) => {
	check(targetRoles, Match.OneOf(String, Array))

	if (!Meteor.userId()) {
		if (typeof (targetRoles) === 'string') {
			throw new Error(`enforceRole failed attempting to match role '${targetRoles}' because there is no user logged in`)
		} else {
			throw new Error(`enforceRole failed attempting to match one of the following roles: ${targetRoles}; because there is no user logged in`)
		}
	} else {
		const rolesArray = Roles.getRolesForUser(Meteor.userId())

		if (rolesArray.length !== 1) {
			throw new Error(`enforceRole failed because userId: ${Meteor.userId()} is in ${rolesArray.length} roles. This is unexpected; user should be in exactly 1 role. USER_ROLES: ${rolesArray}`)
		} else if (!Roles.userIsInRole(Meteor.userId(), targetRoles)) {
			if (typeof (targetRoles) === 'string') {
				throw new Error(`enforceRole failed because userId: ${Meteor.userId()} is in role: ${rolesArray[0]}. enforceRole expected: '${targetRoles}'`)
			} else {
				throw new Error(`enforceRole failed because userId: ${Meteor.userId()} is in role: ${rolesArray[0]}. enforceRole expected one of the following: ${targetRoles}`)
			}
		}
	}
}