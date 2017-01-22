/**
 * Created by halla on 1/16/2017.
 */
var Cameras = require('../services/Cameras');

/**
 * Cameras endpoint
 * @param event
 * @param context
 * @param callback
 */
module.exports.cameras = (event, context, callback) => {//handler

    Cameras.getCameras(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};

