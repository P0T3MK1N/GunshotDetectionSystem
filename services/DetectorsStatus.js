/**
 * Created by halla on 1/16/2017.
 */

class detectorsstatus {
    /**
     * Get Detectors Status
     * @param callback
     */
    static getDetectorsStatus(callback) {
        var detectorsstatus = require('../mock_data/DetectorsStatus.json');//get data
        if (detectorsstatus) {//if data return data
            callback(null, detectorsstatus);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = detectorsstatus;

