const maxSequence = arr => {
  let maxSum = 0;

  arr.forEach((num, idx) => {
    const subArr = arr.slice(idx);

    const sumsCollection = subArr.reduce(
      (acc, item) => {
        acc.push(acc.at(-1) + item);

        return acc;
      },
      [0]
    );

    newSum = Math.max(...sumsCollection);
    newSum > maxSum ? (maxSum = newSum) : null;
  });

  return maxSum;
};

// ChatGPT:

// const maxSequence = arr => {
//   let maxEndingHere = 0;
//   let maxSoFar = 0;

//   arr.forEach(num => {
//     maxEndingHere = Math.max(0, maxEndingHere + num);
//     maxSoFar = Math.max(maxSoFar, maxEndingHere);
//   });

//   return maxSoFar;
// };

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
