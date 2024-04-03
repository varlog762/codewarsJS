function persistence(num) {
  let numCollection = num.toString().split('');
  let count = 0;

  while (numCollection.length > 1) {
    const newNumCollection = numCollection
      .reduce((acc, item) => acc * item, 1)
      .toString()
      .split('');

    numCollection = newNumCollection;
    count++;
  }

  return count;
}

console.log(persistence(999)); // 4
