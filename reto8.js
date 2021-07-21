"use strict";
exports.__esModule = true;
exports.sumar = void 0;
function sumar(arraySum) {
    var sumaLetras = 0;
    for (var key in arraySum) {
        sumaLetras += arraySum[key].length;
    }
    return sumaLetras;
}
exports.sumar = sumar;
console.log(sumar(["La vida de Pi", "Paco"]));
