// Write a fucntion finds all the factors of given number

const findAllFactors =(input)=>{
    if (input <=0) {
        throw new Error('Input should be Positive Number')
    }
    let result = []
    for (let i = 1; i <= input; i++) {
        if(input % i === 0){
            result.push(i)
        }
     
    }
    return result
}
console.log(findAllFactors(10))
console.log(findAllFactors(4))
console.log(findAllFactors(0))