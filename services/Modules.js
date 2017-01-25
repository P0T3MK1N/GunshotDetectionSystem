/**
 * Created by halla on 1/16/2017.
 */

'use strict';

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

class moduleError {
    /**
     * Post Module Error
     * @param callback
     */
    static postModuleError(callback) {
        var moduleError = require('../mock_data/ModuleError.json');//get data
        if (moduleError) {//if data return data
            callback(null, moduleError);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }
}
module.exports = moduleError;