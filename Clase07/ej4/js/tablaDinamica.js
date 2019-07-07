class TablaDinamica {

    static crearTabla(div, array, mostrarCabecera = true) {
        var tabla = document.createElement('table');
        tabla.setAttribute('border', '1px');
        tabla.style.borderCollapse = 'collapse';
        div.appendChild(tabla);
        if (mostrarCabecera) {
            tabla.appendChild(TablaDinamica.crearFila(array, true));
        }
        array.forEach(dato => {
            tabla.appendChild(TablaDinamica.crearFila(dato));
        });
    }

    static crearFila(dato, esCabecera = false) {
        var fila = document.createElement('tr');
        var columna, texto;

        if (esCabecera) {
            for (const clave in dato[0]) {
                //agrego columnas con nombres de claves
                texto = document.createTextNode(clave.toUpperCase());
                columna = document.createElement('th');
                columna.appendChild(texto);
                fila.appendChild(columna);
            }
        } else {
            fila.setAttribute('id', dato['id']);
            fila.addEventListener('click', cargarFormularioModificacion, false);
            for (const clave in dato) {
                texto = document.createTextNode(dato[clave]);
                columna = document.createElement('td');
                columna.appendChild(texto);
                fila.appendChild(columna);
            }
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
