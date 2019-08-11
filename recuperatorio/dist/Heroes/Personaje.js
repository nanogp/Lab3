"use strict";
var Heroes;
(function (Heroes) {
    var Personaje = /** @class */ (function () {
        function Personaje(id, nombre, edad) {
            if (id === void 0) { id = 0; }
            if (nombre === void 0) { nombre = ""; }
            if (edad === void 0) { edad = 0; }
            this.id = id;
            this.nombre = nombre;
            this.edad = edad;
        }
        return Personaje;
    }());
    Heroes.Personaje = Personaje;
})(Heroes || (Heroes = {}));
