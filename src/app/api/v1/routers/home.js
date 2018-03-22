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
	var account;
    	home.getAccount(req, res)
    	.subscribe(
    		(value) => {
    			//console.log("next", value);    			
    			account = value;    			
    		},
    		(error) => {
    			//console.log("error", error);
    			res.status(500);
    			res.json({ message: 'Error Message: ' + error })
    		},
    		() => {
    			res.status(200);
    			res.json(account)
    		}
    	);
});

module.exports = router;