function filterString(value) {
    let result = '';

    for (let i = 0; i < value.length; i++) {
        if ((value.charCodeAt(i) >= 48) && (value.charCodeAt(i) <= 57)) {
            result += value[i];
        }
    }

    return +result;
}

filterString('aa1bb2cc3dd');