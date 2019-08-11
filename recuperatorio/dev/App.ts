var claseDato = Heroes.SuperHeroe;

class App {
    private constructor() {
        //no puede ser construida   
    }

    //------------------------------------------------------------------- MANEJADOR DE EVENTOS
    public asignarManejadores() {
        App.prototype.inicializar();
    }

    public inicializar() {
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
        App.prototype.traerListado();
    }

    public volverInicio() {
        $('#formulario').empty();
        $('#filtros').empty();
        $('#tabla').empty();
        App.prototype.traerListado();
    }

    //------------------------------------------------------------------- LISTAR
    public traerListado() {
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
    public alta() {
        var dato = App.prototype.newDato(false);
        var ls = String(localStorage.listado);
        var listado = JSON.parse(ls);
        listado.push(dato);
        localStorage.listado = JSON.stringify(listado);
        App.prototype.volverInicio();
    }

    public newDato(tieneID: boolean) {
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

    public baja(param: any) {
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
        App.prototype.volverInicio();
    }


    //------------------------------------------------------------------- MODIFICACION

    public modificar(param: any) {
        $('#tabla').empty();
        var listado = JSON.parse(localStorage.listado);
        var modificoOk = false;

        for (let i = 0; i < listado.length; i++) {
            let dato = listado[i];
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
    }

    // //------------------------------------------------------------------- OTROS

    // public ponerSpinner() {
    //     var spinner = document.createElement("img");
    //     spinner.setAttribute("src", "imagenes/kartkid.gif");
    //     spinner.setAttribute('class', 'spinner');
    //     spinner.setAttribute("alt", "SPINNER");
    //     return spinner;
    // }
}

$('document').ready(App.prototype.asignarManejadores);