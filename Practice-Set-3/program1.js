//write a function that calculate factorial of given number

/*
1. create a fucntion that contain one para
2. use loop for irriate input value
3. 
*/

function factorial(val){
     let fact = 1
     for (let i = 1; i <= val; i++) {
        fact = fact * i
        
     }
     console.log(fact);

}
factorial(6)
factorial(5)
factorial(-5)
factorial(0)




