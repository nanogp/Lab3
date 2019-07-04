class TablaDinamica {

    static tipoFila = {
        Cabecera: 0, Detalle: 1
    }

    static crearTabla(div, array) {
        var tabla = document.createElement('table');
        tabla.setAttribute('border', '1px');
        tabla.style.borderCollapse = 'collapse';
        div.appendChild(tabla);
        TablaDinamica.agregarFilas(tabla, array, true);
    }

    static agregarFilas(tabla, array, mostrarCabecera = true) {
        if (mostrarCabecera) {
            TablaDinamica.agregarFilaCabecera(tabla, array);
        }
        TablaDinamica.agregarFilasDetalle(tabla, array);
    }

    static agregarFilaCabecera(tabla, array) {
        tabla.appendChild(TablaDinamica.crearFila(array, TablaDinamica.tipoFila.Cabecera));
    }

    static agregarFilasDetalle(tabla, array) {
        array.forEach(dato => {
            tabla.appendChild(TablaDinamica.crearFila(dato, TablaDinamica.tipoFila.Detalle));
        });
    }

    static crearFila(array, tipo = TablaDinamica.tipoFila.Detalle) {
        var fila = document.createElement('tr');
        var columna, texto;

        switch (tipo) {
            case TablaDinamica.tipoFila.Cabecera:
                for (const clave in array[0]) {
                    //agrego columnas con nombres de claves
                    texto = document.createTextNode(clave.toUpperCase());
                    columna = document.createElement('th');
                    columna.appendChild(texto);
                    fila.appendChild(columna);
                }
                break;

            case TablaDinamica.tipoFila.Detalle:
                fila.setAttribute('id', array['id']);
                fila.addEventListener('click', cargarFormularioModificacion, false);
                for (const clave in array) {
                    texto = document.createTextNode(array[clave]);
                    columna = document.createElement('td');
                    columna.appendChild(texto);
                    fila.appendChild(columna);
                }
                break;
        }
        return fila;
    }
}

function cargarFormularioModificacion(e) {

    var formModificar = new Array(
        document.getElementById("txtIdM"),
        document.getElementById("txtNombreM"),
        document.getElementById("txtApellidoM"),
        document.getElementById("txtEdadM")
    );

    for (var i = 0; i < this.childNodes.length; i++) {
        formModificar[i].value = this.childNodes[i].textContent;
    }
}
