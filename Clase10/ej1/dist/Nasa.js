"use strict";
var Espacial;
(function (Espacial) {
    var Nasa = /** @class */ (function () {
        function Nasa(director, creacion) {
            this.director = director;
            this.creacion = creacion;
            this.cohetes = [];
        }
        Nasa.prototype.agregarCohete = function (unCohete) {
            this.cohetes.push(unCohete);
        };
        Nasa.prototype.lanzarCohete = function (unCohete) {
            unCohete.despegar();
        };
        return Nasa;
    }());
    Espacial.Nasa = Nasa;
})(Espacial || (Espacial = {}));
