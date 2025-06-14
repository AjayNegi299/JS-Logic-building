// write a function that return a reverse string

/*
1. create func and take input
2. create a for loop for interate from end to start using length
3. need to create empty string to hold result
*/

function reverseString(str){
if( typeof str !=='string'){
   throw new TypeError('input should be only string')
}   
let newString = ''

for(let i = str.length - 1; i >= 0; i--){
    newString += str[i]
    ;
}
console.log(`first way: `,newString);
}

reverseString('javaScript')
reverseString('Software Developement')
// reverseString(12345)


// second way to doing this

function reverseString2(str){
    let stringArray = str.split('')
    let reverseString = stringArray.reverse()
    let result = reverseString.join('')
    console.log(`Second way: `,result);
}
reverseString2('javaScript')
reverseString2('Software Developement')