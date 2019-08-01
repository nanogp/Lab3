"use strict";
var Entidades;
(function (Entidades) {
    var Animal = /** @class */ (function () {
        function Animal(id, edad, patas, tipo) {
            this.id = id;
            this.edad = edad;
            this.patas = patas;
            this.tipo = tipo;
        }
        return Animal;
    }());
    Entidades.Animal = Animal;
})(Entidades || (Entidades = {}));
