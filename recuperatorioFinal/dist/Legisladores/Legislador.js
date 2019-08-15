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
var Legisladores;
(function (Legisladores) {
    var Legislador = /** @class */ (function (_super) {
        __extends(Legislador, _super);
        function Legislador(id, nombre, edad, tipo, color, imagen) {
            if (id === void 0) { id = 0; }
            if (nombre === void 0) { nombre = ""; }
            if (edad === void 0) { edad = 0; }
            if (tipo === void 0) { tipo = Legisladores.eTipo.Diputado; }
            if (color === void 0) { color = ""; }
            if (imagen === void 0) { imagen = ""; }
            var _this = _super.call(this, id, nombre, edad, color, imagen) || this;
            _this.tipo = tipo;
            return _this;
        }
        Legislador.tipoDato = function (key) {
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
                case 'imagen':
                    tipo = key;
                    break;
                default:
                    tipo = 'input';
                    break;
            }
            return tipo;
        };
        Legislador.getNombreAtributoCombo = function () {
            return 'tipo';
        };
        Legislador.getRadioButtons = function () {
            return ['masculino', 'femenino'];
        };
        Legislador.getCaracteristicas = function () {
            return ['Guerrero', 'Manipulador', 'Diplomatico', 'Lider', 'Vengativo', 'Ambicioso'];
        };
        Legislador.getArrayBooleano = function () {
            return [false, false, false, false, false, false];
        };
        Legislador.getTipo = function () {
            return Object.keys(Legisladores.eTipo).filter(function (e) { return isNaN(e); });
        };
        Legislador.getTipoNumbers = function () {
            return Object.keys(Legisladores.eTipo).filter(function (e) { return !isNaN(e); });
        };
        Legislador.getTipoSelected = function (tipo) {
            return Legisladores.eTipo[tipo];
        };
        Legislador.sortById = function (prox, actual) {
            return (prox.id - actual.id);
        };
        return Legislador;
    }(Legisladores.Persona));
    Legisladores.Legislador = Legislador;
})(Legisladores || (Legisladores = {}));
