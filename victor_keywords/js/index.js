//user input array
var userInput = [
    "quel",
    "est",
    "ton",
    "nom"];

//array of keywords
var keyWords;

var i;
var e;

//keyword found in the user input array
var key;

//create the array of keywords from file.txt
function createArray() {
    $.get("keyWords.txt", function (data) {
        keyWords = data.split(',');
        alert(keyWords);
    });
}

//look for a keyword in the user input array
function contain(x) {
    for (i = 0; i < userInput.length; i += 1) {
        if (userInput[i] === x) {
            key = userInput[i];
            return key;
        }
    }
}

//call contain() for each keyword
function words() {
    for (e = 0; e < keyWords.length; e += 1) {
        contain(keyWords[e]);
    }
    return "- " + key;
}





