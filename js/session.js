var parent = document.querySelector('#parent');

console.log(parent.firstChild)
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)
console.log(parent.lastChild)



for (let index = 0; index < parent.children.length; index++) {
    const element = parent.children[index];
    element.onclick = function () {
        // element.nextElementSibling.classList.toggle("colored")
        // element.previousElementSibling.classList.toggle("colored")
        // console.log(element.nextSibling)
        // element.appendChild(document.createComment('Selected'))
        console.log(element.parentElement)
    }
}
parent.insertBefore(document.createComment("Before"), parent.children[5])
console.log(parent.childNodes)
console.log(parent.children)

parent.removeChild(parent.children[3])
///////////////////////////////////////////////
var btn = document.getElementById('btn');
var user_input = document.getElementById('userInput');

console.log(btn)

// btn.onclick = function() {
//     console.log("Hello")
// }

// btn.onclick = function() {
//     console.log("Hello 2")
// }

// btn.addEventListener('click', function () {
//     console.log("Hello")
// })

// btn.addEventListener('click', function () {
//     console.log("Hello 2")
// })

user_input.addEventListener('focus', function (ev) {
    console.log("Focused")
})

user_input.addEventListener('blur', function (ev) {
    console.log("Blur")
})