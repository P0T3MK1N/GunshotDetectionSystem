'use strict';

/**
 * Created by halla on 1/16/2017.
 */
var Report = require('../services/Report.js');

/**
 * Report endpoint
 * @param event
 * @param context
 * @param callback
 */
module.exports.report = (event, context, callback) => {//handler

    Report.getReport(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};

