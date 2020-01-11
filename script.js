// question 1
var petArray = ["cat", "cow", "dog"];

// question 2
console.log(petArray[1]);

//question 3
var petArray = ["cat", "cow", "dog"];
petArray.push("sheep");
console.log(petArray);

//question 4

var petArray = ["cat", "cow", "dog", "sheep"];
console.log(petArray.length);

//question 5

var catObject = {
    name: "Lilly",
    colour: "white",
    age: 8
}

//question 6

console.log(catObject.age);

//question 7

var catArray = [
    {
        name: "Lilly",
        colour: "white",
        age: 8   
    }
];

//question 8

for (var i = 0; i < catArray.length; i++){
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
}

//question 9

function logToConsole(petArray) {
    console.log("dog");
}

logToConsole();

//question 10

function logToConsole(petArray) {
    console.log(petArray);
}

logWord("donkey");

