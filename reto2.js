function continente(pais) {
    if ((pais === "España") || (pais === "Italia") || (pais === "Portugal") || (pais === "Francia") || (pais === "Alemania")) {
        console.log("Está en el continente Europeo");
    }
    else if ((pais === "Japon") || (pais === "China") || (pais === "Indonesia") || (pais === "Asia") || (pais === "Tailandia")) {
        console.log("Está en el continente Asiático");
    }
    else if ((pais === "Sudáfrica") || (pais === "Nigeria") || (pais === "Ghana") || (pais === "Kenia") || (pais === "Tanzania")) {
        console.log("Está en el continente Africano");
    }
    else if ((pais === "EE.UU") || (pais === "Canadá") || (pais === "Brasil") || (pais === "México") || (pais === "Argentina")) {
        console.log("Está en el continente Americano");
    }
    else if ((pais === "Australia") || (pais === "Nueva Zelanda") || (pais === "Fiyi") || (pais === "Zamoa") || (pais === "Palaos")) {
        console.log("Está en el continente Asiático");
    }
    else {
        console.log("Introduzca otro país, este no es válido");
    }
}
continente("Rusia");
