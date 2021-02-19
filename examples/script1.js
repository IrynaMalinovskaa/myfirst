'use strict';
var mam;
function lol() {
    var str = "";
    for(var i = 34; i < 1000000; i++){
        str += Math.round(Math.random());
        alert(str);
    }
}
lol();
