function deleteNth(arr, n) {
  const checkObj = {};

  return arr.filter(item => {
    if (n === 0) return [];

    if (!checkObj[item]) {
      checkObj[item] = 1;
      return item;
    }

    if (checkObj[item] < n) {
      checkObj[item] += 1;
      return item;
    }

    return;
  });
}

console.log(deleteNth([20, 37, 20, 21], 1));
