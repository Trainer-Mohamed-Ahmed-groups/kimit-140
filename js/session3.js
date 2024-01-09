function getData2() {
    var usersRequest = new XMLHttpRequest();

    usersRequest.onreadystatechange = function () {
        // console.log(JSON.parse(this.response))
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.response);

            document.write("<ul class='list-group'>")
            response.forEach(user => {
                document.write(`<li class="list-group-item">${user.name}</li>`)
            });
            document.write("</ul>")
        }
    }

    usersRequest.open("GET", "https://jsonplaceholder.typicode.com/users")

    usersRequest.send()

}

getData2()