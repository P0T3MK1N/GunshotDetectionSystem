/**
 * Created by halla on 1/16/2017.
 */

//var Module = require('../services/Module');
//var ModuleStatus = require('../services/Module');
//var ModuleError = require('../services/Module');

/**
 * ModuleUpdate API endpoint
 * ModuleStatus API endpoint
 * ModuleError API endpoint
 * @param event framework related
 * @param context framework related
 * @param callback framework related, response contained
 */

module.exports.moduleUpdate = (event, context, callback) => {//handler
    ModuleUpdate.getModuleUpdate(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null, {statusCode: 402, body: error});
            }
            else {
                callback(null, {statusCode: 200, body: result});
            }
        });
};

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

module.exports.moduleError = (event, context, callback) => {//handler
    ModuleError.getModuleError(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null, {statusCode: 402, body: error});
            }
            else {
                callback(null, {statusCode: 200, body: result});
            }
        });
};