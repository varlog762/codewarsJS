function order(words) {
  const wordsCollection = words.split(' ');
  const resultCollection = [];

  for (let i = 1; i <= wordsCollection.length; i++) {
    resultCollection.push(
      wordsCollection.find(word => word.includes(i.toString()))
    );
  }

  return resultCollection.join(' ');
}

console.log(order('is2 Thi1s T4est 3a')); // Thi1s is2 3a T4est
