function findOdd(arr) {
  const stat = arr.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;

    return acc;
  }, {});

  const res = Object.entries(stat).filter(item => item[1] % 2 === 1);

  return +res[0][0];
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
