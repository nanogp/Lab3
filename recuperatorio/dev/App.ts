var claseDato = Heroes.SuperHeroe;

class App {
    private constructor() {
        //no puede ser construida
    }

    public static estadisticas = {};

    //------------------------------------------------------------------- MANEJADOR DE EVENTOS
    public static asignarManejadores() {
        App.inicializar();
    }

    public static inicializar() {
        localStorage.seq = 1000;
        // localStorage.listado = '[]';
        try {

            let listado = JSON.parse(localStorage.listado);
            listado.forEach((element: any) => {
                if (element.id >= localStorage.seq) {
                    localStorage.seq = element.id + 1;
                }
            });

        } catch (error) {
            localStorage.listado = "[]";
        }

        App.volverInicio();
    }

    public static volverInicio() {
        $('#formulario').empty();
        $('#filtros').empty();
        $('#tabla').empty();
        App.traerListado();
        console.log(App.estadisticas);

    }

    //------------------------------------------------------------------- LISTAR
    public static traerListado() {
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
    }

    //------------------------------------------------------------------- ALTA
    public static alta() {
        var dato = App.newDato(false);
        if (App.validar() == true) {
            var ls = String(localStorage.listado);
            var listado = JSON.parse(ls);
            listado.push(dato);
            localStorage.listado = JSON.stringify(listado);
            App.volverInicio();
        }
    }

    public static newDato(tieneID: boolean) {
        var dato = new claseDato();

        if (tieneID) {
            dato.id = Number($('#id').val());
        } else {
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
    }

    //------------------------------------------------------------------- BAJA

    public static baja(param: any) {
        var listado = JSON.parse(localStorage.listado);
        var borroOk = false;

        for (let i = 0; i < listado.length; i++) {
            let dato = listado[i];
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
    }


    //------------------------------------------------------------------- MODIFICACION

    public static modificar(param: any) {
        $('#tabla').empty();
        if (App.validar() == true) {
            var listado = JSON.parse(localStorage.listado);
            var modificoOk = false;

            for (let i = 0; i < listado.length; i++) {
                let dato = listado[i];
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
    }

    //------------------------------------------------------------------- VALIDACIONES
    public static validar() {
        let retorno = false;
        if (App.nombreValido()) {
            if (App.edadValida()) {
                if (App.poderValido()) {
                    retorno = true;
                }
            }
        }
        return retorno;
    }

    public static nombreValido() {
        let nombre: string = String($("#nombre").val());

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
    }

    public static poderValido() {
        let poder: string = String($("#poderPrincipal").val());

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
    }

    public static edadValida() {
        let edad: number = Number($("#edad").val());

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
    }

    //------------------------------------------------------------------- ESTADISTICAS
    public static calcularEstadisticas(listado): void {
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

        claseDato.getTipo().forEach(element => {

            try {
                App.estadisticas['edad' + element] =
                    listado.filter((dato, i, array) => {
                        return element == claseDato.getTipoSelected(dato.tipo);
                    }).map(function (dato) {
                        return dato.edad;
                    }).reduce(function (total, edad, i, array) {
                        return total += edad;
                    }, 0);
            } catch (error) {
                App.estadisticas['edad' + element] = 0;
            }

            try {
                App.estadisticas['cantidad' + element] =
                    listado.filter((dato, i, array) => {
                        return element == claseDato.getTipoSelected(dato.tipo);
                    }).map((dato) => {
                        return 1;
                    }).reduce((total) => {
                        return total += 1;
                    });
            } catch (error) {
                App.estadisticas['cantidad' + element] = 0;
            }

            App.estadisticas['porcentaje' + element] =
                (App.estadisticas['cantidad' + element] / App.estadisticas['cantidadTotal'] * 100).toFixed(2);

            App.estadisticas['promedioEdad' + element] =
                Math.floor(App.estadisticas['edad' + element] / App.estadisticas['cantidad' + element]);
        });

        $("#Promedioedad").val(App.estadisticas['promedioEdadTotal']);
        $("#PorcentajeAvenger").val(App.estadisticas['porcentajeAvenger'] + '%');
        $("#PorcentajeXmen").val(App.estadisticas['porcentajeXmen'] + '%');
    }

    //------------------------------------------------------------------- OTROS

    // public static ponerSpinner() {
    //     var spinner = document.createElement("img");
    //     spinner.setAttribute("src", "imagenes/kartkid.gif");
    //     spinner.setAttribute('class', 'spinner');
    //     spinner.setAttribute("alt", "SPINNER");
    //     return spinner;
    // }

}

$('document').ready(App.asignarManejadores);