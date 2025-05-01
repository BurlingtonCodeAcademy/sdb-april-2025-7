let message = "here is the truthy message!";

// if else statement example
if (!message == true) {
    console.log(message);
} else {
    console.log("NO MESSAGE FOUND!")
}

// if else statement with AND operator example
if ((3 == "2") && ("chris" == "chris") && (true == true)) {
    console.log("all are true!");
} else {
    console.log("at least one of them is false!");
}

// if else statement with OR operator example
if (3 == "2" || "demaceo" == "chris" || true == false) {
    console.log("at least one of them is true!");
} else {
    console.log("all are false!");
}


// if else statement with many operators
let x = 5;
let y = "elephant";
let z = true;

if (x == 5 && (y !== "elephant" || z == false)) {
    console.log("all are true!");
}

// FIZZBUZZ with if else statement example
let myNumber = 15;
let fizz = 3;
let buzz = 5;

let divisibleByThree = myNumber % fizz == 0;
let divisibleByFive = myNumber % buzz == 0;
let divisibleByBoth = myNumber % fizz == 0 && myNumber % buzz == 0;

if (divisibleByBoth) {
    console.log("My number is: " + myNumber);
    console.log("FizzBuzz!");
} else if (divisibleByFive) {
    console.log("My number is: " + myNumber);
    console.log("Buzz!");
} else if (divisibleByThree) {
    console.log("My number is: " + myNumber);
    console.log("Fizz!");
} else {
    console.log("My number is: " + myNumber);
    console.log("No Fizz or Buzz!");
}