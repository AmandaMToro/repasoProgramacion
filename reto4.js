function array1(arrayOriginal) {
    var arrayInvertida = [];
    for (var i = arrayOriginal.length - 1; i >= 0; i--) {
        arrayInvertida.push(arrayOriginal[i]);
    }
    return arrayInvertida;
}
console.log(array1([9, 2, 5, 8, 7]));
