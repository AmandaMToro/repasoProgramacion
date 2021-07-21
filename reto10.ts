import {sumar} from "./reto8"
import { numeroParOImpar } from "./reto9"

function sumCarParImp(arraysTodos: string[])
{
    let sumarLetArrays = sumar(arraysTodos);
    numeroParOImpar(sumarLetArrays);
}
let arrays1: string[] = ["Casa","Coche","Ciudad","Cesta"];
let arrays2 :string[]= ["BArco","Baca","Bicicleta","Balón","Bisiesto","Brasil"];
let arrays3 :string[]= ["Venezuela","Veneno","Voltaje"];

sumCarParImp(arrays1);
sumCarParImp(arrays2);
sumCarParImp(arrays3);

