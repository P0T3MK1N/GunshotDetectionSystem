/**
 * Created by halla on 1/16/2017.
 */

class events {
    /**
     * Get Current Incidents
     * @param callback
     */
    static getEvents(callback) {
        var events = require('../mock_data/Events.json');//get data
        if (events) {//if data return data
            callback(null, events);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }
}

module.exports = events;