const number = busStops => {
  return busStops.reduce((acc, busStop) => {
    acc += busStop[0] - busStop[1];

    return acc;
  }, 0);
};

console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
