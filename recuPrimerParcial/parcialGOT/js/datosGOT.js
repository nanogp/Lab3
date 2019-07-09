function tipoDato(key) {
    var tipo
    switch (key) {
        case 'casa':
            tipo = 'RadioButton';
            break;
        case 'traidor':
            tipo = 'CheckBox';
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

function newDatoGOT() {
    return dato = {
        id: null,
        nombre: null,
        apellido: null,
        edad: null,
        casa: null,
        traidor: false
    };
}

function newPersonaje(tieneID) {
    var persona = newDatoGOT();
    persona.nombre = document.getElementById('nombre').value;
    persona.apellido = document.getElementById('apellido').value;
    persona.edad = document.getElementById('edad').value;
    persona.traidor = document.getElementById('traidor').checked;

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