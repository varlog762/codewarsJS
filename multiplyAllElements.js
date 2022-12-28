function cmultiplyAll(arr) {
    function multiplyFunc(factor) {
        const resultArr = [];

        for (let i = 0; i < arr.length; i++) {
            resultArr.push(arr[i] * [factor]);
        } 

        return resultArr;
    }

    return multiplyFunc;
}


console.log(carry([1,4,5,67])(5));