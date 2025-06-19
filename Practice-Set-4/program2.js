function findingMaxElement(){
    array = [1,5,11,6,2,3,1]
    max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
        
    }
    console.log(max);
}
findingMaxElement()