function evalParentheses(parens) {
  let sum = 0;
  let multiplier = 0;
  const stack = [];

  const counter = stack => {
    stack.pop();

    if (!stack.length) {
      sum += 1;
    } else {
      multiplier = stack.length;
    }
  };

  for (let paren of parens) {
    paren === '(' ? stack.push('(') : counter(stack);
  }

  return sum;
}

console.log(evalParentheses('()(())'));
