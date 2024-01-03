/************************* Array methods ****************************/
var arr1 = ["Mohamed", "Ahmed", "Ali", "Omar", "Mohamed", 5, 8, 87, 12],
    arr2 = ["Mahmoud", "Omar", "Shimaa"],
    arr3 = [5, 6];



/********************************************* concatenation ****************

console.log(arr1.concat(arr2, arr3));

/*********************************************  copy ********

console.log(arr1.copyWithin(3, 1));

console.log(arr1);
/*********************************************  every ****************
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

console.log(ages.every(checkAdult))

/*********************************************  some ****************
var ages = [16, 4, 25];

function checkAdult(age) {
    return age >= 18;
}
console.log(ages.some(checkAdult))

/*********************************************   filter ****************
var ages = [32, 3, 16, 40, 5, 55];

function checkAdult(age) {
    return age >= 18;
}
console.log(ages.filter(checkAdult));

/*********************************************   forEach ***************

console.log(arr2.forEach(function (item) {
    return item
}))

console.log("-".repeat(20))

var newClients = arr2.map(function (item) { return "Client : " + item })
console.log(newClients)
/*********************************************   find ****************
var ages = [2, 32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}
console.log(ages.find(checkAdult));

/*********************************************   find index ***************
var ages = [2 , 32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}
console.log(ages.findIndex(checkAdult));
/*********************************************   fill ***************

console.log(arr1.fill("JS", 2, 5));

/*********************************************************************************************** */
/*********************************************   array from **************

var myName = "Mohamed ";

console.log(Array.from(myName));

var test = [2, 4, 6, 8]

console.log(Array.from(test, function (item) { return item * 2 }))

console.log(Array.from([1, 2, 3], x => x + x));

/*********************************************   includes **************
console.log(arr1);
console.log(arr1.includes("Mohamed"));


/*********************************************   index of  **************
console.log(arr1);

console.log(arr1.indexOf("Mohamed"));

// console.log(arr1.indexOf("Ahme")) //error

/*********************************************   last index of  **************
console.log(arr1);
console.log(arr1.lastIndexOf("Mohamed"))

/*********************************************   is array **************

console.log(Array.isArray(arr1))


/*********************************************   join **************
console.log(arr1.join(" - "));
console.log(typeof arr1.join(""));

/*********************************************   pop ************** x >> from main array *
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

/*********************************************   shift ************** from main array *
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);
/*********************************************   push ************** X >>> *
console.log(arr1);
arr1.push("JS", "React");
console.log(arr1);

/*********************************************   unshift **************
console.log(arr1);
arr1.unshift("MO2");
console.log(arr1);

/*********************************************   reverse **************
console.log(arr1);
console.log(arr1.reverse());

/*********************************************   sort **************

var x = ["Mohamed", "Mahmoud", "Ali", "aza", 12, "aac", "abb"];
console.log(x.sort());

var nums = [9, 8, 25, 4, 7, 16, 3, 2, 1]

console.log(nums.sort((a, b) => a - b))

/*********************************************   slice **************
console.log(arr1);
console.log(arr1.slice(2, 4));
console.log(arr1);

/*********************************************   splice *************
console.log(arr1);

console.log(arr1.splice(1, 3, "Javascript", "HTML", "CSS"));

console.log(arr1);

/*********************************************   to string **************/

console.log(arr1.toString());
console.log(typeof arr1.toString());
// */



////////////////////////////////////////////////////////////////////
/*

2- create  a prompt to get tasks and push all in an array then output all at tour page .

3- create a  three prompt ages  and get it's values then check if any one is under age or not
EXAMPLE >>> [25 , 5 ,  12 , 25 , 55]
OUTPUT >>> you have all is not +18 (with every if return true) && you have just 5 and 12 is underage (with if condition)




5- create an array when you find (no) then convert all next elements in array to (thanks)
EXAMPLE >>> ["Mohamed" , 1 , "Hey" , "no" ,"Front" , "JS"] 
OUTPUT >>> ["Mohamed" , 1 , "Hey" , "no" ,"thanks" , "thanks"] 
hint : user loop , if and fill()
*/


/*
var input1 = prompt("Please enter task 1"),
    input2 = prompt("Please enter task 2"),
    input3 = prompt("Please enter task 3"),
    input4 = prompt("Please enter task 4");


var tasks = [];

tasks.push(input1, input2, input3, input4)

console.log(tasks)

var userOne = prompt("Please enter user's name 1"),
    userTwo = prompt("Please enter user's name 2"),
    userThree = prompt("Please enter user's name 3"),
    userFour = prompt("Please enter user's name 4"),
    users = [];

users.push(userOne, userTwo, userThree, userFour)

users.map((user, index) => console.log(user + " => " + (index + 1)))
console.log("-".repeat(10))
users.map((user, index) => console.log(index + 1 + " => " + user))


*/