/**
 * Created by halla on 1/16/2017.
 */

class playbackList {
    /**
     * Get Playback List
     * @param callback
     */
    static getPlaybackList(callback) {
        var playbackList = require('../mock_data/PlaybackList.json');//get data
        if (playbackList) {//if data return data
            callback(null, playbackList);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }
}

module.exports = playbackList;

