// Framework Resources
import { Meteor } from 'meteor/meteor'
import { enforceRoles } from '../../utilities/enforceRoles'
import { check, Match } from "meteor/check"

Meteor.methods({

	/*******************************************************************************
	* @description creates a new document in the collection
	* @returns {  }
	*******************************************************************************/
	Get_User_Role: function() {
		if(this.userId) {
			enforceRoles(['USER', 'ADMIN'])

			const rolesArray = Roles.getRolesForUser(this.userId)

			if(rolesArray[0] === 'USER') {
				const billing = Billing_Accounts.findOne({user_id: this.userId})
				if(billing && !billing.active) return 'USER_DISABLED'
			}

			return rolesArray[0]
		}
	}
})