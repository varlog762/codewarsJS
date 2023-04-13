function validWord(dictionary, word) {
    for (let item of dictionary) {
        for (let i = 0; i < dictionary.length; i++) {
            if (item + dictionary[i] === word) 
            return true;
        }
    }

    return false;
}

console.log(validWord(['code', 'star', 'wars'], 'starwars'));

// var validWord = function (dictionary, word) {
//     for (let value of dictionary) {
//         if (word.indexOf(value) == -1) {
//             return false;
//         }
//     }
//     return true;
// };


// var validWord = function (dictionary, word) {
//     for (let value of dictionary) {
//         word = word.split(value).join('');
//     }
//      return (word.length == 0);
// };

// function validWord(dictionary, word) {
//     let setFromDict = new Set(String(dictionary).split('')),
//         setFromWord = new Set(word.split(''));

//         console.log(setFromDict, setFromWord);

//     let newWord = Array.from(setFromWord).sort().join(''),
//         newDict = Array.from(setFromDict).sort().join('');

//         console.log(newDict, newWord);

//     return newDict.includes(newWord);
// }