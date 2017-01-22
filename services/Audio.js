/**
 * Created by halla on 1/16/2017.
 */

class audio {
    /**
     * Get Playback List
     * @param callback
     */
    static getAudio(callback) {
        var audio = require('../mock_data/Audio.json');//get data
        if (audio) {//if data return data
            callback(null, audio);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }
}

module.exports = audio;

