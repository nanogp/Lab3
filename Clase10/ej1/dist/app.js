"use strict";
var laNasa = new Espacial.Subsidiaria("john doe", 1945, "cnctct");
var unCuete = new Espacial.Cohete("Apollo 11", 123456);
laNasa.agregarCohete(unCuete);
console.log("la subsidiaria:" + laNasa.nombre);
laNasa.cohetes[0].despegar();
