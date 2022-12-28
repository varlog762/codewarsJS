function cake(x, y) {
    let res = 0,
        result;

    for (let i = 0; i < y.length; i++) {
        if (i % 2 == 0) {
            res += y.charCodeAt(i);
            console.log(res);
        } else {
            res += (i + 1);
            console.log(res);
        }
    }
    console.log(res, (x * 0.7));

    ((x/100*70) < res) ? result = 'Fire!': result = 'That was close!';
    console.log(result);
    return result;
}

cake(335, 'qyf');