function towerBuilder(nFloors) {
  const tower = [];
  let spaceCount = (nFloors - 1) * 2;
  let brickCount = 1;

  for (let i = 0; i < nFloors; i++) {
    const floor =
      ' '.repeat(spaceCount / 2) +
      '*'.repeat(brickCount) +
      ' '.repeat(spaceCount / 2);

    tower.push(floor);
    spaceCount -= 2;
    brickCount += 2;
  }

  return tower;
}

console.log(towerBuilder(5));
