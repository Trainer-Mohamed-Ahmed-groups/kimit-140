console.log(isNaN(55))
console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.EPSILON)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.parseInt("5962626"))

var myNumber = 100.2584545
console.log(myNumber.toFixed(2))
console.log(myNumber.toExponential(2))
console.log(myNumber.toPrecision(2))

var myDate = new Date("February 25, 2023 01:15:00.250");
var myDate2 = new Date("March 5, 2023 01:15:00.250"),

    entrance = myDate.getTime() / 1000 / 60 / 60 / 24,
    leave = myDate2.getTime() / 1000 / 60 / 60 / 24;


console.log((leave - entrance) * 100)