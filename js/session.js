var user_input = document.getElementById('userInput'),
    output = document.getElementById('output'),
    loading = document.getElementById("loading"),
    my_btn = document.getElementById('myBtn'),
    close_btn = document.getElementById('closeBtn')


user_input.addEventListener('change', function (ev) {
    let num = [...ev.target.value];
    let num_of_number = num.filter((item) => !isNaN(item)).length;
    let num_of_lower = num.filter((item) => item === item.toLowerCase() && isNaN(item)).length;
    let num_of_upper = num.filter((item) => item === item.toUpperCase() && isNaN(item)).length;

    num_of_lower && num_of_upper && num_of_number && num.length >= 8
        ? output.innerHTML = "Your password is correct"
        : output.innerHTML = "Your password must have uppercase and lowercase and number and  should be at least 8 characters long.";
})


// if (5 > 40) console.log("OK")
// else console.log("NO")

/* Ternary if */

// 5 > 4 ? console.log("OK") : console.log("NO")

window.onload = function () {
    console.log("loaded")
}

window.onresize = function () {
    console.log("Resized")
}

// BOM => browser object model

// console.log(confirm("Are you sure"))
var newOne;


my_btn.onclick = function () {
    newOne = window.open('https://google.com.eg/', '_blank', 'width=600,height=300,bottom=250,left=250');
}

close_btn.addEventListener('click', function () {
    window.location.assign("https://www.w3schools.com")
})

// my_btn.addEventListener('click', function () {
//     window.scrollBy({ top: 100, left: 100, behavior: 'smooth' });

//     console.log(window.scrollX)
//     console.log(window.scrollY)

// })

window.onscroll = function () {
    if (window.scrollY > 800) {
        console.log("Passed")
    }
}