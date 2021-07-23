console.log("reto6");

function paresImpares2(arrayNumeros:number[])
{
    let i:number=0;
    while(i < arrayNumeros.length && arrayNumeros[i]%2 !==0)
    {
        i++;
    }
    let condicion:boolean= i<arrayNumeros.length ? true:false
    return condicion;
}
let muestraArrays2:number[]=[4,9,8,7,2,3];
console.log(paresImpares2(muestraArrays2));



console.log("reto7");
function nombres2 (todos:string[])
{ 
  let i=0;
    while(i<todos.length)
    {
        if(todos[i].charAt(0) === "M") 
        {
            i++
            console.log(true);
        }    
    }

}
    nombres2(["Maria", "Marta", "Manuel"])

