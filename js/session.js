var btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2");



////////////////////////////////////////
btn1.onclick = function () {
    console.log(this)
}

// console.log(helloJs())

btn2.onclick = () => console.log(this)


// console.log(helloJs2())


/***************************** Spread operator *************************************/

var numbers = [2, 4, 5, 6, 7, 8],
    numbers2 = [10, 1, 41, 4, 48, 14, 15]

console.log(numbers.concat(numbers2))


console.log([...numbers, ...numbers2])

console.log(Math.max(...numbers))
console.log(Math.max(...numbers2))

console.log(numbers2.sort((a, b) => a - b).at(-1))


/************************** let of ****************************************/


var cars = ["BMW", "Mercedes", "Volvo"];


for (let index = 0; index < cars.length; index++) {
    const car = cars[index];
    console.log(car)
}

for (let car of cars) {
    console.log(car)
}

for (let char of cars[1]) {
    console.log(char)
}
/************************** Map ****************************************/

// var grades = [2, 4, 5]

var grades = new Map([
    ["John", 95],
    ["Mohamed", 80],
    ["Ahmed", 90]
])

console.log(grades)
console.log(typeof grades)
console.log(grades.get("John"))
console.log(grades.has("Alice"))
grades.set(["Tom"], 75);
console.log(grades)
grades.delete("Mohamed");
grades.clear()

console.log(grades)


var jsObject = new Object()
console.log(jsObject)

var jsMap = new Map()
console.log(jsMap)


jsMap.set(20, "one")
jsMap.set("oneeeeee", 20)


console.log(jsMap)
console.log(jsMap.get(20))

/************************** Set ****************************************/
var arr1 = [1, 1, 2, 2, 3, 3, 4, 4]
var set1 = new Set([3, 4, 1, 1, 2, 3, 2, 4])

console.log(arr1)
console.log(typeof set1)
console.log(set1)
console.log(set1.size)
set1.add(3).add(5)

console.log(set1)

set1.delete(1)
console.log(set1)

// set1.clear()
// console.log(set1)

console.log(set1.has(3)) // return true or false if the element is in the set or not
console.log(set1.entries())

console.log(set1.keys())

console.log(set1.values())

set1.forEach((value) => console.log(value))



