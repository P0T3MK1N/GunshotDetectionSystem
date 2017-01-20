/**
 * Created by halla on 1/16/2017.
 */

class cameraList {
    /**
     * Get Camera Panel
     * @param callback
     */
    static getCameraList(callback) {
        var cameraList = require('../mock_data/CameraList.json.json');//get data
        if (cameraList) {//if data return data
            callback(null, cameraList);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = cameraList;

