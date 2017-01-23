/**
 * Created by halla on 1/16/2017.
 */

var ModuleStatus = require('../services/ModuleStatus');

/**
 * ModuleStatus API endpoint
 * @param event framework related
 * @param context framework related
 * @param callback framework related, response contained
 */

module.exports.moduleStatus = (event, context, callback) => {//handler
    ModuleStatus.getModuleStatus(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null, {statusCode: 402, body: error});
            }
            else {
                callback(null, {statusCode: 200, body: result});
            }
        });
};