namespace Entidades {
    export class Mascota extends Animal {
        public nombre: string;
        public sexo: string;

        constructor(id: number, edad: number, patas: number, tipo: TipoAnimal, nombre: string, sexo: string) {
            super(id, edad, patas, tipo);
            this.nombre = nombre;
            this.sexo = sexo;
        }
    }
}