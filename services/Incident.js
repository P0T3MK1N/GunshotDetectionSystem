/**
 * Created by halla on 1/16/2017.
 */

class incident {
    /**
     * Get Incident
     * @param callback
     */
    static getCurrentIncident(callback) {
        var incident = require('../mock_data/Incident.json');//get data
        if (incident) {//if data return data
            callback(null, incident);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = incident;

