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

function sumarTodos(prev, current, i) {
    console.log("prev: " + prev + " curr:" + current + " index:" + i);
    return prev + current;
}

function totalEdad(prev, actual) {
    prev.total += actual.edad;
    return prev;
}

//filter llama a cualquier funcion que devuelva booleano y le pasa los elementos de vec
//devuelve un nuevo array
console.log(vec.reduce(sumarTodos));

console.log(personas.reduce(totalEdad, { total: 0 }));

