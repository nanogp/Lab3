window.addEventListener("load", cambiaImagen);

function cambiarColor(nombreColor) {
    var h1 = document.getElementById("miH1");

    h1.style.color = nombreColor;
}

function sorpresa() {
    alert("PUTO EL QUE LEE");
}


function cambiaImagen() {
    //var imagen = document.getElementsByTagName("img")[1];
    var imagen = document.getElementById("imagen-google");

    imagen.addEventListener("mouseover", function (e) {
        e.target.setAttribute("src", "https://images.clarin.com/collections/static/logo_clarin.svg");
    });

    imagen.addEventListener("mouseleave", function (e) {
        e.target.setAttribute("src", "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
    })
}



