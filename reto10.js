"use strict";
exports.__esModule = true;
var reto8_1 = require("./reto8");
var reto9_1 = require("./reto9");
function sumCarParImp(arraysTodos) {
    var sumarLetArrays = reto8_1.sumar(arraysTodos);
    reto9_1.numeroParOImpar(sumarLetArrays);
}
var arrays1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var arrays2 = ["BArco", "Baca", "Bicicleta", "Balón", "Bisiesto", "Brasil"];
var arrays3 = ["Venezuela", "Veneno", "Voltaje"];
sumCarParImp(arrays1);
sumCarParImp(arrays2);
sumCarParImp(arrays3);
