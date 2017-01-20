/**
 * Created by halla on 1/16/2017.
 */

var Incidents = required("../services/Incidents");

//WHY THIS METHOD module.exports.incidents? ANSWER what returned as the result of a require call. 
//WHY THESE THREE PARAMS (event, context, callback)?
//WHY => this is getter? what mean here? means same?
module.exports.incidents = (event, context, callback) => {
    //This is saying fetch this and use as function with 2 params.
    // params have value of whatever was passed back
    Incidents.getCurrentIncident(function (error, result) {

        //created variable which is a function and has two params
        //could leave var out and nest function directly here if desired
        //var has two params and returns values to the params based on function it calling
        var result = genericApiCallbackHelper(error, result);
        // callback params are null and result of whatever is passed into result in this case either error or apiResultBody from var result above
        // why null then result?
        callback(null, result);
    })
};


//this is a helper function
function genericApiCallbackHelper (error, apiResultBody) {
    // if condition met then will pass param error
    if (error) {
        return {statusCode: 402, body: JSON.stringify(error)};
    }
    // if previous condition not met will pass param apiResultBody
    else {
        return {statusCode: 200, body: JSON.stringify(apiResultBody)};
    }
}















/**
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

