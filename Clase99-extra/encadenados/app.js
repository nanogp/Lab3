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

function traerNombre(persona) {
    return persona.nombre;
}

function menoresA30(p) {
    return p.edad < 30;
}

console.log(personas.filter(menoresA30).map(traerNombre));

console.log(
    [
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
    ]
        .filter((p) => p.edad < 30)
        .map((p) => p.nombre));