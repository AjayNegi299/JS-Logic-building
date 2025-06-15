//write a function that calculate factorial of given number

/*
1. create a fucntion that contain one para
2. use loop for irriate input value
3. create empty var to hold multiple value
*/

function factorial(val) {
  if (val < 0) {
    throw new Error("Number should be positive");
  }
  let fact = 1;
  for (let i = 1; i <= val; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
factorial(6);
factorial(5);
factorial(-5);
factorial(0);

// Make this using recursion

function calculateFactorialUsingRecursion(val) {
  if (val < 0) {
    throw new Error("Please! Enter a number less then zero and equal to zero");
  }

  if (val === 0 || val === 1) {
    return 1;
  }
  return val * calculateFactorialUsingRecursion(val - 1);
}
console.log(calculateFactorialUsingRecursion(5));
console.log(calculateFactorialUsingRecursion(0)); // 1
console.log(calculateFactorialUsingRecursion(1)); // 1
console.log(calculateFactorialUsingRecursion(3)); // 6
console.log(calculateFactorialUsingRecursion(5)); // 120
console.log(calculateFactorialUsingRecursion(-2)); // Throws Error
