/**
 * Business API Service Call
 * Workout data
 *
 *
 */

'use strict'

var apiCall = require('./apiCall');
let workout = {};

workout.get = function(headers){
	const options = {
		uri: 'https://www.alotofpilates.com/api/v3/workouts/randomList?limit=4&status=active',	
		headers: apiCall.parseHeaders(headers),
        json: true
    };


	return apiCall.get(options);
};

module.exports = workout;
