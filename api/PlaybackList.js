/**
 * Created by halla on 1/16/2017.
 */
var PlaybackList = require('../services/PlaybackList');

/**
 * PlaybackList endpoint
 * @param event
 * @param context
 * @param callback
 */
module.exports.playbackList = (event, context, callback) => {//handler

    PlaybackList.getPlaybackList(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};

