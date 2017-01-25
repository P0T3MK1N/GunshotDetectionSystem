'use strict';

/**
 * Created by halla on 1/16/2017.
 */

function Incidents () {
    /**
     * Get Current Incidents
     * @param callback
     */
    Incidents.prototype.getCurrentIncidents = function(callback) {
        var incidents = require('../mock_data/Incidents.json');//get data
        if (incidents) {//if data return data
            callback(null, incidents);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = new Incidents();