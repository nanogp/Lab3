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
            tipo = 'Array';
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

function getDetalleCaracteristicas(params) {
    return null;
}

function getTemporadas() {
    return ['Temporada 1', 'Temporada 2', 'Temporada 3', 'Temporada 4', 'Temporada 5', 'Temporada 6', 'Temporada 7'];
}

function newDatoGOT() {
    return dato = {
        id: null,
        nombre: null,
        apellido: null,
        edad: null,
        casa: null,
        traidor: false,
        caracteristicas: [],
        temporada: null
    };
}

function newPersonaje(tieneID) {
    var persona = newDatoGOT();
    persona.nombre = document.getElementById('nombre').value;
    persona.apellido = document.getElementById('apellido').value;
    persona.edad = document.getElementById('edad').value;
    persona.traidor = document.getElementById('traidor').checked;
    persona.caracteristicas = document.getElementById('caracteristicas');
    persona.temporada = document.getElementById('temporada');

    if (tieneID) {
        persona.id = document.getElementById('id').value;
    }

    getRadioButtons().forEach(casa => {
        if (document.getElementById(casa).checked) {
            persona.casa = casa;
        }
    });

    return persona;
}

function sortById(prox, actual) {
    return (prox.id - actual.id);
}