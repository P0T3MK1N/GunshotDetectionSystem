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