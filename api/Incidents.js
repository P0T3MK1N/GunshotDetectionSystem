/**
 * Created by halla on 1/16/2017.
 */

var Incidents = require('../services/Incidents');

module.exports.incidents = (event, context, callback) => {//handler
    
    //var body = JSON.parse(event.body);//todo remove example line
    Incidents.getCurrentIncident (function(error, result){
        var result = genericApiCallbackHelper(error, result);
        callback(null, result);
    });
};







function genericApiCallbackHelper (error, apiResultBody) {
    if (error) {
        return {statusCode: 402, body: JSON.stringify(error)};
    }
    else {
        return {statusCode: 200, body: JSON.stringify(apiResultBody)};
    }
}

