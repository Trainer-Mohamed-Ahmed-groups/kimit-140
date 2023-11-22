console.log(typeof (8 / 0))

console.log(typeof ("test" / 5))

/* Void function */

// function sayOK() {
//     console.log("OK")
// }

// var sayOK = function () {
//     console.log("OK")
// }

var x = 55,
    y = 10;


/* Returning value function */
function calculation() {
    return x + y
}

console.log(calculation())
console.log(calculation() * 5)


/* Function with parameters 
function addition(a, b) {
    return a + b
}

console.log(addition(5, 9))
console.log(addition(95, 90))

var numOne = +prompt("Please enter first number"),
    numTwo = +prompt("Please enter second number");

console.log(addition(numOne, numTwo))
console.log(addition(x, y))

*/


var trainees = ["Mohamed", "Mahmoud", "Omar", "Ali", "Bakr"]

console.log(trainees)
console.log(trainees.length)
console.log(trainees[1])
console.log(trainees[trainees.length - 1])
console.log(trainees.at(-1))


trainees[5] = "Osman";
console.log(trainees)

var clientName = prompt("Please enter your name"),
    clientAge = +prompt("Please enter your age"),
    currentYear = 2023


function getAge(x) {
    return currentYear - x
}

function displayClientData(name, year) {
    console.log("Hello " + name + " Your age is " + getAge(year) + " and your age in days is " + getAge(year) * 365)
}


displayClientData(clientName, clientAge)