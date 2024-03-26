function duplicateCount(text) {
  const countOfChars = {};

  text
    .toLowerCase()
    .split('')
    .forEach(char => {
      countOfChars[char] ? (countOfChars[char] += 1) : (countOfChars[char] = 1);
    });

  return Object.entries(countOfChars).filter(item => item[1] > 1).length;
}

// ChatGPT:

// function duplicateCount(text) {
//   const countOfChars = text.toLowerCase().split('').reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});

//   return Object.values(countOfChars).filter(count => count > 1).length;
// }

console.log(duplicateCount('Indivisibilities'));
