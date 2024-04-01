function solution(string) {
  const charsCollection = string.split('');
  const idxCollection = charsCollection.reduce((acc, char, idx) => {
    if (char.toUpperCase() === char) acc.push(idx);

    return acc;
  }, []);

  idxCollection.reverse().forEach(idx => {
    const char = charsCollection[idx];
    charsCollection.splice(idx, 1, ' ', char);
  });

  return charsCollection.join('');
}

console.log(solution('camelCasingTest'));
