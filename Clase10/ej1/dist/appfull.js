var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Destinos;
(function (Destinos) {
    Destinos[Destinos["marte"] = 0] = "marte";
    Destinos[Destinos["luna"] = 1] = "luna";
    Destinos[Destinos["jupiter"] = 2] = "jupiter";
})(Destinos || (Destinos = {}));
var Cohete = /** @class */ (function () {
    function Cohete(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.destino = Destinos.luna;
    }
    Cohete.prototype.despegar = function () {
        console.log("lanzando el cohete " + this.nombre + " con destino a " + this.destino);
    };
    return Cohete;
}());
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
var name = /** @class */ (function (_super) {
    __extends(name, _super);
    function name(director, creacion, nombre) {
        var _this = _super.call(this, director, creacion) || this;
        _this.nombre;
        return _this;
    }
    return name;
}(Nasa));
/*
npm config set proxy ksajdlk
npm install -g typescript
tss -init agrega tsconfig.json
tsc -w *nombre archivo*

edito tsconfig.json y descomento outDir seteando ./dist/
npm install -s @types/jquery

*/
var laNasa = new Nasa("john doe", 1945);
var unCuete = new Cohete("Apollo 11", 123456);
laNasa.agregarCohete(unCuete);
laNasa.cohetes[0].despegar();
