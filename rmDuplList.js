function distinct(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(distinct([2261114, 4027086, 2261114, 4027086, 2261114, 4027086, 2261114, 4027086, 2261114, 4027086, 2261114]));

// [ 2261114, 4027086, 2261114, 4027086, 2261114, 4027086, 2261114, 4027086, 2261114, 4027086, 2261114 ] to deeply equal [ 2261114, 4027086 ]