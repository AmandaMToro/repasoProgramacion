function nombres1 (todos:string[])
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
    nombres1(["Maria", "Marta", "Manuel"])