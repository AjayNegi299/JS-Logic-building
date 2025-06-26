/* write a fucntion that run 1 to N 
 1. multiple of 3 with "Fizz"
 2. multiple of 5 with "Buzz"
 3. multiple of 3 & 5 with "Fizz Buzz"

*/
let box = 0
const changeValue= function(input){
    for(i=1; i<= input; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(i ,"Fizz Buzz");
        }
        else if(i % 3 === 0){
            console.log(i,'Fizz');    
        }
        else if(i % 5 === 0){
            console.log(i,'Buzz');    

        }
    }
}

console.log(changeValue(20));