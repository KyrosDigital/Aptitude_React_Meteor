// Framework Resources
import { Roles } from 'meteor/alanning:roles'

// configures roles accourding to the new version 3.0 of roles package
// https://github.com/Meteor-Community-Packages/meteor-roles#roles-naming
// https://github.com/Meteor-Community-Packages/meteor-roles

// Roles.addUsersToRoles(joesUserId, ['role-1','role-2'], 'some-scope');

Roles.createRole('USER', { unlessExists: true }) // For all admins
