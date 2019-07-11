//------------------------------------------------------------------- TABLA
function crearTabla(personas) {
    var div = document.getElementById('info');
    div.innerHTML = ' ';
    var header = document.createElement('tr');
    var tabla = document.createElement('table');
    tabla.setAttribute('id', 'tablaListado');

    for (const key in personas[0]) {
        var th = document.createElement('th');
        var texto = newTextNode(key.toUpperCase());
        th.appendChild(texto);
        header.appendChild(th);
    }

    tabla.appendChild(header);

    for (var fila in personas) {
        var tr = document.createElement('tr');
        var parametros = { personaElegida: personas[fila] }

        tr.addEventListener('click', cargarSeleccion.bind(parametros), false);

        for (var columna in personas[fila]) {
            console.log('columna:' + columna);
            console.log('personas[fila]:' + personas[fila]);

            var td = document.createElement('td');
            if (columna == 'caracteristicas') {
                var aux = "";

                if (personas[fila][columna][0]) { aux += getCaracteristicas()[0] + ";" };
                if (personas[fila][columna][1]) { aux += getCaracteristicas()[1] + ";" };
                if (personas[fila][columna][2]) { aux += getCaracteristicas()[2] + ";" };
                if (personas[fila][columna][3]) { aux += getCaracteristicas()[3] + ";" };
                if (personas[fila][columna][4]) { aux += getCaracteristicas()[4] + ";" };
                if (personas[fila][columna][5]) { aux += getCaracteristicas()[5] + ";" };
                aux = aux.substr(0, aux.length - 1);
                var texto = newTextNode(aux);

            }
            else {
                var texto = newTextNode(personas[fila][columna]);
            }
            td.appendChild(texto);
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }

    div.appendChild(tabla);

    var btnAlta = newButton('ALTA');
    btnAlta.addEventListener('click', cargarAlta, false);
    div.appendChild(btnAlta);
}

//------------------------------------------------------------------- FORMULARIO
function crearFormulario(key, valor) {
    var div = document.createElement('div');
    div.setAttribute('class', 'formulario');

    switch (tipoDato(key)) {
        case 'RadioButton':
            var tr = document.createElement('tr');
            getRadioButtons().forEach(nombre => {
                if (nombre == getRadioButtons()[0]) {
                    tr.appendChild(newRadioButton('casa', nombre, true, valor));
                } else {
                    tr.append(newRadioButton('casa', nombre, false, valor));
                }
            });
            div.appendChild(tr);
            break;
        case 'CheckBox':
            var tr = document.createElement('tr');
            tr.appendChild(newCheckBox('traidor', valor));
            div.appendChild(tr);
            break;
        case 'ArrayBooleano':

            console.log('valor');
            console.log(valor);

            var tr = document.createElement('tr');
            tr.appendChild(newArrayBooleano(valor));
            div.appendChild(tr);
            break;
        case 'Combo':
            var tr = document.createElement('tr');
            var combo = newCombo('temporada', getTemporadas(), valor);
            tr.appendChild(combo);
            div.appendChild(tr);
            break;
        default:
            if (key != 'id') {
                div.appendChild(newTextInput(key, valor));
            } else if (valor) {
                div.appendChild(newTextInput(key, valor));
            }
            break;
    }
    return div;
}

//------------------------------------------------------------------- FORM BLANCO
function cargarAlta() {
    var div = document.getElementById('info');
    div.innerHTML = '';
    var formulario = document.createElement('form');
    formulario.className = 'frmAlta';
    var tabla = document.createElement('table');
    tabla.setAttribute('class', 'alta');

    for (var key in newDatoGOT()) {
        var tr = document.createElement('tr');
        tr.appendChild(crearFormulario(key));
        tabla.appendChild(tr);
    }

    tr = document.createElement('tr');

    var btnAceptar = newButton('ACEPTAR');
    btnAceptar.addEventListener('click', altaPersonaje, false);
    tr.appendChild(btnAceptar);

    var btnCancelar = newButton('CANCELAR');
    btnCancelar.addEventListener('click', volverInicio, false);
    tr.appendChild(btnCancelar);

    tabla.appendChild(tr);

    tabla.appendChild(newBr());
    formulario.appendChild(tabla);
    div.appendChild(formulario)
}


//------------------------------------------------------------------- FORM MOD
function cargarSeleccion() {
    var div = document.getElementById('info');
    div.innerHTML = ' ';

    var formulario = document.createElement('form');
    formulario.className = 'frmMod';
    var tabla = document.createElement('table');
    tabla.setAttribute('class', 'alta');

    for (var key in this.personaElegida) {
        var tr = document.createElement('tr');
        if (this.personaElegida != null) {
            tr.appendChild(crearFormulario(key, this.personaElegida[key]));
        }
        tabla.appendChild(tr);
    }

    tr = document.createElement('tr');

    var btnModificar = newButton('MODIFICAR');
    btnModificar.addEventListener('click', function () { modificarPersonaje(newPersonaje(true)); }, false);
    tr.appendChild(btnModificar);

    var btnEliminar = newButton('ELIMINAR');
    btnEliminar.addEventListener('click', function () { bajaPersonaje(newPersonaje(true)); }, false);
    tr.appendChild(btnEliminar);

    var btnCancelar = newButton('CANCELAR');
    btnCancelar.addEventListener('click', volverInicio, false);
    tr.appendChild(btnCancelar);

    tabla.appendChild(tr);

    tabla.appendChild(newBr());
    formulario.appendChild(tabla);
    div.appendChild(formulario)

}

//------------------------------------------------------------------- ATRIBUTOS

function newTextInput(key, valor) {

    var input = document.createElement('input');
    var label = newLabel(key);

    input.setAttribute('type', 'text');
    input.setAttribute('class', 'campo');
    input.setAttribute('id', key);

    if (key == 'id') {
        input.setAttribute('readonly', true);
        input.setAttribute('style', ' background-color: rgb(128, 131, 131)');
    }

    if (valor != null) {
        input.setAttribute('value', valor);
    }
    label.appendChild(input);

    return label;
}

function newLabel(key) {
    var label = document.createElement('label');
    var textLabel = document.createTextNode(key);
    label.appendChild(textLabel);
    label.setAttribute('for', key);
    label.setAttribute('id', 'textoEtiqueta');
    return label;
}

function newRadioButton(grupo, descripcion, checked = false, valorTest = null) {
    var td = document.createElement('td');
    td.setAttribute('id', 'textoEtiqueta');
    var input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', grupo);
    input.setAttribute('value', descripcion);
    input.setAttribute('id', descripcion);
    td.appendChild(input);
    td.appendChild(newLabel(descripcion));
    if (valorTest == descripcion) {
        input.checked = true;
    } else if (checked) {
        input.checked = true;
    }
    return td;
}

function newCheckBox(valor, checked = false) {
    var td = document.createElement('td');
    td.appendChild(newLabel(valor));
    td.setAttribute('id', 'textoEtiqueta');
    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', valor);
    if (valor != null && checked) {
        input.checked = true;
    }
    td.appendChild(input);
    return td;
}

function newButton(texto) {
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'btn');
    btn.setAttribute('value', texto);
    btn.setAttribute('id', 'btn' + texto);
    //btn.addEventListener('mouseover', () => { btn.setAttribute('style', ' background-color: rgb(157, 196, 255)'); });
    //btn.addEventListener('mouseout', () => { btn.setAttribute('style', ' background-color: default'); });
    return btn;
}

