function isLeapYear(year){
    if(year % 4 === 0 && year !== 100 || year % 400 === 0){
        return 'Leap Year'
    }
    else{
        return 'Not Leap year'
    }
}

console.log(isLeapYear(2002));
console.log(isLeapYear(2022));
console.log(isLeapYear(1997));
console.log(isLeapYear(2020));