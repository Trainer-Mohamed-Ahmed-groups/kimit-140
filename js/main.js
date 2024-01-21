var first_element = document.createElement('div'),
    first_text = document.createTextNode('This is in JS'),
    first_comment = document.createComment("This comment from JS");


console.log(first_element);
console.log(first_text);


first_element.append(first_text, first_comment)



var parent = document.getElementById('parent');

console.log(parent.children);
console.log(parent.childNodes);


parent.appendChild(first_element)

console.log(document.forms)
console.log(document.images)


parent.style.color = '#f00';
parent.style.backgroundColor = '#888'


var new_item = document.querySelector('#newItem');

console.log(new_item)


function add_new_class() {
    // new_item.className = 'from_JS'
    // new_item.classList.add('from_JS')  //Adding a class
    // new_item.classList.remove('blueColor')  //Remove a class
    // new_item.classList.toggle('from_JS')  // Toggle a class
    console.log(new_item.classList.contains('testdd'))  // Toggle a class
    console.log(new_item.classList.item(1))

}