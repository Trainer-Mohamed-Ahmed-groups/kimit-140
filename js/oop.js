// var person = {
//     name: "Hamza",
//     age: 20,
//     married: false,
//     ayHaga: undefined,
//     calcAgeInDays: function () {
//         return this.age * 365;
//     }
// }

// var person = new Object();
// person.name = "Hamza"
// person.age = 20

// console.log(person)
// console.log(person.calcAgeInDays())





/////////////////////////////////////////////////////////////////////////////////////
/************************************** Constructor function  ************************************

function Person(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age
}

var personOne = new Person("Hamza", 30)

console.log(personOne)


var personTwo = new Person()

console.log(personTwo)

**/


class Person {
    constructor(name = "Unknown", age = 0, status) {
        this.name = name;
        this.age = age;
        this.status = status
    }
}

var personOne = new Person("Hamza", 30, "Single")

console.log(personOne)

class Doctor extends Person {
    constructor(name, age, status, specialty) {
        super(name, age, status)
        this.specialty = specialty
    }
}

var doctorOne = new Doctor("Ayman", 50)

console.log(doctorOne)

// Car => Family car


var username = "Mohamed"

String.prototype.customConcat = function (str1, str2) {
    return str1 + str2
}

console.log(username.customConcat(username, "Ahmed")) // Mohamed is awesome