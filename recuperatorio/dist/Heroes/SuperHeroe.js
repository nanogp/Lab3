"use strict";
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
var Heroes;
(function (Heroes) {
    var SuperHeroe = /** @class */ (function (_super) {
        __extends(SuperHeroe, _super);
        function SuperHeroe(id, nombre, edad, alias, poderPrincipal, tipo, color) {
            if (id === void 0) { id = 0; }
            if (nombre === void 0) { nombre = ""; }
            if (edad === void 0) { edad = 0; }
            if (alias === void 0) { alias = ""; }
            if (poderPrincipal === void 0) { poderPrincipal = ""; }
            if (tipo === void 0) { tipo = Heroes.eTipo.Avenger; }
            if (color === void 0) { color = ""; }
            var _this = _super.call(this, id, nombre, edad) || this;
            _this.alias = alias;
            _this.poderPrincipal = poderPrincipal;
            _this.tipo = tipo;
            _this.color = color;
            return _this;
        }
        SuperHeroe.tipoDato = function (key) {
            var tipo;
            switch (key) {
                case 'genero':
                    tipo = 'RadioButton';
                    break;
                case 'traidor':
                    tipo = 'CheckBox';
                    break;
                case 'caracteristicas':
                    tipo = 'ArrayBooleano';
                    break;
                case 'tipo':
                    tipo = 'Combo';
                    break;
                case 'color':
                    tipo = 'Color';
                    break;
                case 'nombre':
                    tipo = key;
                    break;
                case 'edad':
                    tipo = key;
                    break;
                case 'poderPrincipal':
                    tipo = key;
                    break;
                default:
                    tipo = 'input';
                    break;
            }
            return tipo;
        };
        SuperHeroe.getNombreAtributoCombo = function () {
            return 'tipo';
        };
        SuperHeroe.getRadioButtons = function () {
            return ['masculino', 'femenino'];
        };
        SuperHeroe.getCaracteristicas = function () {
            return ['Guerrero', 'Manipulador', 'Diplomatico', 'Lider', 'Vengativo', 'Ambicioso'];
        };
        SuperHeroe.getArrayBooleano = function () {
            return [false, false, false, false, false, false];
        };
        SuperHeroe.getTipo = function () {
            return Object.keys(Heroes.eTipo).filter(function (e) { return isNaN(e); });
        };
        SuperHeroe.getTipoSelected = function (tipo) {
            return Heroes.eTipo[tipo];
        };
        SuperHeroe.sortById = function (prox, actual) {
            return (prox.id - actual.id);
        };
        return SuperHeroe;
    }(Heroes.Personaje));
    Heroes.SuperHeroe = SuperHeroe;
})(Heroes || (Heroes = {}));
