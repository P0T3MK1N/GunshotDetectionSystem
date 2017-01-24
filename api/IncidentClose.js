'use strict';

/**
 * Created by halla on 1/16/2017.
 */

var Incident = require('../services/IncidentClose');

/**
 * Incident Close endpoint
 * @param event
 * @param context
 * @param callback
 */

module.exports.incidentClose = (event, context, callback) => {//handler

    var incidentId = event.pathParameters.id;

    IncidentClose.getIncidentClose(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};