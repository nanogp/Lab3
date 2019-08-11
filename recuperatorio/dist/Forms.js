"use strict";
var claseDato = Heroes.SuperHeroe;
//------------------------------------------------------------------- TABLA
function crearTabla(listado) {
    var div = document.createElement('div');
    div.className = "row marginRow";
    var header = document.createElement('tr');
    var tabla = document.createElement('table');
    tabla.className = "table table-striped";
    tabla.setAttribute('id', 'tablaListado');
    for (var key in listado[0]) {
        var th = document.createElement('th');
        var texto = newTextNode(key.toUpperCase());
        th.append(texto);
        header.append(th);
    }
    tabla.append(header);
    for (var fila in listado) {
        var tr = document.createElement('tr');
        var parametros = { dato: listado[fila] };
        tr.addEventListener('click', cargarSeleccion.bind(parametros), false);
        for (var columna in listado[fila]) {
            // console.log('columna:' + columna);
            // console.log('listado[fila]:' + listado[fila]);
            var td = document.createElement('td');
            if (columna == 'caracteristicas') {
                var aux = "";
                if (listado[fila][columna][0]) {
                    aux += claseDato.getCaracteristicas()[0] + ";";
                }
                ;
                if (listado[fila][columna][1]) {
                    aux += claseDato.getCaracteristicas()[1] + ";";
                }
                ;
                if (listado[fila][columna][2]) {
                    aux += claseDato.getCaracteristicas()[2] + ";";
                }
                ;
                if (listado[fila][columna][3]) {
                    aux += claseDato.getCaracteristicas()[3] + ";";
                }
                ;
                if (listado[fila][columna][4]) {
                    aux += claseDato.getCaracteristicas()[4] + ";";
                }
                ;
                if (listado[fila][columna][5]) {
                    aux += claseDato.getCaracteristicas()[5] + ";";
                }
                ;
                aux = aux.substr(0, aux.length - 1);
                var texto = newTextNode(aux);
                td.append(texto);
            }
            else if (columna == claseDato.getNombreAtributoCombo()) {
                var texto = newTextNode(claseDato.getTipoSelected(listado[fila][columna]));
                td.append(texto);
            }
            else if (columna == 'color') {
                var texto = newTextNode(listado[fila][columna]);
                tr.bgColor = listado[fila][columna];
                td.append(texto);
            }
            else if (columna == 'imagen') {
                // var imagen = new Image();
                // image.src = 'data:image/png;base64,iVBORw0K...';
                // imagen.src = atob(listado[fila][columna]);
                // td.append(imagen);
            }
            else {
                var texto = newTextNode(listado[fila][columna]);
                td.append(texto);
            }
            tr.append(td);
        }
        tabla.append(tr);
    }
    div.append(tabla);
    div.append(document.createElement('hr'));
    return div;
}
//------------------------------------------------------------------- FORMULARIO
function crearCampo(key, valor) {
    var div = document.createElement('div');
    var input, span;
    switch (claseDato.tipoDato(key)) {
        case 'RadioButton':
            claseDato.getRadioButtons().forEach(function (nombre) {
                if (nombre == claseDato.getRadioButtons()[0]) {
                    div.append(newLabel(key));
                    div.append(newRadioButton('sexo', nombre, true, valor));
                }
                else {
                    div.append(newRadioButton('sexo', nombre, false, valor));
                }
            });
            break;
        case 'CheckBox':
            div.append(newCheckBox('traidor', valor));
            break;
        case 'ArrayBooleano':
            div.append(newLabel(key));
            div.append(newArrayBooleano(valor));
            break;
        case 'Combo':
            div.append(newLabel(key));
            div.append(newCombo(key, claseDato.getTipo(), valor));
            break;
        case 'Color':
            div.append(newLabel(key));
            div.append(newColorInput(key, valor, undefined));
            break;
        case 'nombre':
            div.className = 'form-group';
            div.id = 'nombreGroup';
            input = newTextInput(key, valor);
            input.onchange = App.nombreValido;
            div.append(input);
            span = document.createElement('span');
            span.className = 'glyphicon glyphicon-remove has-error form-control-feedback';
            div.append(span);
            span = document.createElement('span');
            span.className = "help-block";
            span.id = "helpNombre";
            span.innerText = 'Ingrese un nombre válido';
            span.setAttribute('hidden', 'true');
            div.append(span);
            break;
        case 'edad':
            div.className = 'form-group';
            div.id = 'edadGroup';
            input = newTextInput(key, valor);
            input.onchange = App.edadValida;
            div.append(input);
            span = document.createElement('span');
            span.className = 'glyphicon glyphicon-remove has-error form-control-feedback';
            div.append(span);
            span = document.createElement('span');
            span.className = "help-block";
            span.id = "helpEdad";
            span.innerText = 'Ingrese una edad válida';
            span.setAttribute('hidden', 'true');
            div.append(span);
            break;
        case 'poderPrincipal':
            div.className = 'form-group';
            div.id = 'poderGroup';
            input = newTextInput(key, valor);
            input.onchange = App.poderValido;
            div.append(input);
            span = document.createElement('span');
            span.className = 'glyphicon glyphicon-remove has-error form-control-feedback';
            div.append(span);
            span = document.createElement('span');
            span.className = "help-block";
            span.id = "helpPoder";
            span.innerText = 'Ingrese un poder válido';
            span.setAttribute('hidden', 'true');
            div.append(span);
            break;
        case 'imagen':
            div.className = 'form-group';
            div.id = 'imagenGroup';
            div.append(newLabel(key));
            input = document.createElement('input');
            input.type = 'file';
            input.change(encodeImagetoBase64(this));
            div.append(input);
            break;
        default:
            div.className = "form-group";
            if (key != 'id') {
                div.append(newTextInput(key, valor));
            }
            else if (valor) {
                div.append(newTextInput(key, valor));
            }
            break;
    }
    return div;
}
//------------------------------------------------------------------- FORM BLANCO
function cargarAlta() {
    var div = $('#formulario');
    $('#tabla').empty();
    div.empty();
    var formulario = document.createElement('form');
    formulario.classNameName = 'frmAlta';
    var divGroup = document.createElement('table');
    divGroup.setAttribute('class', 'alta');
    Object.keys(new claseDato()).forEach(function (key) {
        var tr = document.createElement('tr');
        tr.append(crearCampo(key, undefined));
        divGroup.append(tr);
    });
    var btnAceptar = newButton('ACEPTAR');
    btnAceptar.addEventListener('click', App.alta, false);
    divGroup.append(btnAceptar);
    var btnCancelar = newButton('CANCELAR');
    btnCancelar.addEventListener('click', App.volverInicio, false);
    divGroup.append(btnCancelar);
    formulario.append(divGroup);
    div.append(formulario);
}
//------------------------------------------------------------------- FORM MOD
function cargarSeleccion() {
    var _this = this;
    $('#tabla').empty();
    var div = $('#formulario');
    div.empty();
    var dato;
    var formulario = document.createElement('form');
    formulario.classNameName = 'frmMod';
    var tabla = document.createElement('table');
    tabla.setAttribute('class', 'alta');
    JSON.parse(localStorage.listado).forEach(function (element) {
        if (element.id == _this.dato.id) {
            dato = element;
        }
    });
    for (var key in dato) {
        var tr = document.createElement('tr');
        if (dato != null) {
            tr.append(crearCampo(key, dato[key]));
        }
        tabla.append(tr);
    }
    tr = document.createElement('tr');
    var btnModificar = newButton('MODIFICAR');
    btnModificar.addEventListener('click', function () { App.modificar(_this.dato); }, false);
    tr.append(btnModificar);
    var btnEliminar = newButton('ELIMINAR');
    btnEliminar.addEventListener('click', function () { App.baja(_this.dato); }, false);
    tr.append(btnEliminar);
    var btnCancelar = newButton('CANCELAR');
    btnCancelar.addEventListener('click', App.volverInicio, false);
    tr.append(btnCancelar);
    tabla.append(tr);
    tabla.append(newBr());
    formulario.append(tabla);
    div.append(formulario);
}
//------------------------------------------------------------------- ATRIBUTOS
function newTextInput(key, valor) {
    var input = document.createElement('input');
    var label = newLabel(key);
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', key);
    input.setAttribute('width', '500px');
    if (key == 'id') {
        input.setAttribute('readonly', 'true');
        input.setAttribute('style', ' background-color: rgb(128, 131, 131)');
    }
    if (valor != null) {
        input.setAttribute('value', valor);
    }
    label.append(input);
    return label;
}
function newLabel(key) {
    var label = document.createElement('label');
    var textLabel = document.createTextNode(key);
    label.append(textLabel);
    label.setAttribute('for', key);
    label.setAttribute('id', 'textoEtiqueta');
    label.className = "control-label";
    return label;
}
function newRadioButton(grupo, descripcion, checked, valorTest) {
    if (checked === void 0) { checked = false; }
    if (valorTest === void 0) { valorTest = null; }
    var div = document.createElement('div');
    div.className = "form-group";
    div.id = "grupo";
    var input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', grupo);
    input.setAttribute('value', descripcion);
    input.setAttribute('id', descripcion);
    input.className = "form-control";
    div.append(input);
    div.append(newLabel(descripcion));
    if (valorTest == descripcion) {
        input.checked = true;
    }
    else if (checked) {
        input.checked = true;
    }
    return div;
}
function newCheckBox(valor, checked) {
    if (checked === void 0) { checked = false; }
    var div = document.createElement('div');
    var label = newLabel(valor);
    label.setAttribute('for', 'ck' + valor);
    div.append(label);
    div.setAttribute('id', 'textoEtiqueta');
    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'ck' + valor);
    if (valor != null && checked) {
        input.checked = true;
    }
    if (valor == 'id') {
        input.disabled = true;
    }
    div.append(input);
    return div;
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
    var combo = document.createElement('select');
    combo.className = "form-control";
    combo.name = nombre;
    combo.id = claseDato.getNombreAtributoCombo();
    var option;
    array.forEach(function (element) {
        option = document.createElement('option');
        option.text = element;
        option.value = array.indexOf(element);
        combo.append(option);
    });
    combo.selectedIndex = valor;
    return combo;
}
function newArrayBooleano(valor) {
    // console.log("booleano");
    // console.log(valor);
    var tabla, tr, td, input, label;
    var caracteristicas = claseDato.getCaracteristicas();
    tabla = document.createElement('table');
    for (var i = 0; i < caracteristicas.length; i++) {
        tr = document.createElement('tr');
        input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', caracteristicas[i]);
        if (valor != null) {
            // console.log('i:' + i);
            // console.log('valor[i]:' + valor[i]);
            input.checked = valor[i];
        }
        tr.append(input);
        tr.append(newLabel(caracteristicas[i]));
        tr.setAttribute('id', 'textoEtiqueta');
        // console.log(tr);
        tabla.append(tr);
    }
    return tabla;
}
function newColorInput(nombre, valor, listener) {
    var input = document.createElement('input');
    input.type = 'color';
    input.className = "form-control";
    input.name = nombre;
    input.id = nombre;
    input.value = valor;
    if (listener != null) {
        input.addEventListener('change', listener);
    }
    return input;
}
function encodeImagetoBase64(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        // $(".link").attr("href", reader.result);
        // $(".link").text(reader.result);
    };
    reader.readAsDataURL(file);
}
function mapColumnas() {
    var listado = JSON.parse(localStorage.listado);
    console.log(listado);
    var listadoFiltrado = listado.map(function (valor, clave, array) {
        var nuevoArray = [];
        for (var key in valor) {
            if ($('#ck' + key).is(':checked') == true) {
                nuevoArray[key] = valor[key];
            }
        }
        return nuevoArray;
    });
    console.log(listadoFiltrado);
    $('#tabla').empty();
    $('#tabla').append(crearTabla(listadoFiltrado));
    var btnAlta = newButton('ALTA');
    btnAlta.addEventListener('click', cargarAlta, false);
    $('#tabla').append(btnAlta);
}
function filtros() {
    var listado = JSON.parse(localStorage.listado);
    var tabla = document.createElement('form');
    tabla.setAttribute("class", "form-inline center-block");
    for (var key in listado[0]) {
        var box = newCheckBox(key, true);
        box.addEventListener('change', mapColumnas, false);
        box.setAttribute("style", "margin:15px 3px");
        tabla.appendChild(box);
    }
    var boton = newButton("Limpiar localStorage");
    boton.className = "btn btn-danger";
    boton.addEventListener('click', function () {
        mapColumnas();
    });
    tabla.appendChild(boton);
    return tabla;
}
// function () {
//     var valor = (<HTMLInputElement>document.getElementById('elegirColor')).value;
//     console.log("color" + valor);
//     $('body').css('background-image', 'url("null")');
//     $('body').css('backgroundColor', valor);
// }
