// Problem 3. What is the largest prime factor of the number 600851475143 ?

function isPrime(num) {
  
  for (var i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  num = 600851475143;

  for(i = 2; i < num; i++) {
  	if (num % i === 0 && isPrime(i)) {
  		prime = i;
  	}
  
  }
  
 console.log(prime);
 
