//write a func that calculate and print area of rectangle given its length and breath\
/*
lets break the problem

1. create a func that take 2 parameter length and breath
2. create variable area that contain the area result
3. print the area 
4. call the function and give 2 argu*

*/

function rectangle(length,breath){
    if(length <= 0){
        throw new RangeError('Length should be positive number');
    }
    if(breath <= 0){
        throw new RangeError('breath should be positive number');
    }
    const area = length * breath
    console.log(`area of rectangle is ${area}`)
}
//Test 
rectangle(10,20)
rectangle(0,30)  // give you a Error msg
rectangle(-5,-2) // give you a Error msg