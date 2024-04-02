function spinWords(string) {
  return string
    .split(' ')
    .reduce((acc, word) => {
      acc +=
        word.length >= 5 ? ` ${word.split('').reverse().join('')}` : ` ${word}`;

      return acc;
    }, '')
    .trim();
}

console.log(spinWords('Hey fellow warriors'));
