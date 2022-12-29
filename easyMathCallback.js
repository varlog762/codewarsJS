var myArray = [4, 8, 2, 7, 5];

function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }

    return arr;
}

function multiply(i) {
    return i * 2;
};

myArray = processArray(myArray, multiply);

console.log(myArray);