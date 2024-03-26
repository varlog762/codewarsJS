function XO(str) {
  let oCount = 0;
  let xCount = 0;

  str
    .toLowerCase()
    .split('')
    .forEach(char => {
      if (char === 'o') oCount++;
      if (char === 'x') xCount++;
    });

  return oCount === xCount;
}

console.log(XO('ooxXm'));
