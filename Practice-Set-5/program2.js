// write a fucntion to calculate a vowel and constrant number in a string

const calculateVowelAndConstants = (inputString)=>{
    console.log(inputString);
    let vowel = 'aeiou'
    let vowelCount = 0
    let constantCount = 0
    inputString = inputString.replace(' ','')
    for (let i = 0; i < inputString.length; i++) {
        if(vowel.includes(inputString[i].toLowerCase())){
            vowelCount++
        }
        else{
            constantCount++
        }
        
    }
    return`Vowel ${vowelCount} constants ${constantCount}`;

}
console.log(calculateVowelAndConstants('HEllO World'));