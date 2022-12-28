function isAnagram(test, original) {
    let testSort = test.toLowerCase().split('').sort().join(''),
        origSort = original.toLowerCase().split('').sort().join('');

    if (test.length != original.length) {
        return false;
    }

    for (let i = 0; i < test.length; i++) {
        if (testSort[i] != origSort[i]) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram('RydqPfjiPrfNJ', 'dfrPPzjNRJfiqy'));