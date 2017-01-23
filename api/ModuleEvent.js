/**
 * Created by halla on 1/16/2017.
 */

var ModuleEvent = require('../services/ModuleEvent.js');

/**
 * Module Event API endpoint
 * @param event framework related
 * @param context framework related
 * @param callback framework related, response contained
 */

module.exports.moduleEvent = (event, context, callback) => {//handler

    ModuleEvent.postModuleEvent(
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
