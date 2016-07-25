//Problem1. Find the sum of all the multiples of 3 or 5 below 1000.

function sumFibs(num) {
  
  var sum = 0;
  
  for (i = 0; i < num; i++) {
  	if (i % 5 === 0 || i % 3 === 0) {
  		sum += i;
  	}
  }
  
   console.log(sum);
}

sumFibs(1000);
