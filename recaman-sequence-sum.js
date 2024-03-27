// function rec(x) {
//   const seqState = {
//     elemsSet: new Set([0]),
//     lastElem: 0,
//     sum: 0,
//   };

//   const findCurrentElem = (idx, state) => {
//     const elem = state.lastElem - idx;

//     if (elem >= 0 && !state.elemsSet.has(elem)) {
//       state.elemsSet.add(elem);
//       state.lastElem = elem;
//       state.sum += elem;

//       return;
//     }

//     state.lastElem += idx;
//     state.sum += state.lastElem;
//     state.elemsSet.add(state.lastElem);
//   };

//   for (let i = 1; i < x; i++) {
//     findCurrentElem(i, seqState);
//   }

//   return seqState.sum;
// }

function rec(x) {
  const seqState = {
    elemsSet: new Set([0]),
    lastElem: 0,
    sum: 0,
  };
  const arr = new Array(x).fill(1);

  return arr.reduce((acc, item, idx) => {
    const elem = acc.lastElem - idx;

    if (elem >= 0 && !acc.elemsSet.has(elem)) {
      acc.elemsSet.add(elem);
      acc.lastElem = elem;
      acc.sum += elem;

      return acc;
    }

    acc.lastElem += idx;
    acc.sum += acc.lastElem;
    acc.elemsSet.add(acc.lastElem);

    return acc;
  }, seqState).sum;
}

// ChatGPT solution:

// function rec(x) {
//   const seq = [0]; // Инициализация массива с первым элементом 0

//   for (let i = 1; i < x; i++) {
//     const prev = seq[i - 1];
//     const next = prev - i;

//     if (next < 0 || seq.includes(next)) {
//       seq.push(prev + i); // Если условие для следующего элемента не выполняется, используйте формулу prev + i
//     } else {
//       seq.push(next); // Иначе используйте значение next
//     }
//   }

//   // Находим сумму элементов массива seq
//   return seq.reduce((sum, num) => sum + num, 0);
// }

console.log(rec(5));
