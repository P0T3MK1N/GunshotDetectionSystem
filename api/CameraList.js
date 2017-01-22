/**
 * Created by halla on 1/16/2017.
 */
var CameraList = require('../services/CameraList');

/**
 * camera List endpoint
 * @param event
 * @param context
 * @param callback
 */
module.exports.currentCameraList = (event, context, callback) => {//handler

    CameraList.getCameraList(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};

