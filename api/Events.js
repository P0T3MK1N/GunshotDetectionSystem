'use strict';
/**
 * Created by halla on 1/16/2017.
 */

var Events = require('../services/Events.js');

/**
 * Events API endpoint
 * @param event framework related
 * @param context framework related
 * @param callback framework related, response contained
 */

module.exports.events = (event, context, callback) => {//handler

    var incidentId = event.pathParameters.id;

    Events.getEvents(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                console.log(error)
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};
