namespace Entidades {
    export class App {
        private static listaMascotas: Array<Mascota> = new Array();

        public static inicio(): void {
            this.traerListado();
            this.crearTabla(this.listaMascotas);
        }

        public static CargarFormulario(id: number) {
            for (var i = 0; i < this.listaMascotas.length; i++) {
                let mascota: Mascota = this.listaMascotas[i];
                if (mascota.id == id) {
                    $("#id").val(mascota.id);
                    $("#nombre").val(mascota.nombre);
                    $("#edad").val(mascota.edad);
                    $("#sexo").val(mascota.sexo);
                    break;
                }
            }
        }

        public static Borrar() {
            let id: number = Number($("#id").val());
            let borroOk: boolean = false;
            for (var i = 0; i < this.listaMascotas.length; i++) {
                let mascota = this.listaMascotas[i];
                if (mascota.id == id) {
                    this.listaMascotas.splice(i, 1);
                    this.guardarListado();
                    borroOk = true;
                    break;
                }
            }

            if (!borroOk) {
                alert("No se encontro el ID.");
            }

            this.crearTabla(this.listaMascotas);
            this.LimpiarFormulario();

        }

        public static obtenerSiguienteId(): number {
            var id: number = Number(localStorage.getItem("secuencia_id"));
            id++;
            localStorage.setItem("secuencia_id", String(id));
            return id;
        }

        //Carga un nuevo mascota a la lista. 
        public static Alta(): void {
            let nombre: string = String($("#nombre").val());
            let edad: number = Number($("#edad").val());
            let patas: number = Number(123);
            let tipo: TipoAnimal = TipoAnimal.Gato;
            let sexo: string = String($("#sexo").val());

            let mascota = new Mascota(this.obtenerSiguienteId(), edad, patas, tipo, nombre, sexo);
            this.listaMascotas.push(mascota);
            this.guardarListado();
            this.crearTabla(this.listaMascotas);
            this.LimpiarFormulario();

        }

        //Pasa la lista de mascotas a formato JSON (string)
        // private static listaMascotasToJson(): string {
        //     if (this.listaMascotas.length > 0) {
        //         let listaJson: string = "[";
        //         this.listaMascotas.forEach(function (mascota) {
        //             listaJson += mascota.toJSON();
        //             listaJson += ",";
        //         });
        //         listaJson = listaJson.slice(0, -1);
        //         listaJson += "]";
        //         return listaJson;
        //     }
        //     return "";
        // }

        //Pasa el JSON almacenado en el LocalStorage y genera a lista de mascotas.
        private static traerListado(): void {
            this.listaMascotas = JSON.parse(String(localStorage.getItem("mascotas")));
            // let LSString: string = String();
            // if (LSString != null && LSString != "") {
            //     let listaJson = JSON.parse(LSString);
            //     {
            //         if (listaJson != null) {
            //             for (var i = 0; i < listaJson.length; i++) {
            //                 let id = listaJson[i].id;
            //                 let nombre = listaJson[i].nombre;
            //                 let edad = listaJson[i].edad;
            //                 let sexo = listaJson[i].sexo;

            //                 var mascota = new Mascota(id, nombre, edad, sexo);
            //                 this.listaMascotas.push(mascota);
            //             }
            //         }
            //     }
            // }
        }

        private static guardarListado(): void {
            localStorage.setItem("mascotas", JSON.stringify(this.listaMascotas));
        }

        //Limpia el formulario
        public static LimpiarFormulario(): void {
            $("#nombre").val("");
            $("#edad").val("");
            $("#sexo").val("Masculino");
        }


        public static Checkbox_OnChange(): void {
            this.crearTabla(this.listaMascotas);
        }

        //--------------------------------------------------------------------------------tabla
        public static crearTabla(arrayMascotas: Array<Mascota>): void {
            let mostrarID: boolean = Boolean($("#mostrarID").is(":checked"));
            let mostrarNombre: boolean = Boolean($("#mostrarNombre").is(":checked"));
            // let mostrarApellido: boolean = Boolean($("#mostrarApellido").is(":checked"));
            let mostrarEdad: boolean = Boolean($("#mostrarEdad").is(":checked"));
            let mostrarSexo: boolean = Boolean($("#mostrarSexo").is(":checked"));
            let html = "<thead>" +
                "<tr>";
            if (mostrarID) {
                html += "<th>ID</th>";
            }
            if (mostrarNombre) {
                html += "<th>Nombre</th>";
            }
            // if (mostrarApellido) {
            //     html += "<th>Apellido</th>";
            // }
            if (mostrarEdad) {
                html += "<th>Edad</th>";
            }
            if (mostrarSexo) {
                html += "<th>Sexo</th>";
            }
            html += "</tr>" +
                "</thead>" +
                "<tbody>";

            arrayMascotas.forEach(function (mascota) {
                html += "<tr class='trSeleccionable' onclick='Entidades.App.CargarFormulario(" + mascota.id + ")'>";
                if (mostrarID) {
                    html += "<td>" + mascota.id + "</td>";
                }
                if (mostrarNombre) {
                    html += "<td>" + mascota.nombre + "</td>";
                }
                // if (mostrarApellido) {
                //     html += "<td>" + mascota.getApellido() + "</td>";
                // }
                if (mostrarEdad) {
                    html += "<td>" + mascota.edad + "</td>";
                }
                if (mostrarSexo) {
                    html += "<td>" + mascota.sexo + "</td>";
                }
                html += "</tr>";
            });

            html += "</tbody>";

            $("#tabla").html(html);
        }

        //--------------------------------------------------------------------------------filtro
        public static FiltrarNombre(): void {
            let filtro: String = String($("#txtFiltroNombre").val());
            let arrayFiltrado: Array<Mascota> = this.listaMascotas.filter(function (Mascota: Mascota, i: Number, array: Array<Mascota>) {
                if (Mascota.nombre.match("^" + filtro + "[a-zA-Z\s]*")) {
                    return true;
                }
                return false;
            });
            this.crearTabla(arrayFiltrado);
        }

        //Limpia el localstorage. ATENCION: Si se vuelve a cargar un mascota se volverá a llenar el LS con toda la lista.
        public static LimpiarLocalStorage() {
            localStorage.clear();
            localStorage.setItem("secuencia_id", "0");
        }
    }
}