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

