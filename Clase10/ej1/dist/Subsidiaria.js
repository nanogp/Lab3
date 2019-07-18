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
var Espacial;
(function (Espacial) {
    var Subsidiaria = /** @class */ (function (_super) {
        __extends(Subsidiaria, _super);
        function Subsidiaria(director, creacion, nombre) {
            var _this = _super.call(this, director, creacion) || this;
            _this.nombre;
            return _this;
        }
        return Subsidiaria;
    }(Espacial.Nasa));
    Espacial.Subsidiaria = Subsidiaria;
})(Espacial || (Espacial = {}));
