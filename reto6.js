function paresImpares(arrayNumeros) {
    var i = 0;
    while (i < arrayNumeros.length && arrayNumeros[i] % 2 !== 0) {
        i++;
    }
    var condicion = i < arrayNumeros.length ? true : false;
    return condicion;
}
var muestraArrays = [4, 9, 8, 7, 2, 3];
console.log(paresImpares(muestraArrays));
