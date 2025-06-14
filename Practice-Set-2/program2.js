// write a function that determind smallest number from three numbers

/*
1. create function and take 3 input a, b,c.
2. check a is smaller then b if yes then check a is smaller then d.
3. return a result to functio
4. call and print

*/

function smallestNumber(a,b,c){
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new TypeError('All inputs must be numbers.');
    }
   let smaller = a;
   let lebel = 'A'

   if(b < smaller){
    smaller = b
    lebel = 'B'
   }
   if(c < smaller){
    smaller = c
    lebel = 'C'
   }

   return `${lebel} is smaller ${smaller}`
}

console.log(smallestNumber(10,12,14));
console.log(smallestNumber(20,12,14));
console.log(smallestNumber(16,15,14));
console.log(smallestNumber(-10,12,14));
console.log(smallestNumber(8,0,14));
console.log(smallestNumber('abc',8,8));


