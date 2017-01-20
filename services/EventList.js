/**
 * Created by halla on 1/16/2017.
 */

class eventlist {
    /**
     * Get Event List
     * @param callback
     */
    static getEventList(callback) {
        var eventList = require('../mock_data/Incidents.json');//get data
        if (eventList) {//if data return data
            callback(null, eventList);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = eventList;

