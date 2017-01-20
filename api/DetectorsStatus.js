/**
 * Created by halla on 1/16/2017.
 */
var DetectorsStatus = require('../services/DetectorsStatus');

/**
 * detector status endpoint
 * @param event
 * @param context
 * @param callback
 */
module.exports.detectorsstatus = (event, context, callback) => {//handler

    DetectorsStatus.getDetectorsStatus(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};

