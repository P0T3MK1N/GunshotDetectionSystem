/**
 * Created by halla on 1/16/2017.
 */

'use strict';

/**
 * Incidents API endpoint
 * @param event
 * @param context
 * @param callback
 */
var incidents = require('../services/Incidents.js');//get data

module.exports.incidents = (event, context, callback) => {//handler
    incidents.getCurrentIncidents(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback("[BadRequest]" + JSON.stringify(error.error));
            }
            else {
                callback(null, {statusCode: 200, body: JSON.stringify(result)});
            }
        });
};
