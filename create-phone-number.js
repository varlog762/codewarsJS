function createPhoneNumber(numbers) {
  return numbers.reduce((acc, digit, idx) => {
    switch (idx) {
      case 2:
        acc += `${digit}) `;
        break;
      case 5:
        acc += `${digit}-`;
        break;
      default:
        acc += digit;
    }

    return acc;
  }, '(');
}

console.log(createPhoneNumber([3, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
