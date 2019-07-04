$(document).ready(inicializarManejadores);

function inicializarManejadores() {
    /* $("#miH1").click(() => alert("click en h1")); */
    var miH1 = $("#miH1");
    miH1.click(manejadorDelH1);

    $("#p3").attr("class", "rojo");//agrego el atributo class a el ID p3

    var parrafos = $("p");
    parrafos.click(cambiarTexto); //recorre solo el array y le asigna a c/u el mismo manejador


    var elementosRojos = $(".rojo");
    elementosRojos.click(cambiarColor);

    $("div").html("<p>loretero</p>"); //innertHtml
}

function manejadorDelH1() {
    /* alert("click en h1"); */
    $(this).css("color", "blue");

    var h1 = $(this);
    h1.text("chau mundo"); //setter del contenido
    alert(h1.text()); //getter del contenido
}

function cambiarTexto() {
    $(this).text("me cambiaron, vieja!");
}

function cambiarColor() {
    $(this).css("color", "red")
};