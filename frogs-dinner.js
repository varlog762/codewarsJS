function frogContest(n) {
  if (n && n <= 200) {
    const sumCounter = num => {
      return ((num + 1) * num) / 2;
    };

    const chrissDinner = sumCounter(n);
    const tomsDinner = sumCounter(Math.floor(chrissDinner / 2));

    return `Chris ate ${chrissDinner} flies, Tom ate ${tomsDinner} flies and Cat ate ${sumCounter(
      chrissDinner + tomsDinner
    )} flies`;
  }
}

console.log(frogContest(200));
