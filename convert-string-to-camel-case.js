function toCamelCase(str) {
  const charCollection = str.split('');

  charCollection.forEach((char, idx) => {
    if (char === '-' || char === '_') {
      charCollection.splice(idx, 2, charCollection[idx + 1].toUpperCase());
    }
  });

  return charCollection.join('');
}

console.log(toCamelCase('the_stealth-warrior'));
