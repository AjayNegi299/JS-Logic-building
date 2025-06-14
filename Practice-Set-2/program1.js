// write a function that determind number is odd or even

/*
1. create a function and take 1 input
2. check the condition number is even or odd using if-else 
3. if number is odd then return odd and number is even the return even to function
4. call the function and give input No

*/

function evenOdd(val){
    if(val <=0){
        throw new RangeError('value should be positive Number')
    }
    const remainder = val % 2

    if(remainder === 0){
        return 'Number is Even'
    }
    else{
        return 'Number is Odd'
    }
}

// let result = evenOdd(13)  // good practice
// console.log(result);

console.log(evenOdd(13));
console.log(evenOdd(22));
// console.log(evenOdd(-2));
// console.log(evenOdd(0));
// console.log(evenOdd(-3));


// 2nd way to do same task

function checkEvenOrOdd(number){
    return number % 2 === 0 ? 'even' : 'odd'
}
const result = checkEvenOrOdd(13)
console.log(`This is "${result}" Number`);