function numObj(s) {
    const result = [];
    for (let value of s) {
        const obj = {}
        obj[value] = String.fromCharCode(value);
        result.push(obj)
    }

    return result;
}

console.log(numObj([101,121,110,113,113,103]));