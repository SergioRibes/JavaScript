let numbers = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens =[];
let odds = [];

for(i = 0;i < numbers.length; i++) {
    if(numbers[i]%2 == 0){
        evens.push(numbers[i]);
    }else{
        odds.push(numbers[i]);
    }
}

console.log(evens);
console.log(odds);