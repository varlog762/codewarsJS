function findRoutes(routes) {
  let final;

  routes.forEach(startRoute => {
    const result = [startRoute[0], startRoute[1]];

    while (true) {
      const nextRoute = routes.find(
        route => route[0] === result[result.length - 1]
      );

      if (nextRoute) {
        result.push(nextRoute[1]);
      } else if (result.length === routes.length + 1) {
        final = result;
        break;
      } else {
        break;
      }
    }
  });

  return final.join(', ');
}

console.log(
  findRoutes([
    ['San Policarpo', 'Oras'],
    ['Balangiga', 'Lawaan'],
    ['Borongan', 'Maydolong'],
    ['Jipapad', 'Maslog'],
    ['Balangkayan', 'Llorente'],
    ['Mercedes', 'Guiuan'],
    ['Taft', 'Sulat'],
    ['Sulat', 'San Julian'],
    ['Arteche', 'San Policarpo'],
    ['Oras', 'Dolores'],
    ['Dolores', 'Can-avid'],
    ['Can-avid', 'Taft'],
    ['San Julian', 'Borongan'],
    ['Maydolong', 'Balangkayan'],
    ['Llorente', 'Hernani'],
    ['Hernani', 'General MacArthur'],
    ['General MacArthur', 'Giporlos'],
    ['Giporlos', 'Balangiga'],
    ['Lawaan', 'Salcedo'],
    ['Salcedo', 'Mercedes'],
    ['Maslog', 'Arteche'],
  ])
);
