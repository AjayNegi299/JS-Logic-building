// write a function to calculate a number of words

function calculateNumberOfWords(string){
    if(typeof string === 'string'){
         const inputString = string.split(' ')
        const nonSpilitedSentense = inputString.filter(word => word != '');
         return nonSpilitedSentense.length
    }
    else{
        throw new TypeError('input should be a string')
    }
       
}
console.log(calculateNumberOfWords('hi my name is ajay'));
console.log(calculateNumberOfWords('hi    my       name         is   ajay'));
console.log(calculateNumberOfWords('hi my name is   ajay'));
console.log(calculateNumberOfWords('hi my         name is ajay'));
console.log(calculateNumberOfWords(4552));