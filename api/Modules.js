/**
 * Created by halla on 1/16/2017.
 */

'use strict';//required for AWS Lambdas
var Module = require('../services/Modules.js');
var Serverless = require ('../services/Serverless.js');
/**
 * Get Module Status API endpoint
 * @param event
 * @param context
 * @param callback
 * @constructor
 */

module.exports.GetModuleStatus = (event, context, callback) => {//handler     //event.path.id for path variables     //event.query.id for query variables
    try {
        if(event.query.param == "fail")Module.fail();
        Module.reportModuleStatus(
            (error, result) => { // [function: param1([param1, param2])]
                if (error) {
                    Serverless.failResponse(callback, 404,JSON.stringify(error));
                }
                else {
                    callback(null, result);
                }
            }, event.path.moduleId);

    }catch(error){
        Serverless.failResponse(callback, 500,error.errorMessage, error.stack);
    }
};

/**
 * Post Module Status API endpoint
 * @param event
 * @param context
 * @param callback
 */

module.exports.PostModuleError = (event, context, callback) => {//handler
    Module.reportModuleError(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback("[BadRequest]" + JSON.stringify(error.error));
            }
            else {
                callback(null, result);
            }
        });
};
