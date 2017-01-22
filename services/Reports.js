/**
 * Created by halla on 1/16/2017.
 */

class reports {
    /**
     * Get Current Incidents
     * @param callback
     */
    static getReports(callback) {
        var reports = require('../mock_data/Incidents.json');//get data
        if (reports) {//if data return data
            callback(null, reports);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = reports;

