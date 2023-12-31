var myName = "Mohamed",
    lastName = "Ahmed",
    job = "frontend developer and frontend instructor";

console.log(myName);
/**************************** length ************************************
console.log(myName.length);

/**************************** charAt ************************************

console.log(myName.charAt(0))
/**************************** charCodeAt ***************************

console.log(lastName.charCodeAt(0))

/**************************** fromCharCode ************************************

console.log(String.fromCharCode(65))
/**************************** concat ************************************

console.log(myName.concat(lastName))

/**************************** startsWith ************************************

console.log(job.startsWith("front"))
/**************************** endsWith ************************************

console.log(job.endsWith("instructor"))

/**************************** includes ************************************

console.log(job.includes("and"))

/**************************** indexOf ************************************
console.log(myName.indexOf("ds"))

/**************************** lastIndexOf ************************************
console.log(job.lastIndexOf("frontend"))

/**************************** match ************************************
// console.log(job.match("Front"))
console.log(job.match(/Front/ig))

/**************************** repeat ************************************
console.log(myName.repeat(5))

/**************************** replace ************************************

console.log(job.replace(/front/g, "new"))
// console.log(job.replace(/front/g, "new instructor"))

// gi
/**************************** search ************************************
console.log(job.search("developer"))

/**************************** slice ******************VIMP******************

console.log(job.slice(7, 13))

/**************************** split *********************VIMP***************

console.log(job.split(" "))
/**************************** substr ************************************
console.log(myName.substr(1, 3))

/**************************** substring ************************************
console.log(myName.substring(1, 3))

/**************************** toLowerCase ************************************

console.log(myName.toLowerCase())

/**************************** toUpperCase ************************************

console.log(myName.toUpperCase())
/**************************** trim ************************************/

var newJob = "             Front  end         developer             ";

console.log(newJob);
console.log(newJob.trimEnd());
// */


/*
JS task 

Task 1
    Create an array include some names then check the names starts with letter m or not 
    Then print in console   this name starts with letter m 
    Use array with some capital and small example ["Mohamed" , "mahmoud" , "Ali" ] want to output mohamed and mahmoud
-------------------------------
*/
/*
function findChar(str, searchValue) {
    if (str.indexOf(searchValue) >= 0) {
        console.log("It is exist and the index of it is " + str.indexOf(searchValue))
    }
    else console.log("Not exist")
}

findChar("Ali", 'A')
findChar("Ali", 'M')

let findSpace = function (str) {
    return str.match(/ /g).length
}

var userInput = prompt("Please enter your text");

console.log(findSpace(userInput))

function calcWords(str) {
    return str.split(" ").length
}

var userInput2 = prompt("Please enter ")


console.log(calcWords(userInput2))

function greaterThanFive(input) {
    let start = input.split(" "),
        result = "";
    for (i = 0; i < start.length; i++) {
        if (start[i].length > 5) result += start[i] + " "
    }
    return result;
}

console.log("Your words : " + greaterThanFive(userInput2))
*/

function sayHello() {
    console.log("Hello")
}

// let myInterval = setInterval(sayHello, 1000)
let myTimeout = setTimeout(sayHello, 3000);

function stopIntervalFn() {
    // clearInterval(myInterval)
    clearTimeout(myTimeout)
}
