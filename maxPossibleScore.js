function maxPossibleScore(obj, arr) {
    let sum = 0;

    for (let key in obj) {
        arr.forEach(item => {
            (item === key? (obj[key] *= 2): obj[key]);
        });

        sum += obj[key];
    }

    return sum;
}

console.log(maxPossibleScore({ RANDOM: 836.8219343124667, Number: 50 }, ["RANDOM", "Number"]));