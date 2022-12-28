function factorial(num) {
    let fact = 1;

    if (num < 0 || num > 12) {
        return 'RangeError';
    } else if (num == 0) {
        return fact;
    } else {
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
    }

    return fact;
}

console.log(factorial(5));