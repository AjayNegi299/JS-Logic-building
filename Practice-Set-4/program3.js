function isPalinedrone(string){
      for (let i = 0; i <= string.length - 1; i++) {
         if(string[i]!==string[string.length - 1- i]){
            return `Not Palinedrome 😨`
         }
         
      }
      return `this '${string}' string is Palinedrome 😁`
}
console.log(isPalinedrone('ajay'));
console.log(isPalinedrone('madam'));
console.log(isPalinedrone('level'));