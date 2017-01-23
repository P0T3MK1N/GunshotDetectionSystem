/**
 * Created by halla on 1/16/2017.
 */

var Incidents = require('../services/Incident.js');

/**
 * Incident API endpoint
 * @param event
 * @param context
 * @param callback
 */

module.exports.incident = (event, context, callback) => {//handler

    var incidentId = event.pathParameters.id;
    
    Incidents.getIncident(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};

