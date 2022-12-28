function mygcd(x, y) {
    let arr = [],
        min,
        max;

    (x > y) ? (min = y) && (max = x) : (min = x) && (max = y);

    for (let i = 1; i <= min; i++) {
        if (min % i == 0) {
            arr.push(i);
        }
    }

    for (let i = arr.length-1; i >= 0; i--) {
        if (max % arr[i] == 0) {
            return arr[i];
        }
    }
}

mygcd(35, 17);