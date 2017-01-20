/**
 * Created by halla on 1/16/2017.
 */
var EventList = require('../services/EventList');

/**
 * Event List endpoint
 * @param event
 * @param context
 * @param callback
 */
module.exports.eventList = (event, context, callback) => {//handler

    EventList.getEventList(
        (error, result) => { // [function: param1([param1, param2])]
            if (error) {
                callback(null,{statusCode: 402, body: error});
            }
            else {
                callback(null,{statusCode: 200, body: result});
            }
        });
};

