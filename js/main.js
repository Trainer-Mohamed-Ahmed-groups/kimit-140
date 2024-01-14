console.log(document)
console.log(document.body)
console.log(document.characterSet)

document.open()
document.write("<p>This is P</p>")


// With ID
var my_id = document.getElementById("myId")
console.log(my_id)
// console.log(my_id.className)

function changeColor() {
    my_id.className = "from_JS"
}

//With Class 
var my_class = document.getElementsByClassName("myClass")

console.log(my_class)


// Name
var my_name = document.getElementsByName("education");

console.log(my_name)

console.log("*".repeat(20))
// Tag name 
var my_tags = document.getElementsByTagName("div");

console.log(my_tags)



console.log("*".repeat(20))
/*********************************************************/

// var single = document.querySelector("section > div")

// console.log(single)

var multi = document.querySelectorAll("div")


console.log(multi)

////////////////////////////////////////////////////////
console.log(my_name[0].value)
console.log(my_name[1].getAttribute("data-kimit"))

function getVal(){
    // console.log(my_name[2].value)
    if(my_name[2].value.length >= 8) console.log(my_name[2].value.toUpperCase())
    else alert("This is less than 8")
}