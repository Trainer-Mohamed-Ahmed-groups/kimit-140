"use strict";
var myName = "Mohamedddd";

switch (myName) {
    case "Ahmed":
        console.log("It is Ahmed")
        break;
    case "Mohamed":
        console.log("It is Mohamed OR")
        break;
    default:
        console.log("It have not any case")
}



try {
    console.log("OK")
} catch (error) {
    console.warn(error.message)
}
finally {
    console.info("This is finally block")
}


console.log("OK")

function getRec(x, y) {
    if (isNaN(x) || isNaN(y)) throw "Not valid"
    else return x * y
}


try {
    console.log(getRec(5, 8))
} catch (error) {
    console.error(error)
}


// x = 15

// console.log(x)

var y = 1;

// while (y <= 10) {
//     console.log(y)
//     y++
// }

// do {
//     console.log(y)
//     y++
// } while (y <= 10);


for (var t = 1; t <= 10; t++) {
    console.log(t)
}
console.log("----------------")
for (var t = 1; t <= 10; t++) {
    if (t % 2 === 0) {
        continue;
    }
    console.log(t)
}
console.log("----------------")

for (var t = 1; t <= 10; t++) {
    if (t === 5) {
        break;
    }
    console.log(t)
}
console.log("----------------")

var persons = ["Mohamed", "Ahmed", "Nemat", "Kareem"];


for (var index = 0; index < persons.length; index++) {
    console.log(persons[index])
}


if (5 > 40) {
    console.log("OK")
}

function test() {
    return "Javascript course"
}
console.log(test())