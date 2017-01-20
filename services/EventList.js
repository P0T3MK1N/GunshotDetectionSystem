/**
 * Created by halla on 1/16/2017.
 */

class eventlist {
    /**
     * Get Event List
     * @param callback
     */
    static getEventList(callback) {
        var eventlist = require('../mock_data/EventList.json');//get data
        if (eventlist) {//if data return data
            callback(null, eventlist);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = eventlist;

