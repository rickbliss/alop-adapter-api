/**
 * Mapping File
 *
 *
 *
 */

'use strict'


class workout {
    transform(data){    	    	    
    	const mappedObject = data.map((item) => item);
		return mappedObject;
    }
}

module.exports = new workout();
