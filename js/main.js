var first_Division = document.getElementsByClassName("firstDivision")[0]

console.log(first_Division.innerHTML)
console.log(first_Division.outerHTML)


////////////////////////////////
var output = document.querySelector("#output");

// output.innerHTML = "<span>This is from JS</span>"

var counter = 0
function addOne() {
    counter++;
    output.innerHTML = counter
}


var user_input = document.getElementById("userInput"),
    result = document.getElementById("result")

function resultFn() {
    result.innerHTML += `<div>${user_input.value}</div>`
}


/////////////////////////////////////
var add_text = document.querySelector("#addText");

add_text.innerHTML = "<h2>This from Javascript</h2>"
add_text.textContent = "<h2>This from Javascript</h2>"


/////////////////////////////////////////////////
var attr_explain = document.getElementById("attrExplain");

console.log(attr_explain.getAttribute('kimit'))


var att_fn = function () {
    attr_explain.setAttribute('from-js', 'This attribute come from Javascript')
}


//////////////////////////////////////////////////
var user_password = document.getElementsByName("userPassword")[0],
    show_btn = document.getElementById("showBtn")


console.log(user_password.getAttribute("type"))



function change_type() {
    if (user_password.getAttribute("type") === 'password') {
        user_password.setAttribute("type", "text")
        show_btn.textContent = "Hide password"
    }
    else {
        user_password.setAttribute("type", "password")
        show_btn.textContent = "Show password"
    }
}