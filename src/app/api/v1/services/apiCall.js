/**
 * Generic Business API Call methods
 * GET
 *
 *
 */

'use strict'

var request = require('request');
var Observable = require('rxjs/Observable').Observable;
var config = require('../../../../../config/config');

class apiCall {

	parseHeaders(h){
		if (h['Authorization'] && !h['Authorization'].includes('Bearer')) {
			h['Authorization'] = 'Bearer ' + h['Authorization'];
		}
		if (h['host']){
			delete h['host'];
		}
		h['x-3scale-proxy-secret-token'] = config.API_TOKEN;
		h['accept'] = 'application/json';
		h['content-type'] = 'application/json';		
		return h;
	};

	get(options){
		console.log(options);
		return Observable.create( observer  => {
			request.get(options, (err, resp, body) => {
	            if (err) {
	                let errorMsg;
	                if (body){
	                	errorMsg = "error processing response for " + JSON.stringify(body);
	                }else{
	                	errorMsg = "error processing response";
	                }
	                observer.error({
	                	resp: errorMsg
	                })
	            } else {          
	                observer.next(body);
	                observer.complete();
	            }
	        });
		})
	};

};



module.exports = new apiCall();
