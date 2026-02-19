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
