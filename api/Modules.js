/**
 * Created by halla on 1/16/2017.
 */

'use strict';

/**
 * Get Module Status API endpoint
 * Post Module Status API endpoint
 * @param event
 * @param context
 * @param callback
 */
var moduleInclude = require('../services/Modules.js');//get data

module.exports.modulestatus = (event, context, callback) => {//handler
    moduleInclude.getModuleStatus(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback("[BadRequest]" + JSON.stringify(error.error));
            }
            else {
                callback(null, {statusCode: 200, body: JSON.stringify(result)});
            }
        });
};

module.exports.modulestatus = (event, context, callback) => {//handler
    
    moduleInclude.postModuleError(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback("[BadRequest]" + JSON.stringify(error.error));
            }
            else {
                callback(null, {statusCode: 200, body: JSON.stringify(result)});
            }
        });
};
