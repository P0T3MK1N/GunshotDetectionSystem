/**
 * Created by halla on 1/16/2017.
 */

'use strict';

class Serverless {
    /**
     * Get ModuleStatus
     * @param callback
     */
    static failResponse(callback, errorCode,errorMessage,errorStack) {
        callback("["+errorCode+"] : "+errorMessage+" : "+errorStack);
    }
}

module.exports = Serverless;