
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

     
  