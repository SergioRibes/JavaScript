let array = [0,10,20,30];

function boolean (arr, n) {
    for (i=0; i < arr.length; i++) {
        if (arr[i] === n) {
            return true;
        }
        
        
}
    return false;
}

console.log(boolean(array,5));