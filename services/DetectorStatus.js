/**
 * Created by halla on 1/16/2017.
 */

class detectorstatus {
    /**
     * Get Current Incidents
     * @param callback
     */
    static getDetectorStatus(callback) {
        var incidents = require('../mock_data/DetectorStatus.json');//get data
        if (detectorstatus) {//if data return data
            callback(null, detectorstatus);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = detectorstatus;

