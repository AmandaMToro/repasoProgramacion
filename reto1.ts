function zodiacoSigno(mes:number, dia:number) 
{
    if((mes == 1 && dia <= 20) || (mes == 12 && dia >=22)) 
    {
        return "capricornio";
      } 
      else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) 
      {
        return "acuario";
      } 
      else if((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) 
      {
        return "piscis";
      } else if((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) 
      {
        return "aries";
      } 
      else if((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) 
      {
        return "taurus";
      } 
      else if((mes === 5 && dia >= 21) || (mes == 6 && dia <= 20)) 
      {
        return "geminis";
      } 
      else if((mes == 6 && dia >= 22) || (mes == 7 && dia <= 22)) 
      {
        return "cancer";
      } 
      else if((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)) 
      {
        return "leo";
      } 
      else if((mes == 8 && dia >= 24) || (mes == 9 && dia <= 23)) 
      {
        return "virgo";
      } 
      else if((mes == 9 && dia >= 24) || (mes == 10 && dia <= 23)) 
      {
        return "libra";
      } 
      else if((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) 
      {
        return "escorpio";
      } 
      else if((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) 
      {
        return "sagitario";
      }
      
}
console.log(zodiacoSigno(4,9));