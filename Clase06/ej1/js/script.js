function ejecutar() {
    var xhr = new XMLHttpRequest();

    //ejecuta la funcion anonima cada vez que cambia el estado
    xhr.onreadystatechange = function () {
        //this es xhr
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                document.getElementById("info").innerHTML = this.responseText;
            }
        }

    };

    xhr.open("GET", "http://localhost:3000/lista.txt", true);
    xhr.send();
}

