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

function generateRandomArray(minNumberOfArrey, maxNumberOfArray, arrayLeng) {
    var randomArray = [];
    for (var i = 0; i < arrayLeng; i++) {
        var rand = minNumberOfArrey - 0.5 + Math.random() * (maxNumberOfArray - minNumberOfArrey + 1)
        rand = Math.round(rand);
        randomArray.push(rand);
    }
    return randomArray;
}

var myobject = { value : 0,
    increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1

    }

}

function generateRandomNumberFrom1to6() {
    return Math.round(0.5 + Math.random()*6);
}

function anagram(word1 , word2){
    var word1ToArray = word1.toUpperCase().split('').sort().toString();
    var word2ToArray = word2.toUpperCase().split('').sort().toString();
    return (word1ToArray == word1ToArray) ? true : false;
}

function checkForm() {
    var documentsForm = document.forms[0];
    var documentsElements = documentsForm.elements;
    var isEmpty = false;
    for (var i = 0; i<documentsElements.length; i++){
        if(documentsElements[i].type = "text"){
            if(documentsElements[i].value == ""){
                documentsElements[i].style.borderColor = "red";
                isEmpty = true;
            } else {
                documentsElements[i].style.borderColor = "";
            }
        }
    }
    if(isEmpty) alert("Fill all fields");
    else documentsForm.submit();
}