// write a function to calculate celcius into fehrenheit and fehrenheit into celcius 

/* 
work Flow =>
Input Value → Passed to `calculate` → Forwarded to logic function → Result calculated → Output returned
*/

const convertFahrenheit = function(celcuis){
    return (celcuis * 9/5) + 32
}

const convertCelcius = function(Fahrenheit){
    return (Fahrenheit - 32) * 5/9
} 

const calculate = function(value,logic){
    return logic(value)   
}
console.log(calculate(35,convertFahrenheit));
console.log(calculate(95,convertCelcius));