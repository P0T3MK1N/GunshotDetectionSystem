'use strict';

/**
 * Created by halla on 1/16/2017.
 */

//var Incidents = require('../services/Incidents.js');

/**
 * Incidents API endpoint
 * @param event
 * @param context
 * @param callback
 */
module.exports.incidents = (event, context, callback) => {//handler

    getCurrentIncidents(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};

function getCurrentIncidents(callback) {
    var incidents = require('../mock_data/Incidents.json');//get data
    if (incidents) {//if data return data
        callback(null, incidents);
    } else {//else return error
        callback({error: 'Could not retrieve data'}, null);
    }
}
