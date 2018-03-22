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
require('rxjs/add/operator/catch');
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
            })).catch((error) => {
                return Observable.of({
                    user: {}
                })
            });

        const w = workoutService.get()
            .map((data) => ({
                workout: workoutMapping.transform(data)
            })).catch((error) => {
                return Observable.of({
                    workout: {}
                })
            });

        const a = trackingService.get()
            .map((data) => ({
                activities: activityMapping.transform(data)
            })).catch((error) => {
                return Observable.of({
                    activities: {}
                })
            });

		return Observable.concat(u, Observable.forkJoin(a,w).mergeMap(results => Observable.from(results)));
    }
}
module.exports = new home();