function newBr() {
    return document.createElement('br');
}

function newTextNode(texto) {
    return document.createTextNode(texto);
}

function newCombo(nombre, array, valor) {
    var td = document.createElement('td');
    td.appendChild(newLabel(nombre));
    td.setAttribute('id', 'textoEtiqueta');
    var combo = document.createElement('select');
    combo.name = nombre;
    combo.id = 'temporada';
    var option;
    var i = 1;

    array.forEach(element => {
        option = document.createElement('option');
        option.text = element;
        option.value = i;
        combo.appendChild(option);
        i++;
    });

    combo.value = valor;
    td.appendChild(combo);
    return td;
}

function newArrayBooleano(valor) {
    console.log("booleano");
    console.log(valor);

    var tabla, tr, td, input, label;
    var caracteristicas = getCaracteristicas();

    tabla = document.createElement('table');

    for (i = 0; i < caracteristicas.length; i++) {
        tr = document.createElement('tr');
        input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', caracteristicas[i]);
        if (valor != null) {
            console.log('i:' + i);
            console.log('valor[i]:' + valor[i]);
            input.checked = valor[i];
        }
        tr.appendChild(input);
        tr.appendChild(newLabel(caracteristicas[i]));
        tr.setAttribute('id', 'textoEtiqueta');
        console.log(tr);
        tabla.appendChild(tr);
    }
    return tabla;
}