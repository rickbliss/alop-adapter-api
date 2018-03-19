/**
 * Feature API Router
 *
 *
 *
 */

'use strict'

var router = require('express').Router(),
    account = require('./model.js');

router.use((req, res, next) => {
    // access the req.params object
    // make auth checks
    // do logging
    next();
});
router.get('/account', account.home);

module.exports = router;