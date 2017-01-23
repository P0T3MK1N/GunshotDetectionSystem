/**
 * Created by halla on 1/16/2017.
 */

var MergeIncidents = require('../services/MergeIncidents.js');

/**
 * Merge Incidents API endpoint
 * @param event framework related
 * @param context framework related
 * @param callback framework related, response contained
 */

module.exports.mergeIncidents = (event, context, callback) => {//handler

    var eventId = event.pathParameters.id;
    var incidentsId = event.pathParameters.id;
    
    MergeIncidents.putMergeIncidents(
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
