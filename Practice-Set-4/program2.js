function findingMaxElement(array){
     if(array==0){
        throw new Error('Input should not be Null')
     }
    max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
        
    }
    return max
}
console.log(findingMaxElement([1,5,11,6,2,3,1]));
console.log(findingMaxElement([10,20,80,110]));
console.log(findingMaxElement([]));