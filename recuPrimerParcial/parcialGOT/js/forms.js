
//------------------------------------------------------------------- TABLA
function crearTabla(personas) {
    var div = document.getElementById('info');
    div.innerHTML = ' ';
    var header = newTr();
    var tabla = newTable();
    tabla.setAttribute('id', 'tablaListado');

    for (const key in personas[0]) {
        var th = newTh();
        var texto = newTextNode(key.toUpperCase());
        th.appendChild(texto);
        header.appendChild(th);
    }

    tabla.appendChild(header);

    for (var fila in personas) {
        var tr = newTr();
        var parametros = { personaElegida: personas[fila] }
        tr.addEventListener('click', cargarSeleccion.bind(parametros), false);

        for (var columna in personas[fila]) {
            var td = newTd();
            var texto = newTextNode(personas[fila][columna]);
            td.appendChild(texto);
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }

    div.appendChild(tabla);

    //AGREGA BOTONES
    div.appendChild(newLine());
    var btnCancelar = newButton('ALTA');
    btnCancelar.addEventListener('click', cargarAlta, false);
    div.appendChild(btnCancelar);

}

//------------------------------------------------------------------- FORMULARIO
function crearFormulario(key, valor) {
    var div = document.createElement('div');
    div.setAttribute('class', 'formulario');
    div.appendChild(newLine());

    switch (tipoDato(key)) {
        case 'RadioButton':
            var tr = newTr();
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
            var tr = newTr();
            tr.appendChild(newCheckBox('traidor', valor));
            div.appendChild(tr);
            div.appendChild(newLine());
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
    var formulario = document.createElement('form');
    formulario.className = 'frmAlta';
    var tabla = newTable();
    tabla.setAttribute('class', 'alta');

    for (var key in newDatoGOT()) {
        var tr = newTr();
        tr.appendChild(crearFormulario(key));
        tabla.appendChild(tr);
    }

    var btnAceptar = newButton('ACEPTAR');
    btnAceptar.addEventListener('click', altaPersonaje, false);

    var btnCancelar = newButton('CANCELAR');
    btnCancelar.addEventListener('click', volverInicio, false);

    tabla.appendChild(newLine());
    tabla.appendChild(btnAceptar);
    tabla.appendChild(btnCancelar);

    formulario.appendChild(tabla);

    div.appendChild(formulario);
    div.appendChild(newLine());

}


//------------------------------------------------------------------- FORM MOD

function cargarSeleccion() {
    var div = document.getElementById('info');
    div.innerHTML = ' ';

    var formulario = document.createElement('form');
    formulario.className = 'frmMod';
    var tabla = newTable();
    tabla.setAttribute('class', 'alta');

    for (var key in this.personaElegida) {
        var tr = newTr();
        if (this.personaElegida != null) {
            tr.appendChild(crearFormulario(key, this.personaElegida[key]));
        }
        tabla.appendChild(tr);
    }

    var btnModificar = newButton('MODIFICAR');
    btnModificar.addEventListener('click', function () {
        modificarPersonaje(newPersonaje(true));
    }, false);
    tr.appendChild(btnModificar);

    var btnEliminar = newButton('ELIMINAR');
    btnEliminar.addEventListener('click', function () {
        bajaPersonaje(newPersonaje(true));
    }, false);

    var btnCancelar = newButton('CANCELAR');
    btnCancelar.addEventListener('click', volverInicio, false);


    tr.appendChild(btnEliminar);
    tr.appendChild(btnCancelar);
    tabla.appendChild(tr);

    formulario.appendChild(tabla);
    div.appendChild(formulario);
    div.appendChild(newLine());

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
    var armarTextoID = 'btn' + texto;
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'btn');
    btn.setAttribute('value', texto);
    btn.setAttribute('id', armarTextoID);
    return btn;

}

function newTable() {
    return document.createElement('table');
}

function newTh() {
    return document.createElement('th');
}

function newTr() {
    return document.createElement('tr');
}

function newTd() {
    return document.createElement('td');
}

function newBr() {
    return document.createElement('br');
}

function newFieldSet() {
    return document.createElement('fieldset');
}

function newTextNode(texto) {
    return document.createTextNode(texto);
}

function newLine() {
    return document.createElement('p');
}