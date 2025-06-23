const isPrimeNumber = (inputNumber)=>{
    for(let i = 2; i < inputNumber;i++){
    if(inputNumber % i === 0){
        return `is Not a Prime Number`
    }else{
        return `is prime Number`
    }
}
}
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));
console.log(isPrimeNumber(13));
console.log(isPrimeNumber(20));
console.log(isPrimeNumber(29));