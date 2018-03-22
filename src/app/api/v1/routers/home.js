/**
 * Feature API Router
 *
 *
 *
 */

'use strict'

var router = require('express').Router(),
    home = require('../models/home');

router.use((req, res, next) => {
    // access the req.params object
    // make auth checks
    // do logging
    next();
});
router.get('/home', (req, res) =>{
    	home.getAccount(req, res)
    	.subscribe(
    		(data) => {
    			console.log("dafda");
    			//res.status(200);
    			res.json(data)
    		},
    		(error) => {
	    		//	res.status(500);
	    			res.json({ message: 'Error Message: ' + error })
    		},
    		() => {}
    	);
});

module.exports = router;