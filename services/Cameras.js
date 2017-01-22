/**
 * Created by halla on 1/16/2017.
 */

class cameras {
    /**
     * Get Camera Panel
     * @param callback
     */
    static getCameras(callback) {
        var cameras = require('../../mock_data/Cameras.json');//get data
        if (cameras) {//if data return data
            callback(null, cameras);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = cameras;

