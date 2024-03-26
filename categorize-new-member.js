function openOrSenior(data) {
  const res = [];

  data.forEach((personData) => {
    personData[0] >= 55 && personData[1] > 7
      ? res.push("Senior")
      : res.push("Open");
  });

  return res;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
