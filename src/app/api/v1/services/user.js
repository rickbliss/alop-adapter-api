/**
 * Business API Service Call
 * Tracking data
 *
 *
 */

'use strict'

var apiCall = require('./apiCall');
let user = {};

user.get = function(headers){
	const options = {
		uri: 'https://www.alotofpilates.com/api/v3/users',
		headers: apiCall.parseHeaders(headers),
		json: true
	};

	return apiCall.get(options);
};

module.exports = user;
