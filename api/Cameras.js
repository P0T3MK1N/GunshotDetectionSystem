/**
 * Created by halla on 1/16/2017.
 */

var Cameras = require('../services/Cameras.js');

/**
 * Cameras API endpoint
 * @param event framework related
 * @param context framework related
 * @param callback framework related, response contained
 */

module.exports.cameras = (event, context, callback) => {//handler

    var eventsId = event.pathParameters.id;

    Cameras.getCameras(
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
