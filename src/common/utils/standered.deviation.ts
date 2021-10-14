export const  getStandarDeviation=(arr:number[])=>{
    
    let mean = arr.reduce((acc, curr)=>{
      return acc + curr
    }, 0) / arr.length;
     
    
    arr = arr.map((k)=>{
      return (k - mean) ** 2
    })
     
    
   let sum = arr.reduce((acc, curr)=> acc + curr, 0);
    
   // Returning the Standered deviation
   return Math.sqrt(sum / arr.length)

  }