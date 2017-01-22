/**
 * Created by halla on 1/16/2017.
 */

class moduleUpdate {
    /**
     * Get ModuleUpdate
     * @param callback
     */
    static getModuleUpdate(callback) {
        var moduleUpdate = require('../mock_data/ModuleUpdate.json');//get data
        if (moduleUpdate) {//if data return data
            callback(null, moduleUpdate);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }
}
module.exports = moduleUpdate;

class moduleStatus {
    /**
     * Get ModuleStatus
     * @param callback
     */
    static getModuleStatus(callback) {
        var moduleStatus = require('../mock_data/ModuleError.json');//get data
        if (moduleStatus) {//if data return data
            callback(null, moduleStatus);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }
}
module.exports = moduleStatus;

class moduleError {
    /**
     * Get ModuleStatus
     * @param callback
     */
    static getModuleError(callback) {
        var moduleError = require('../mock_data/ModuleError.json');//get data
        if (moduleError) {//if data return data
            callback(null, moduleError);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }
}
module.exports = moduleError;
