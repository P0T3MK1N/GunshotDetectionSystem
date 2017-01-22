/**
 * Created by halla on 1/16/2017.
 */
//var Events = require('../services/Events.js');
//var Cameras = require('../services/Cameras.js');
var Audio = require('../services/Audio.js');
//var eventId = {id};


module.exports.audio = (event, context, callback) => {//handler

    var eventsId = event.pathParameters.id;

    Audio.getAudio( //eventsId 
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


