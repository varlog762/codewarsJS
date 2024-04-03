function narcissistic(value) {
  const digitsCollection = value.toString().split('');
  const exponent = digitsCollection.length;
  const res = digitsCollection.reduce(
    (acc, digit) => (acc += Math.pow(+digit, exponent)),
    0
  );

  return res === value;
}

console.log(narcissistic(153)); // true
