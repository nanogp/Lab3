namespace Espacial {

    export class Cohete {
        nombre: String;
        precio: Number;
        destino: Destinos;

        constructor(nombre: String, precio: Number) {
            this.nombre = nombre;
            this.precio = precio;
            this.destino = Destinos.luna;
        }

        despegar() {
            console.log(`lanzando el cohete ${this.nombre} con destino a ${Destinos[this.destino]}`);
        }
    }
}