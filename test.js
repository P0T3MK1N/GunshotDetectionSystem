/**
 * Created by halla on 1/20/2017.

function api() {//incidents()
    service(
        callback,//param1
        function (x, y, z) { //param2
            console.log(x + "b" + (y + z));
        }
    );
}

function service(value, value2) {//service incidents
    value("1111");
    var yyyyy = "a";
    value2(yyyyy, 2, 4);
}

function callback(val1) {//response handler
    console.log(val1);
}
function callback2(xxxxxxxxxx) {//response handler
    console.log(xxxxxxxxxx + "!!!!!!");
}

api();
 */
//1111
// ab24


var api = (var1,callback) => {//handler
    console.log(var1);
    callback();
}

api(
    2,
    function () {
        console.log("callback");
    }
);