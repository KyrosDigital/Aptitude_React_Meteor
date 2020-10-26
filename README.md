# Kyros Aptitude Test - React, Meteor

Here is the official documentation for the test. 

## Tech Stack
- Meteor
- React
- Mongo
- Node
- NPM

## File/Folder Name Conventions
- Front end: 
	- Folder: `folder-name`
	- File Name:
		- (if component): `FileName`
		- (if not component) `fileName`
- Back end: 
	- litteral collection casing, use foldernames that match the collection name
		- Example: `/server/api/Billing_Info/`
	- if not related to a collection, you can use the `fileName` or `folderName` camel case convention

## Code Case Conventions
- Js Variables: camel case
	- Example: `const newVar = null;`
- Object keys: snake case
	- Example: `{ key_one: null, key_two: null }`
- Methods: pascal snake case
	- Example: `New_Method: function() {},`
- Collections: pascal snake case
	- Example: `Billing_Info`
- Frontend components: pascal case
	- Example: `NewComponent`