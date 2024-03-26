// function accum(s) {
//   const result = [];

//   s.toLowerCase()
//     .split('')
//     .forEach((char, idx) => {
//       let subStr = '';

//       for (let i = 0; i < idx + 1; i++) {
//         i === 0 ? (subStr += char.toUpperCase()) : (subStr += char);
//       }

//       result.push(subStr);
//     });

//   return result.join('-');
// }

function accum(s) {
  return s
    .toLowerCase()
    .split('')
    .reduce((acc, char, idx) => {
      let subStr = '';

      for (let i = 0; i < idx + 1; i++) {
        i === 0 ? (subStr += char.toUpperCase()) : (subStr += char);
      }

      acc.push(subStr);

      return acc;
    }, [])
    .join('-');
}

// ChatGPT:
// function accum(s) {
//   return s
//     .split('')
//     .map((char, idx) => {
//       return char.toUpperCase() + char.toLowerCase().repeat(idx);
//     })
//     .join('-');
// }

console.log(accum('RqaEzty'));
