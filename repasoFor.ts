console.log("reto3")
function impares2(num:number) 
{
    for(let i=0 ; i<=num; i++)
    {
        if (i % 2 !== 0) 
        {
            console.log(i);
            
        }
    }
}
impares2(31)

console.log("reto4")
function array2(arrayOriginal:number[])
{
    let arrayInvertida=[];
    for(let i=arrayOriginal.length-1; i>=0; i--)
    {
        
        arrayInvertida.push(arrayOriginal[i])
    }
    return arrayInvertida
}
console.log(array2([9,2,5,8,7]));

console.log("reto5");
function arcoIris2(colores:string [] )
{
        
    for (let i=0; i<colores.length; i++)
    {   
        
        if ((colores[i] === "Rojo")|| (colores[i] === "Naranja")||(colores[i] === "Amarillo") || 
            (colores[i] === "Verde") || (colores[i] === "Azul") || 
            (colores[i] === "Índigo") || (colores[i] === "Violeta"))
            {
                console.log("Estan los colores en el arcoIris, bien!!"); 
            }
        else 
            {
                console.log("No está en el arcoIris, pero también es bonito");
            } 
    } 
}
   arcoIris2(["Azul", "Marrón", "Verde"])  

console.log("reto8");
export function sumar(arraySum:string[]) :number
{
    let sumaLetras:number = 0;
    for(let key in arraySum)
    {
        sumaLetras+= arraySum[key].length
    }
    
        return sumaLetras;
    
}
console.log(sumar(["La vida de Pi", "Paco"]));

     
  
