/**
 * Business API Service Call
 * Tracking data
 *
 *
 */

'use strict'

var apiCall = require('./apiCall');
let tracking = {};

tracking.get = function(headers){
	const options = {
		uri: 'https://www.alotofpilates.com/api/v3/trackings',	
		headers: apiCall.parseHeaders(headers),
        json: true
    };

	return apiCall.get(options);
};

module.exports = tracking;
