

// not hoisted

console.log(test)

var test = function () {
    console.log("Hello from test")
}
var test = function () {
    console.log("Hello from test one again")
}
test()

testTwo()

function testTwo() {
    console.log("Hello from test two")
}

function testTwo() {
    console.log("Hello from test two again")
}

console.log(5 + 5)
console.log(5 + "5")

console.log(5 * 5)
console.log(5 * "5")
console.log(5 * "5a")

console.log(true + true)
console.log(false + false)

console.log(undefined + 5)
console.log(undefined + "5")


var arr = []
if (arr) { console.log("Ok") }

console.log(+"7878")
console.log(Number("7878"))

console.log(parseInt("5454"))
console.log(parseInt("54.54"))
console.log(parseFloat("88.12"))