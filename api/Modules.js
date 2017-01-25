/**
 * Created by halla on 1/16/2017.
 */

'use strict';//required for AWS Lambdas
var Module = require('../services/Modules.js');

/**
 * Get Module Status API endpoint
 * @param event
 * @param context
 * @param callback
 * @constructor
 */

module.exports.GetModuleStatus = (event, context, callback) => {//handler     //event.path.id for path variables     //event.query.id for query variables
    Module.getModuleStatus(
        (error, result) => { // [function: param1([param1, param2])]
            if(!error) {
                var cError = {
                    httpStatus: 404,
                    code: "NotFound",
                    message: "The requested resource was not found"
                };
                callback (null, cError)}
            else {
                callback(null, result);
            }
        }, event.path.moduleId);
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
                callback(null, {statusCode: 200, body: JSON.stringify(result)});
            }
        });
};
