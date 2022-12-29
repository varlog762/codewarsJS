function count(string) {
    let res = {};

    for (let i = 0; i < string.length; i++) {
        res[string[i]] = 0;
    }

    for (let i = 0; i < string.length; i++) {
        res[string[i]] += 1;
    }

    return res;
}


console.log(count(''))