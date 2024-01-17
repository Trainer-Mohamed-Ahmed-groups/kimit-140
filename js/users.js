var users = [],
    usersOutput = document.getElementById("usersOutput");

console.log(usersOutput)


fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => users = res)
    .then(() => displayUsers())


function displayUsers() {
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        usersOutput.innerHTML += `
        <div class="col col-lg-4 col-md-6 col-sm-12 p-2">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">${user.email}</p>
                </div>
            </div>
        </div>
        `
    }
}