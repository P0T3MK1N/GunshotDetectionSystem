/**
 * Created by halla on 1/16/2017.
 */

class incidentclose {
    /**
     * Get Current Incidents
     * @param callback
     */
    static getIncidentClose(callback) {
        var incidentclose = require('../mock_data/IncidentClose.json');//get data
        if (incidentclose) {//if data return data
            callback(null, incidentclose);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }
}
module.exports = incidentclose;