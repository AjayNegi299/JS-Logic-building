// write a function that indentify string is palinedrome or not

function isPalinedrone(string){
      for (let i = 0; i <= string.length - 1; i++) {
         if(string[i]!==string[string.length - 1- i]){
            return `Not Palinedrome 😨`
         }
      }
      return `this '${string}' string is Palinedrome 😁`
}
// console.log(isPalinedrone('ajay'));
// console.log(isPalinedrone('madam'));
// console.log(isPalinedrone('level'));


// Second method to do this
function isPalinedrone2(string){
      let start = 0
      let end = string.length - 1 
      for(start, end; start < end; start++,end--){
         if(string[start]!==string[end]){ 
            return false
      }
   }
   return true
}
// console.log(isPalinedrone2('ajay'));
// console.log(isPalinedrone2('madam'));
// console.log(isPalinedrone2('level'));




// third method to do this
function isPalinedrone3(string){
     let splitString = string.split('')
     let reverseString = splitString.reverse()
     let newString = reverseString.join('')
     if(newString !== string){
         return false
     }
     return true
}
console.log(isPalinedrone3('ajay'));
console.log(isPalinedrone3('madam'));
console.log(isPalinedrone3('level'));