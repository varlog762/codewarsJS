var validWord = function (dictionary, word) {
    for (let value of dictionary) {
        word = word.split(value).join('');
    }
     return (word.length == 0);
};

console.log(validWord(['a', 'b', 'c', 'd', 'e', 'f'], 'abcdef'));

// var validWord = function (dictionary, word) {
//     for (let value of dictionary) {
//         if (word.indexOf(value) == -1) {
//             return false;
//         }
//     }
//     return true;
// };
