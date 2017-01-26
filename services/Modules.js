/**
 * Created by halla on 1/16/2017.
 */

'use strict';

class Module {
    /**
     * Get ModuleStatus
     * @param callback
     */
    static reportModuleStatus(callback,moduleId) { //not pointing properly
        if(moduleId){
            var moduleStatus = require('../mock_data/ModuleStatus_ID_1.json');//get data
            if (moduleStatus) {//if data return data
                callback(null, moduleStatus);
            } else {//else return error
                callback({error: 'Could not retrieve data'}, null);
            }
        }
        else {
            var moduleStatus = require('../mock_data/ModuleStatus.json');//get data
            if (moduleStatus) {//if data return data
                callback(null, moduleStatus);
            } else {//else return error
                callback({error: 'Could not retrieve data'}, null);
            }
        }
    }

    /**
     * Post Module Error
     * @param callback
     */
    static reportModuleError(callback) {
        var moduleError = require('../mock_data/ModuleError.json');//get data
        if (moduleError) {//if data return data
            callback(null, moduleError);
        } else {//else return error
            callback({error: 'Could not retrieve data'}, null);
        }
    }
}


module.exports = Module;