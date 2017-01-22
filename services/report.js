/**
 * Created by halla on 1/16/2017.
 */

class report {
    /**
     * Get Current Incidents
     * @param callback
     */
    static getReport(callback) {
        var report = require('../mock_data/Report.json');//get data
        if (report) {//if data return data
            callback(null, report);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = report;

