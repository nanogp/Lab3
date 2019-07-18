namespace Espacial {
    export abstract class Nasa {
        director: string;
        creacion: number;
        cohetes: Cohete[];

        constructor(director: string, creacion: number) {
            this.director = director;
            this.creacion = creacion;
            this.cohetes = [];
        }

        agregarCohete(unCohete: Cohete) {
            this.cohetes.push(unCohete);
        }

        lanzarCohete(unCohete: Cohete) {
            unCohete.despegar();
        }
    }
}