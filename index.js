// with function 

function EvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Even Number")
    }

    else {
        console.log("Odd Number")
    }
}
console.log(EvenOdd(50))
console.log(EvenOdd(55))
// with arrow function

const EvenOdd2 = (num) => {
    return num % 2 === 0 ? "EvenNumber" : "OddNumber";
};
const eoresult = EvenOdd2(7);
console.log(eoresult);

// with switch case 

const evenOddSwitch = (num) => {
    switch (num % 2) {
        case 0:
            return "Even number";
        case 1:
        case -1:
            return "Odd number";
        default:
            return "Not a valid number";
    }
};

console.log(evenOddSwitch(10));
console.log(evenOddSwitch(7));
console.log(evenOddSwitch(-5));






function EvenOdd(num = 38) {
    if (num % 2 === 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}




let a = 100;

if (a >= 80) {
    console.log("A+");
}
else if (a >= 70) {
    console.log("A")
}
else if (a >= 60) {
    console.log("B")
}
else {
    console.log("F")
}

// ternary operator multiline
let mark = 75;

let grade = (a >= 80) ? "A+" :
    (a >= 70) ? "A" :
        (a >= 60) ? "B" : "F";

console.log(grade);

// ternary single line 
let grade2 = (a >= 80) ? "A+" : (a >= 70) ? "A" : (a >= 60) ? "B" : "F";
console.log(grade2);


// switch key with string 
// Get input from the user in the console
const prompt = require('prompt-sync')(); 
const prompt1 = prompt('Enter a letter: '); 
const promptUp = prompt1.toUpperCase();

switch (promptUp) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log('Vowel');
        break;
    default:
        console.log('Consonant');
}

