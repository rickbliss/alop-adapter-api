/**
 * Feature API Model
 *
 *
 *
 */

'use strict'

var Observable = require('rxjs/Observable').Observable;
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');
require('rxjs/add/observable/forkJoin');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/observable/from');
require('rxjs/add/observable/concat');
const userService = require('../services/user');
const userMapping = require('../mappings/user');
const workoutService = require('../services/workout');
const workoutMapping = require('../mappings/workout');
const trackingService = require('../services/tracking');
const activityMapping = require('../mappings/activity');

class home {
    getAccount(req, res){
    	const u = userService.get()
        .map( (data) => ({
            user: userMapping.transform(data)
        }));

        const w = workoutService.get()
        .map((data) => ({
            workout: workoutMapping.transform(data)
        }));

        const a = trackingService.get()
        .map((data) => ({
            activities: activityMapping.transform(data)
        }))

		return Observable.concat(u, Observable.forkJoin(a,w)).flatMap(results=> Observable.from(results));
    }
}
module.exports = new home();
