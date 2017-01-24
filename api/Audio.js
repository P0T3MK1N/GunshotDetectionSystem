/**
 * Created by halla on 1/16/2017.
 */

var Audio = require('../services/Audio.js');

/**
 * Audio API endpoint
 * @param event framework related
 * @param context framework related
 * @param callback framework related, response contained
 */

module.exports.audio = (event, context, callback) => {//handler

    //var eventsId = event.pathParameters.id;

    Audio.getAudio(
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
