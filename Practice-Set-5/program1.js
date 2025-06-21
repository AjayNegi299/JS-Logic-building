// write a function that find a power of number

function findPowerOfNumber(Base,Exponent){
    if(Base <= 0 || Exponent <= 0){
        throw new Error('Base and Exponent should be postive')
    }
    let result=1
    for (let i = 1; i <= Exponent; i++) {
        result *= Base        
    }
    return result
}

console.log(findPowerOfNumber(2,5));
console.log(findPowerOfNumber(4,3));
console.log(findPowerOfNumber(8,3));
// console.log(findPowerOfNumber(15,0));