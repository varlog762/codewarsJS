function findDup(arr) {
    let arrSort = arr.sort();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            return arr[i];
        }
    }
}


findDup([1, 3, 2, 4, 5, 6, 4]);