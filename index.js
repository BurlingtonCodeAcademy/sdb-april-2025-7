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