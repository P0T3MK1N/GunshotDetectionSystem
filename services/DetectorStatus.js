/**
 * Created by halla on 1/16/2017.
 */

class detectorstatus {
    /**
     * Get Detector Status
     * @param callback
     */
    static getDetectorStatus(callback) {
        var detectorstatus = require('../mock_data/DetectorStatus.json');//get data
        if (detectorstatus) {//if data return data
            callback(null, detectorstatus);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = detectorstatus;

