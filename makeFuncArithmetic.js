function arithmetic(a, b, operator) {
    switch (operator) {
        case 'add':
            return (a + b);
            break;
        case 'subtract':
            return (a - b);
            break;
        case 'multiply':
            return (a * b);
            break;
        case 'divide':
            return (a / b);
            break;
    }

}

console.log(arithmetic(12, 3, 'add'));



// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5