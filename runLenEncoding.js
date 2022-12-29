var runLengthEncoding = function (str) {
    const res = [];

    for (let i = 0; i < str.length; i++) {
        console.log(str[i] != str[i-1], str[i] == str[i+1]);
        if (str[i] != str[i-1] && (str[i] == str[i + 1])) {      
            res.push([1, str[i]]);
            res[res.length - 1][0] += 1;
        } else if (str[i] == str[i-1], str[i] == str[i+1]) {
            res[res.length - 1][0] += 1;
        } else if (str[i] != str[i-1]) {
            res.push([1, str[i]]);
        }
    } 

    return res; // << fix this
}

console.log(runLengthEncoding('aaab'));

// ("aab"), [[2,'a'],[1,'b']