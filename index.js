// with function 

function EvenOdd() {
    if (num % 2 === 0) {
        console.log("Even Number")
    }

    else {
        console.log("Odd Number")
    }
}

// with arrow function

const EvenOdd = (num) => {
    return num % 2 === 0 ? "EvenNumber" : "OddNumber";
};
const eoresult = EvenOdd(7);
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

