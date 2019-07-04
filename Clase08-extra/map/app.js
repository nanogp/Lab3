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

function duplicar(valor, indice) {
    console.log("Valor: " + valor + " Indice:" + indice);
    return valor * 2;
}

function traerNombre(persona) {
    return persona.nombre;
}

//map llama a duplicar y le pasa los elementos de vec
//devuelve un nuevo array
//console.log(vec.map(duplicar, vec));

nombres = personas.map(traerNombre);

console.log(nombres);