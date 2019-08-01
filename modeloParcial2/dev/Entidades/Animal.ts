namespace Entidades {
    export class Animal {
        public id: number;
        public edad: number;
        public patas: number;
        public tipo: TipoAnimal;

        constructor(id: number, edad: number, patas: number, tipo: TipoAnimal) {
            this.id = id;
            this.edad = edad;
            this.patas = patas;
            this.tipo = tipo;
        }
    }
}