/**
 * Mapping File
 *
 *
 *
 */

'use strict'


class workout {
    transform(data){    	
		var result = {};
		result.id = data.id;        
		result.created_at = data.created_at;
		return result;
    }
}

module.exports = new workout();
