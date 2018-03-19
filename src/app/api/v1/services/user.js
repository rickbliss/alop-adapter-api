/**
 * Business API Service Call
 * Tracking data
 *
 *
 */

'use strict'

var request = require('request');
let user = {};

user.get = function(){
	const options = {
		uri: 'https://www.alotofpilates.com/api/v3/users',	
		headers: {
			'accept': 'application/json',
			'content-type': 'application/json',
			'x-3scale-proxy-secret-token': 'MPP-Allow-API-Call',
			'Authorization': 'Bearer ddd87fb9a543aa0c4d1dd58d55942606dbd5681bfec5311f4077d4b0610380a9'    
		},
		json: true
	};

    return new Promise((resolve, reject) => {    
        request.get(options, (err, resp, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(body); //JSON.parse(body)
            }
        });
    });
};

module.exports = user;
