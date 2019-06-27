var vec = [1, 2, 3, 4];

var personas = [
    {
        nombre: "juan",
        edad: 20
    },
    {
        nombre: "pedro",
        edad: 23
    },
    {
        nombre: "pablo",
        edad: 30
    }
];

function pares(valor) {
    return valor % 2 == 0;
}

function traerNombre(persona) {
    return persona.nombre === 'juan';
}

//filter llama a cualquier funcion que devuelva booleano y le pasa los elementos de vec
//devuelve un nuevo array
console.log(vec.filter(pares));

console.log(personas.filter(traerNombre));