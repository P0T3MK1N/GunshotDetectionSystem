/**
 * Created by halla on 1/16/2017.
 */
var DetectorStatus = require('../services/DetectorStatus');

/**
 * detector status endpoint
 * @param event
 * @param context
 * @param callback
 */
module.exports.detectorstatus = (event, context, callback) => {//handler

    DetectorStatus.getCurrentIncident(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};

