'use strict';
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema; 

 var usersSchema = new Schema({
	 name: {
		 type: String,
		 required: 'Please enter the name'
	 },
	 Created_date: {
		 type: Date,
		default: Date.now
	},
	status: {
		type: [{
			 type: String,
			 enum: ['pending', 'ongoing', 'completed']
		}],
		 default:  ['pending']
	}
}, { strict: false });

 module.exports = mongoose.model('users', usersSchema); 