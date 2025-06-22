const calculateAverage=(array)=>{
     if (!Array.isArray(array)) {
        throw new TypeError('Invalid Input type');
    }

    // Keep only numeric values
    const numericValue = array.filter((num) => typeof num === "number");

    if (numericValue.length === 0) {
        throw new TypeError('Array has no numeric values');
    }

    const total = numericValue.reduce((sum, num) => sum + num, 0);
    return total / numericValue.length;

    let result = 0
    arraylength = array.length
    for (let i = 0; i < arraylength; i++) {
        result += array[i]
    }
    result = result / arraylength
    return result
}

console.log(calculateAverage([2,4,5,6,7,8])); 
console.log(calculateAverage([2,4,8,6,7,9])); 
console.log(calculateAverage([1,7,5,9,74,6])); 
console.log(calculateAverage([2,3,4,5])); 