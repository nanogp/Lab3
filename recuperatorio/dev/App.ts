var claseDato = Heroes.SuperHeroe;

class App {
    private constructor() {
        //no puede ser construida
    }

    //------------------------------------------------------------------- MANEJADOR DE EVENTOS
    public static asignarManejadores() {
        App.inicializar();
    }

    public static inicializar() {
        localStorage.seq = 1000;

        try {
            if (localStorage.listado) { }
        } catch (error) {
            localStorage.listado = "[]";
        }
        if (localStorage.listado) {
            let listado = JSON.parse(localStorage.listado);
            listado.forEach((element: any) => {
                if (element.id >= localStorage.seq) {
                    localStorage.seq = element.id + 1;
                }
            });
        }
        App.traerListado();
    }

    public static volverInicio() {
        $('#formulario').empty();
        $('#filtros').empty();
        $('#tabla').empty();
        App.traerListado();
    }

    //------------------------------------------------------------------- LISTAR
    public static traerListado() {
        $('#tabla').empty();
        var listado = JSON.parse(localStorage.listado);
        if (listado.length != 0) {
            $('#tabla').html(crearTabla(listado));
        }
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

    //------------------------------------------------------------------- OTROS

    // public static ponerSpinner() {
    //     var spinner = document.createElement("img");
    //     spinner.setAttribute("src", "imagenes/kartkid.gif");
    //     spinner.setAttribute('class', 'spinner');
    //     spinner.setAttribute("alt", "SPINNER");
    //     return spinner;
    // }

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

        if (nombre === "" || !nombre.match("^[a-zA-Z]*$")) {
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

        if (poder === "" || !poder.match("^[a-zA-Z]*$")) {
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

        if (edad < 1 || edad > 500) {
            $("#edadGroup").addClass("has-error has-feedback");
            alert('Ingrese una edad valida');
            $("#helpEdad").show();
            return false;
        }
        else {
            $("#edadGroup").removeClass("has-error has-feedback");
            $("#helpEdad").hide();
            return true;
        }
    }

}

$('document').ready(App.asignarManejadores);