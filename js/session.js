// var x;

// inline comment
// x = 100;


/*
bla
bla
bla
bla
*/

/*
var x = 100;
console.log(x)
console.log(typeof x)
var username = "Mohamed"
console.log("***************")
console.log(username)
console.log(typeof username)
console.log("***************")

console.log(true)
console.log(false)

console.log(document.getElementById("output"))

/*
var firstName = prompt("Please enter your first name"),
    lastName = prompt("Please enter your last name"),
    fullName = firstName + " " + lastName

console.log(fullName)
*/
///////////////////////////////////////
/*
var firstNum = +prompt("Please enter your first number"),
    lastNumber = +prompt("Please enter your last number");

console.log(typeof firstNum)
console.log(firstNum + lastNumber)


var user = prompt("Please enter your name"),
    age = prompt("Please enter your age");

console.log("Hello " + user + " your age in days is " + age * 360)
*/

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    marital_status: false,
    country: {
        country_one: "Egypt",
        country_two: "USA"
    },
    military_status: undefined
}

console.log(person)

//Bracket notation

console.log(person["firstName"])
console.log(person["age"])
console.log(person["country"]["country_one"])

// Dot notation
console.log(person.firstName)
console.log("Hello " + person.firstName + " your age is " + person.age)
console.log(person.age)
console.log(person.country.country_one)



