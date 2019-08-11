namespace Heroes {
    export class Personaje {
        public id: number;
        public nombre: string;
        public edad: number;

        constructor(
            id = 0,
            nombre = "",
            edad = 0
        ) {
            this.id = id;
            this.nombre = nombre;
            this.edad = edad;
        }
    }
}