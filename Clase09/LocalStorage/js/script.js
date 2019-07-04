personas = [
    {
        id: 1,
        nombre: "juan",
        apellido: "perez"
    }, {
        id: 2,
        nombre: "marta",
        apellido: "vazquez"
    }
];

//localStorage.setItem("personas", JSON.stringify(personas));
console.log(JSON.parse(localStorage.getItem("personas")));
