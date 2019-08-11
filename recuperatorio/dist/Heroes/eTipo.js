"use strict";
var Heroes;
(function (Heroes) {
    var eTipo;
    (function (eTipo) {
        eTipo[eTipo["Avenger"] = 0] = "Avenger";
        eTipo[eTipo["Xmen"] = 1] = "Xmen";
    })(eTipo = Heroes.eTipo || (Heroes.eTipo = {}));
})(Heroes || (Heroes = {}));
