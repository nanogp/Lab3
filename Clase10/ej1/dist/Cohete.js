"use strict";
var Espacial;
(function (Espacial) {
    var Cohete = /** @class */ (function () {
        function Cohete(nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
            this.destino = Espacial.Destinos.luna;
        }
        Cohete.prototype.despegar = function () {
            console.log("lanzando el cohete " + this.nombre + " con destino a " + Espacial.Destinos[this.destino]);
        };
        return Cohete;
    }());
    Espacial.Cohete = Cohete;
})(Espacial || (Espacial = {}));
