// JSON => Javascript object notation

var jsObject = { username: "Mohamed", id: 1, courses: ["HTML", "CSS", "JS"], title: "Frontend" }

var jsonObject = '{ "username": "Ahmed", "id": 2, "courses":["PHP","Node js" , "My sql"], "title": "Backend" }'


console.log(jsObject)
console.log(typeof jsObject)
console.log(JSON.stringify(jsObject))

console.log("*".repeat(30))


//? Converting JavaScript Object to JSON
console.log(jsonObject)
console.log(typeof jsonObject)
console.log(JSON.parse(jsonObject))

// API => Application programming interface

function getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => res.forEach(user => {
            document.write(`<div>${user.id} => ${user.name}</div>`)
        }))
}

// getData()

var from = "Kimit academy"
console.log("Js" + " course  => " + from)
console.log(`js course     ${from}`)
