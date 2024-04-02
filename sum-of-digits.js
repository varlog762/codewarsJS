function digitalRoot(n) {
  let res = n;

  while ((res + '').split('').length > 1) {
    const nDigitsCollection = (res + '').split('');

    res = nDigitsCollection.reduce((acc, digit) => {
      return (acc += +digit);
    }, 0);
  }

  return res;
}

console.log(digitalRoot(493193));
