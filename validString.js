var count = 0;


var validWord = function (dictionary, word) {
    let newWord = word;

    while (count < dictionary.length) {
        for (let i = count; i < dictionary.length; i++) {
            newWord = newWord.split(dictionary[i]).join('');
        }

        if (newWord.length == 0) {
            return true;
        } else {
            count++;
            newWord = word;
            validWord(dictionary, word);
        }
    }

    return false;
};

console.log(validWord(['code', 'wars'], 'codewarscode'));

// var validWord = function (dictionary, word) {
//     for (let value of dictionary) {
//         if (word.indexOf(value) == -1) {
//             return false;
//         }
//     }
//     return true;
// };


var validWord = function (dictionary, word) {
    for (let value of dictionary) {
        word = word.split(value).join('');
    }
    return (word.length == 0);
};

// function validWord(dictionary, word) {
//     for (let item of dictionary) {
//         for (let i = 0; i < dictionary.length; i++) {
//             if (item + dictionary[i] === word) 
//             return true;
//         }
//     }

//     return false;
// }
// function validWord(dictionary, word) {
//     let setFromDict = new Set(String(dictionary).split('')),
//         setFromWord = new Set(word.split(''));

//         console.log(setFromDict, setFromWord);

//     let newWord = Array.from(setFromWord).sort().join(''),
//         newDict = Array.from(setFromDict).sort().join('');

//         console.log(newDict, newWord);

//     return newDict.includes(newWord);
// }