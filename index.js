// Function to check prime number
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Test the function
console.log(isPrime(2));   // true
console.log(isPrime(9));   // false
console.log(isPrime(17));  // true
