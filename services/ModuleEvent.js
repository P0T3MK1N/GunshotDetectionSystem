/**
 * Created by halla on 1/16/2017.
 */

class moduleEvent {
    /**
     * Get Current Incidents
     * @param callback
     */
    static postModuleEvent(callback) {
        var moduleEvent = require('../mock_data/ModuleEvent.json');//get data
        if (moduleEvent) {//if data return data
            callback(null, moduleEvent);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }
}
module.exports = moduleEvent;