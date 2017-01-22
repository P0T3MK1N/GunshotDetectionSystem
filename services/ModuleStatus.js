/**
 * Created by halla on 1/16/2017.
 */

class moduleStatus {
    /**
     * Get ModuleStatus
     * @param callback
     */
    static getModuleStatus(callback) {
        var moduleStatus = require('../mock_data/ModuleStatus.json');//get data
        if (moduleStatus) {//if data return data
            callback(null, moduleStatus);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }

}

module.exports = moduleStatus;

