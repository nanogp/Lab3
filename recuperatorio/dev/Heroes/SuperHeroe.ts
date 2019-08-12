namespace Heroes {
    export class SuperHeroe extends Personaje {
        public alias: string;
        public poderPrincipal: string;
        public tipo: eTipo;
        public color: string;
        // public imagen: string;

        constructor(
            id = 0,
            nombre = "",
            edad = 0,
            alias = "",
            poderPrincipal = "",
            tipo = eTipo.Avenger,
            color = ""//,
            // imagen = ""
        ) {

            super(id, nombre, edad);
            this.alias = alias;
            this.poderPrincipal = poderPrincipal;
            this.tipo = tipo;
            this.color = color;
            // this.imagen = imagen;
        }

        public static tipoDato(key: String) {
            var tipo
            switch (key) {
                case 'genero':
                    tipo = 'RadioButton';
                    break;
                case 'traidor':
                    tipo = 'CheckBox';
                    break;
                case 'caracteristicas':
                    tipo = 'ArrayBooleano';
                    break;
                case 'tipo':
                    tipo = 'Combo';
                    break;
                case 'color':
                    tipo = 'Color';
                    break;
                case 'nombre':
                    tipo = key;
                    break;
                case 'edad':
                    tipo = key;
                    break;
                case 'poderPrincipal':
                    tipo = key;
                    break;
                case 'imagen':
                    tipo = key;
                    break;
                default:
                    tipo = 'input';
                    break;
            }
            return tipo;
        }

        public static getNombreAtributoCombo() {
            return 'tipo';
        }

        public static getRadioButtons() {
            return ['masculino', 'femenino'];
        }

        public static getCaracteristicas() {
            return ['Guerrero', 'Manipulador', 'Diplomatico', 'Lider', 'Vengativo', 'Ambicioso'];
        }

        public static getArrayBooleano() {
            return [false, false, false, false, false, false];
        }

        public static getTipo() {
            return Object.keys(eTipo).filter((e: any) => { return isNaN(e); });
        }

        public static getTipoNumbers() {
            return Object.keys(eTipo).filter((e: any) => { return !isNaN(e); });
        }

        public static getTipoSelected(tipo: eTipo): string {
            return eTipo[tipo];
        }

        public static sortById(prox: { id: number; }, actual: { id: number; }) {
            return (prox.id - actual.id);
        }

    }
}