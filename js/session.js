var courseId = 0;

if (courseId > 0) {
    console.log("OK")
}
else if (courseId < 0) {
    console.log("LT Zero")
}
else {
    console.log("It is zero")
}
///////////////////////////////////////
/* Relational operators */

var courseName = "JS";

if (courseName == "React") {
    console.log("It is React")
}
else {
    console.log("It is NOT React")
}

var userId = 5;

if (userId !== "5") console.log("OK")
else console.log("NOT ")

//////////////////////////////////////////
/* Unary arithmetic operators*/
var myId = 2;


// myId++;

console.log(++myId) // 3 3 3 3
console.log(myId--) // 3 3 3 3
console.log(++myId) // 3 3 4 3
console.log(myId++) // 3 3 4 3
console.log(myId)   // 4 4 4 4

console.log("******************")
//////////////////////////////
/* Binary arithmetic operators*/
console.log(10 % 3)
console.log(13 % 5)
console.log(14 % 2)


//////////////////////////////////////
console.log(5 !== "5")

/////////////////////////////////
var test = 5

test += 10;

console.log(test)

console.log(!false)
////////////////////////////////////////////
/* Logical operators */

if (5 > 4 && 10 > 8) {
    console.log("OK")
}
else {
    console.log("NO")
}


if (5 > 4 || 10 > 80) {
    console.log("OK")
}
else {
    console.log("NO")
}

////////////////////////////

var degree = +prompt("Please enter your degree");


/*

if (isNaN(degree)) {
    console.error("It is not a number")
}
else {
    if (degree <= 100 && degree >= 0) {
        if (degree >= 50) console.log("Pass")
        else console.log("Fail")
    }
    else {
        console.log("Not valid number")
    }
}
*/

console.log(5 && undefined && 8)

// And operator returns first false and last true ( False target )

console.log(0 || false || 5 || "Ahmed")

// Or operator returns first true and last false ( True target )