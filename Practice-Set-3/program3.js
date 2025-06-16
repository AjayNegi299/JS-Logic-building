// Write a fucntion calculate sum of all digit in given number

function calculateSumOfAllDigit(val){
    let sum = 0
    const inputNumberAsString = val.toString();
    const splittedInputString = inputNumberAsString.split('')
    splittedInputString.forEach(element => {
         sum += parseInt(element);
    });
    return sum
}
console.log(calculateSumOfAllDigit(12));
console.log(calculateSumOfAllDigit(123));
console.log(calculateSumOfAllDigit(1234));
console.log(calculateSumOfAllDigit(123446));  


// Second way to solve this answer
function calculateSumOfAllDigit2(inputNumber){
    let sum = 0
    let number = inputNumber
    while(number > 0){
    let lastDigit = number % 10;
    number = Math.floor(number / 10)
    sum = sum + lastDigit
    }
    return sum
}
console.log('Second Function Answer');
console.log(calculateSumOfAllDigit2(12));
console.log(calculateSumOfAllDigit2(123));
console.log(calculateSumOfAllDigit2(1234));
console.log(calculateSumOfAllDigit2(123446));