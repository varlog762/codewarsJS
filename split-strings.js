function solution(str) {
  const finalStr = str.length % 2 ? (str += '_') : str;

  return finalStr.split('').reduce((acc, char, idx, arr) => {
    if (idx % 2) {
      acc.push(arr[idx - 1] + arr[idx]);
    }

    return acc;
  }, []);
}

// 'abc' =>  ['ab', 'c_']

console.log(solution('abc'));
