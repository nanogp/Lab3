namespace Legisladores {
    export class Persona {
        public id: number;
        public nombre: string;
        public edad: number;
        public color: string;
        public imagen: string;


        constructor(
            id = 0,
            nombre = "",
            edad = 0,
            color = "",
            imagen = ""
        ) {
            this.id = id;
            this.nombre = nombre;
            this.edad = edad;
            this.color = color;
            this.imagen = imagen;

        }
    }
}