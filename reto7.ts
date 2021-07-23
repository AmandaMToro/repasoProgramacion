function nombres1 (todos:string[])
{   let empiezaPorM:Boolean = true;
    let i=0;
    while(i<todos.length && empiezaPorM === true)
    {
        if(todos[i][0] === "M") 
        {
           empiezaPorM = false;
       
        }
        else
        {
            i++;
        }
    }  
        return empiezaPorM;
    
}
  let primerArray :string[] = ["Maria", "Marta", "Manuel", "Amanda"];
console.log(nombres1(primerArray));





