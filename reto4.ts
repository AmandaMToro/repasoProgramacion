

function array1(arrayOriginal:number[])
{
    let arrayInvertida=[];
    for(let i=arrayOriginal.length-1; i>=0; i--)
    {
        
        arrayInvertida.push(arrayOriginal[i])
    }
    return arrayInvertida
}
console.log(array1([9,2,5,8,7]));
