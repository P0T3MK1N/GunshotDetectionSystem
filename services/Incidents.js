/**
 * Created by halla on 1/16/2017.
 */

class incidents {
    /**
     * Get Current Incidents
     * @param callback
     */
    static getCurrentIncidents(callback) {
        var incidents = require('../mock_data/Incidents.json');//get data
        if (incidents) {//if data return data
            callback(null, incidents);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = incidents;

class incident {
    /**
     * Get Incident
     * @param callback
     */
    static getIncident(callback) {
        var incident = require('../mock_data/Incident.json');//get data
        if (incident) {//if data return data
            callback(null, incident);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = incident;

