// write a function that count the occurence of string
const findOccurence = function(input){
    if(typeof input === 'number'){
        throw new TypeError("Input should be string only")
    }
    const obj = {}
    const inputString = input.toLowerCase()
    for (let i = 0; i < inputString.length; i++) {
        if(!obj[inputString[i]]){
            obj[inputString[i]] = 0
        }
        obj[inputString[i]] = obj[inputString[i]] +1   
    }
    return obj
}

console.log(findOccurence('Ajay Negi'));
console.log(findOccurence('Nandan singh negi'));
console.log(findOccurence('Hello world$$'));
// console.log(findOccurence(77785214));