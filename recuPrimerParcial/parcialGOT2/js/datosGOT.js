function tipoDato(key) {
    var tipo
    switch (key) {
        case 'casa':
            tipo = 'RadioButton';
            break;
        case 'traidor':
            tipo = 'CheckBox';
            break;
        case 'caracteristicas':
            tipo = 'ArrayBooleano';
            break;
        case 'temporada':
            tipo = 'Combo';
            break;
        default:
            tipo = 'input';
            break;
    }
    return tipo;
}

function getRadioButtons() {
    return ['stark', 'targaryen', 'lanister'];
}

function getCaracteristicas() {
    return ['Guerrero', 'Manipulador', 'Diplomatico', 'Lider', 'Vengativo', 'Ambicioso'];
}

function getArrayBooleano() {
    return [false, false, false, false, false, false];
}

function getTemporadas() {
    return ['Temporada 1', 'Temporada 2', 'Temporada 3', 'Temporada 4', 'Temporada 5', 'Temporada 6', 'Temporada 7'];
}

function getTemporadaSelected(temp) {
    return getTemporadas().findIndex(temp);
}

function newDatoGOT() {
    return dato = {
        id: null,
        nombre: null,
        apellido: null,
        edad: null,
        casa: null,
        traidor: false,
        temporada: null,
        caracteristicas: getArrayBooleano()
    };
}

function newPersonaje(tieneID) {
    var persona = newDatoGOT();
    if (tieneID) {
        persona.id = document.getElementById('id').value;
    }

    persona.nombre = document.getElementById('nombre').value;
    persona.apellido = document.getElementById('apellido').value;
    persona.edad = document.getElementById('edad').value;
    getRadioButtons().forEach(casa => {
        if (document.getElementById(casa).checked) {
            persona.casa = casa;
        }
    });
    persona.traidor = document.getElementById('traidor').checked;
    persona.caracteristicas[0] = document.getElementById('Guerrero').checked;
    persona.caracteristicas[1] = document.getElementById('Manipulador').checked;
    persona.caracteristicas[2] = document.getElementById('Diplomatico').checked;
    persona.caracteristicas[3] = document.getElementById('Lider').checked;
    persona.caracteristicas[4] = document.getElementById('Vengativo').checked;
    persona.caracteristicas[5] = document.getElementById('Ambicioso').checked;
    persona.temporada = document.getElementById('temporada').value;

    return persona;
}

function sortById(prox, actual) {
    return (prox.id - actual.id);
}