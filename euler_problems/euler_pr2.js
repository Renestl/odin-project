// Problem 2 By considering the terms in the Fibonacci
//sequence whose values do not exceed four million, find the sum of the even-valued terms.

function sumFibs(num) {
  
  var previous = 0,
      current = 1,
      sum = 0;
      
      while(current <= num) {
        if(current % 2 !== 0 ) {
          sum += current;
        }
        
        var currsum = current + previous;
        previous = current;
        current = currsum;
        
      }
      
 console.log(sum);
}

sumFibs(1000);
