function squareDigits(num) {
    let result = '',
        arr = num.toString().split('');

    for (let value of arr) {
        result += value * value;
    }
    
    return +result;
}

console.log(squareDigits(3212));