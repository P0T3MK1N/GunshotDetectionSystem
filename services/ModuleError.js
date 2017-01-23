/**
 * Created by halla on 1/16/2017.
 */

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