/**
 * Feature API Model
 *
 *
 *
 */

'use strict'

const userService = require('../services/user');
const trackingService = require('../services/tracking');
const rp = require('request-promise');

class account {
    constructor(){};

    home(req, res){
        userService.get(req, res)
            .then((data) => res.json(data))
            .catch((err) =>  res.json({ message: 'Error Message: ' + err }));

        trackingService.get(req, res)
            .then((data) => res.json(data))
            .catch((err) =>  res.json({ message: 'Error Message: ' + err }));

    };

    userData(user) {
    	console.log(user);
    	return { "id": user.id,
			    "name": user.name,
			    "email": user.email,
			    "sign_in_count": 90,
			    "location": "Cleveland OH",
			     "created_at": "2016-07-04 20:40:59 UTC",
			    "subscriptions": [
			        {
			            "id": 5,
			            "plan_id": 3,
			            "status": "active",
			            "active_until": "2018-12-22 21:25:22 UTC",
			            "type": "REGULAR",
			            "plan_name": "Committed"
			        }
			    ]};
    };
}
  
/*
{
    "id": 614,
    "name": "Luciana G.",
    "email": "luciana123_2002@yahoo.com",
    "sign_in_count": 90,
    "location": "Cleveland OH",
     "created_at": "2016-07-04 20:40:59 UTC",
    "subscriptions": [
        {
            "id": 5,
            "plan_id": 3,
            "status": "active",
            "active_until": "2018-12-22 21:25:22 UTC",
            "type": "REGULAR",
            "plan_name": "Committed"
        }
    ],
    trackings: {
    classes_taken_this_week: 10,
    minutes_taken_this_week: 134,
    classes_taken_this_month: 20,
    minutes_taken_this_month: 234,
    classes_taken_this_year: 30,
    minutes_taken_this_year: 334,
    recent: [
    {
        "id": 1151,
        "workout_id": 157,
        "created_at": "2017-07-03 17:13:35 UTC",
        "workout": {
            "id": 157,
            "title": "iOS class"
        }
    },
    {
        "id": 1071,
        "workout_id": 533,
        "created_at": "2017-05-09 18:49:35 UTC",
        "workout": {
            "id": 533,
            "title": "Lunchtime Pilates in 40 min. or less!"
        }
    }]
    }
*/

module.exports = new account();
