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


// with prompt 

let userInput = prompt("Enter a number:");

// Convert input to a number
let number = parseInt(userInput);


function EvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}




EvenOdd(number);


