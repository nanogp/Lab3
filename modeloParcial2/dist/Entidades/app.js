"use strict";
var Entidades;
(function (Entidades) {
    var App = /** @class */ (function () {
        function App() {
        }
        App.inicio = function () {
            this.traerListado();
            this.crearTabla(this.listaMascotas);
        };
        App.CargarFormulario = function (id) {
            for (var i = 0; i < this.listaMascotas.length; i++) {
                var mascota = this.listaMascotas[i];
                if (mascota.id == id) {
                    $("#id").val(mascota.id);
                    $("#nombre").val(mascota.nombre);
                    $("#edad").val(mascota.edad);
                    $("#sexo").val(mascota.sexo);
                    break;
                }
            }
        };
        App.Borrar = function () {
            var id = Number($("#id").val());
            var borroOk = false;
            for (var i = 0; i < this.listaMascotas.length; i++) {
                var mascota = this.listaMascotas[i];
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
        };
        App.obtenerSiguienteId = function () {
            var id = Number(localStorage.getItem("secuencia_id"));
            id++;
            localStorage.setItem("secuencia_id", String(id));
            return id;
        };
        //Carga un nuevo mascota a la lista. 
        App.Alta = function () {
            var nombre = String($("#nombre").val());
            var edad = Number($("#edad").val());
            var patas = Number(123);
            var tipo = Entidades.TipoAnimal.Gato;
            var sexo = String($("#sexo").val());
            var mascota = new Entidades.Mascota(this.obtenerSiguienteId(), edad, patas, tipo, nombre, sexo);
            this.listaMascotas.push(mascota);
            this.guardarListado();
            this.crearTabla(this.listaMascotas);
            this.LimpiarFormulario();
        };
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
        App.traerListado = function () {
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
        };
        App.guardarListado = function () {
            localStorage.setItem("mascotas", JSON.stringify(this.listaMascotas));
        };
        //Limpia el formulario
        App.LimpiarFormulario = function () {
            $("#nombre").val("");
            $("#edad").val("");
            $("#sexo").val("Masculino");
        };
        App.Checkbox_OnChange = function () {
            this.crearTabla(this.listaMascotas);
        };
        //--------------------------------------------------------------------------------tabla
        App.crearTabla = function (arrayMascotas) {
            var mostrarID = Boolean($("#mostrarID").is(":checked"));
            var mostrarNombre = Boolean($("#mostrarNombre").is(":checked"));
            // let mostrarApellido: boolean = Boolean($("#mostrarApellido").is(":checked"));
            var mostrarEdad = Boolean($("#mostrarEdad").is(":checked"));
            var mostrarSexo = Boolean($("#mostrarSexo").is(":checked"));
            var html = "<thead>" +
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
        };
        //--------------------------------------------------------------------------------filtro
        App.FiltrarNombre = function () {
            var filtro = String($("#txtFiltroNombre").val());
            var arrayFiltrado = this.listaMascotas.filter(function (Mascota, i, array) {
                if (Mascota.nombre.match("^" + filtro + "[a-zA-Z\s]*")) {
                    return true;
                }
                return false;
            });
            this.crearTabla(arrayFiltrado);
        };
        //Limpia el localstorage. ATENCION: Si se vuelve a cargar un mascota se volverá a llenar el LS con toda la lista.
        App.LimpiarLocalStorage = function () {
            localStorage.clear();
            localStorage.setItem("secuencia_id", "0");
        };
        App.listaMascotas = new Array();
        return App;
    }());
    Entidades.App = App;
})(Entidades || (Entidades = {}));
