/**
 * Created by halla on 1/16/2017.
 */
//var Incidents = require('../services/Incidents.js');
//var Incident = require('../services/Incident');

/**
 * Incidents endpoint
 * @param event
 * @param context
 * @param callback
 */
module.exports.incidents = (event, context, callback) => {//handler

    Incidents.getCurrentIncidents(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};


module.exports.incident = (event, context, callback) => {//handler

    Incident.getIncident(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};