
function paresImpares(arrayNumeros:number[])
{
    let i:number=0;
    while(i < arrayNumeros.length && arrayNumeros[i]%2 !==0)
    {
        i++;
    }
    let condicion:boolean= i<arrayNumeros.length ? true:false
    return condicion;
}
let muestraArrays:number[]=[4,9,8,7,2,3];
console.log(paresImpares(muestraArrays));


