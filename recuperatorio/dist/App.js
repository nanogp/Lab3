"use strict";
var claseDato = Heroes.SuperHeroe;
var App = /** @class */ (function () {
    function App() {
        //no puede ser construida   
    }
    //------------------------------------------------------------------- MANEJADOR DE EVENTOS
    App.prototype.asignarManejadores = function () {
        App.prototype.inicializar();
    };
    App.prototype.inicializar = function () {
        localStorage.seq = 1000;
        try {
            if (localStorage.listado) { }
        }
        catch (error) {
            localStorage.listado = "[]";
        }
        if (localStorage.listado) {
            var listado = JSON.parse(localStorage.listado);
            listado.forEach(function (element) {
                if (element.id >= localStorage.seq) {
                    localStorage.seq = element.id + 1;
                }
            });
        }
        App.prototype.traerListado();
    };
    App.prototype.volverInicio = function () {
        $('#formulario').empty();
        $('#filtros').empty();
        $('#tabla').empty();
        App.prototype.traerListado();
    };
    //------------------------------------------------------------------- LISTAR
    App.prototype.traerListado = function () {
        $('#tabla').empty();
        var listado = JSON.parse(localStorage.listado);
        if (listado.length != 0) {
            $('#tabla').html(crearTabla(listado));
        }
        var btnAlta = newButton('ALTA');
        btnAlta.addEventListener('click', cargarAlta, false);
        $('#tabla').append(btnAlta);
    };
    //------------------------------------------------------------------- ALTA
    App.prototype.alta = function () {
        var dato = App.prototype.newDato(false);
        var ls = String(localStorage.listado);
        var listado = JSON.parse(ls);
        listado.push(dato);
        localStorage.listado = JSON.stringify(listado);
        App.prototype.volverInicio();
    };
    App.prototype.newDato = function (tieneID) {
        var dato = new claseDato();
        if (tieneID) {
            dato.id = Number($('#id').val());
        }
        else {
            dato.id = localStorage.seq++;
        }
        dato.nombre = String($('#nombre').val());
        dato.edad = Number($('#edad').val());
        dato.alias = String($('#alias').val());
        dato.poderPrincipal = String($('#poderPrincipal').val());
        dato.tipo = $('#tipo').prop('selectedIndex');
        dato.color = $('#color').val();
        // dato.color = String($('#color').val());
        // dato.getRadioButtons().forEach(genero => {
        //     if ($('#' + genero).is(":checked")) {
        //         console.log(genero);
        //         console.log($('#' + genero).is(":checked"));
        //         dato.genero = genero;
        //     }
        // });
        // dato.email = String($('#email').val());
        // dato.traidor = Boolean($('#traidor').is(":checked"));
        // dato.caracteristicas[0] = Boolean($('#Guerrero').is(":checked"));
        // dato.caracteristicas[1] = Boolean($('#Manipulador').is(":checked"));
        // dato.caracteristicas[2] = Boolean($('#Diplomatico').is(":checked"));
        // dato.caracteristicas[3] = Boolean($('#Lider').is(":checked"));
        // dato.caracteristicas[4] = Boolean($('#Vengativo').is(":checked"));
        // dato.caracteristicas[5] = Boolean($('#Ambicioso').is(":checked"));
        return dato;
    };
    //------------------------------------------------------------------- BAJA
    App.prototype.baja = function (param) {
        var listado = JSON.parse(localStorage.listado);
        var borroOk = false;
        for (var i = 0; i < listado.length; i++) {
            var dato = listado[i];
            if (dato.id == param.id) {
                listado.splice(i, 1);
                localStorage.listado = JSON.stringify(listado);
                borroOk = true;
                break;
            }
        }
        if (!borroOk) {
            alert('no se encontro el ID');
        }
        App.prototype.volverInicio();
    };
    //------------------------------------------------------------------- MODIFICACION
    App.prototype.modificar = function (param) {
        $('#tabla').empty();
        var listado = JSON.parse(localStorage.listado);
        var modificoOk = false;
        for (var i = 0; i < listado.length; i++) {
            var dato = listado[i];
            if (dato.id == param.id) {
                listado[i] = App.prototype.newDato(true);
                localStorage.listado = JSON.stringify(listado);
                modificoOk = true;
                break;
            }
        }
        if (!modificoOk) {
            alert('no se encontro el ID');
        }
        App.prototype.volverInicio();
    };
    return App;
}());
$('document').ready(App.prototype.asignarManejadores);
