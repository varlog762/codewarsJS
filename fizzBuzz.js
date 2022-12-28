function fizzbuzz(n) {
    const resultArr = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            resultArr.push('FizzBuzz');
        } else if (i % 3 == 0) {
            resultArr.push('Fizz');
        } else if (i % 5 == 0) {
            resultArr.push('Buzz');
        } else {
            resultArr.push(i);
        }
    }

    return resultArr;
}

console.log(fizzbuzz(24));