"use strict";
var claseDato = Heroes.SuperHeroe;
var App = /** @class */ (function () {
    function App() {
        //no puede ser construida
    }
    //------------------------------------------------------------------- MANEJADOR DE EVENTOS
    App.asignarManejadores = function () {
        App.inicializar();
    };
    App.inicializar = function () {
        localStorage.seq = 1000;
        // localStorage.listado = '[]';
        try {
            var listado = JSON.parse(localStorage.listado);
            listado.forEach(function (element) {
                if (element.id >= localStorage.seq) {
                    localStorage.seq = element.id + 1;
                }
            });
        }
        catch (error) {
            localStorage.listado = "[]";
        }
        App.volverInicio();
    };
    App.volverInicio = function () {
        $('#formulario').empty();
        $('#filtros').empty();
        $('#tabla').empty();
        App.traerListado();
    };
    //------------------------------------------------------------------- LISTAR
    App.traerListado = function () {
        $('#tabla').empty();
        var listado = JSON.parse(localStorage.listado);
        if (listado.length != 0) {
            $('#filtros').append(filtros());
            $('#filtros').append(document.createElement('hr'));
            $('#tabla').append(crearTabla(listado));
        }
        $('#tabla').append(document.createElement('hr'));
        var btnAlta = newButton('ALTA');
        btnAlta.addEventListener('click', cargarAlta, false);
        $('#tabla').append(btnAlta);
    };
    //------------------------------------------------------------------- ALTA
    App.alta = function () {
        var dato = App.newDato(false);
        if (App.validar() == true) {
            var ls = String(localStorage.listado);
            var listado = JSON.parse(ls);
            listado.push(dato);
            localStorage.listado = JSON.stringify(listado);
            App.volverInicio();
        }
    };
    App.newDato = function (tieneID) {
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
        dato.color = String($('#color').val());
        // dato.imagen = String($('#imagen').val());
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
    App.baja = function (param) {
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
        App.volverInicio();
    };
    //------------------------------------------------------------------- MODIFICACION
    App.modificar = function (param) {
        $('#tabla').empty();
        if (App.validar() == true) {
            var listado = JSON.parse(localStorage.listado);
            var modificoOk = false;
            for (var i = 0; i < listado.length; i++) {
                var dato = listado[i];
                if (dato.id == param.id) {
                    listado[i] = App.newDato(true);
                    localStorage.listado = JSON.stringify(listado);
                    modificoOk = true;
                    break;
                }
            }
            if (!modificoOk) {
                alert('no se encontro el ID');
            }
            App.volverInicio();
        }
    };
    //------------------------------------------------------------------- VALIDACIONES
    App.validar = function () {
        var retorno = false;
        if (App.nombreValido()) {
            if (App.edadValida()) {
                if (App.poderValido()) {
                    retorno = true;
                }
            }
        }
        return retorno;
    };
    App.nombreValido = function () {
        var nombre = String($("#nombre").val());
        if (nombre === "" || !nombre.match("^[a-zA-Z ]*$")) {
            $("#nombreGroup").addClass("has-error has-feedback");
            alert('Ingrese un nombre valido');
            $("#helpNombre").show();
            return false;
        }
        else {
            $("#nombreGroup").removeClass("has-error has-feedback");
            $("#helpNombre").hide();
            return true;
        }
    };
    App.poderValido = function () {
        var poder = String($("#poderPrincipal").val());
        if (poder === "" || !poder.match("^[a-zA-Z ]*$")) {
            $("#poderGroup").addClass("has-error has-feedback");
            alert('Ingrese un poder valido');
            $("#helpPoder").show();
            return false;
        }
        else {
            $("#poderGroup").removeClass("has-error has-feedback");
            $("#helpPoder").hide();
            return true;
        }
    };
    App.edadValida = function () {
        var edad = Number($("#edad").val());
        if (!(edad >= 1 && edad < 1000)) {
            $("#edadGroup").addClass("has-error has-feedback");
            alert('Ingrese una edad valida entre 1 y 1000 años (viven mucho los superheroes)');
            $("#helpEdad").show();
            return false;
        }
        else {
            $("#edadGroup").removeClass("has-error has-feedback");
            $("#helpEdad").hide();
            return true;
        }
    };
    //------------------------------------------------------------------- ESTADISTICAS
    App.calcularEstadisticas = function (listado) {
        App.estadisticas['edadTotal'] =
            listado.map(function (dato) {
                return dato.edad;
            }).reduce(function (total, edad, i, array) {
                return total += edad;
            }, 0);
        App.estadisticas['cantidadTotal'] =
            listado.map(function (dato) {
                return 1;
            }).reduce(function (total, dato) {
                return total += dato;
            });
        App.estadisticas['promedioEdadTotal'] =
            Math.floor(App.estadisticas['edadTotal'] / App.estadisticas['cantidadTotal']);
        claseDato.getTipo().forEach(function (element) {
            try {
                App.estadisticas['edad' + element] =
                    listado.filter(function (dato, i, array) {
                        return element == claseDato.getTipoSelected(dato.tipo);
                    }).map(function (dato) {
                        return dato.edad;
                    }).reduce(function (total, edad, i, array) {
                        return total += edad;
                    }, 0);
            }
            catch (error) {
                App.estadisticas['edad' + element] = 0;
            }
            try {
                App.estadisticas['cantidad' + element] =
                    listado.filter(function (dato, i, array) {
                        return element == claseDato.getTipoSelected(dato.tipo);
                    }).map(function (dato) {
                        return 1;
                    }).reduce(function (total) {
                        return total += 1;
                    });
            }
            catch (error) {
                App.estadisticas['cantidad' + element] = 0;
            }
            App.estadisticas['promedioEdad' + element] =
                Math.floor(App.estadisticas['edad' + element] / App.estadisticas['cantidad' + element]);
        });
        $("#Promedioedad").val(App.estadisticas['promedioEdadTotal']);
    };
    App.estadisticas = {};
    return App;
}());
$('document').ready(App.asignarManejadores);
