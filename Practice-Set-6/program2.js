// write a function to calculate simple interest

const calculateSimpleInterest=(principle,intRate,TimeDur)=>{
    if(
        typeof principle !== 'number' || isNaN(principle) || principle < 0
        || typeof intRate !== 'number' || isNaN(principle) || principle < 0
        || typeof TimeDur !== 'number' || isNaN(principle) || principle < 0

    ){
        throw new TypeError('Invalid input: Please enter positive numeric values only.')
    }
    let interestAmount = (principle * intRate * TimeDur) / 100
    interestAmount = interestAmount.toFixed(2)
    return interestAmount
}
console.log(calculateSimpleInterest(10000,10,5));
console.log(calculateSimpleInterest(10000.75,10,5));
console.log(calculateSimpleInterest(10000,10.2,2.5));
console.log(calculateSimpleInterest(10000,10, 5));