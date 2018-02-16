function min(a, b) {
    var c;
    c = a - b;
    if (c < 0) return a;
    else if (c > 0) return b;
}

function min(a, b) {
    var c;
    c = a - b;
    if (c < 0) return a;
    else if (c > 0) return b;
}

function min(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}

function min(a, b) {
    return a < b ? a : b;
}

function generateRandomArray(a, b, arrayLeng) {
    var randomArray = [];
    for (var i = 0; i < arrayLeng; i++) {
        var rand = a - 0.5 + Math.random() * (b - a + 1)
        rand = Math.round(rand);
        randomArray.push(rand);
    }
    return randomArray;
}
