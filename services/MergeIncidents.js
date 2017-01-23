/**
 * Created by halla on 1/16/2017.
 */

class mergeIncidents {
    /**
     * Get Current Incidents
     * @param callback
     */
    static putMergeIncidents(callback) {
        var mergeIncidents = require('../mock_data/MergeIncidents.json');//get data
        if (mergeIncidents) {//if data return data
            callback(null, mergeIncidents);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }
}
module.exports = mergeIncidents;