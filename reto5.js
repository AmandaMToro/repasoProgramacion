function arcoIris(colores) {
    for (var i = 0; i < colores.length; i++) {
        if ((colores[i] === "Rojo") || (colores[i] === "Naranja") || (colores[i] === "Amarillo") ||
            (colores[i] === "Verde") || (colores[i] === "Azul") ||
            (colores[i] === "Índigo") || (colores[i] === "Violeta")) {
            console.log("Estan los colores en el arcoIris, bien!!");
        }
        else {
            console.log("No está en el arcoIris, pero también es bonito");
        }
    }
}
arcoIris(["Azul", "Marrón", "Verde"]);
