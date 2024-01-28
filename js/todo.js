var form = document.forms[0],
    task_input = document.querySelector('#taskInput'),
    tasks_container = document.querySelector("#tasksContainer"),
    no_tasks = document.getElementById("noTasks"),
    counter = document.getElementById("counter"),
    finished_counter = document.getElementById("finishedCounter"),
    tasks = document.getElementsByClassName("task"),
    finishedTasks = document.getElementsByClassName("list-group-item-success"),
    tasks_data = [];


form.onsubmit = function (event) {
    let task_value = task_input.value
    event.preventDefault()
    if (task_value.trim() === '') { alert("Your can't add an empty task") }
    else {
        if (checkDuplicate(task_value)) {
            addingTask(task_value)
        }
        else {
            alert("You can't add a duplicate task")
        }
    }
    afterAdding()
    finishTask()
    saveData()
}

let afterAdding = () => {
    task_input.value = ""
    task_input.focus()
    countTasks()
    no_tasks.classList.add('hidden')
}

let addingTask = (val) => {
    tasks_container.innerHTML += `<li class="list-group-item list-group-item-secondary task">${val}</li>`;
    tasks_data.push({ text: val, status: false });
}

let checkDuplicate = (val) => {
    if (tasks_data.findIndex(v => v.text === val) === -1) return true
    else return false
}

let finishTask = () => {
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        task.onclick = function () {
            task.classList.toggle('list-group-item-success')
            task.classList.toggle('list-group-item-secondary')
            countFinished()
            tasks_data[index].status = true;
            saveData()
        }
    }
}

let countTasks = () => counter.textContent = tasks.length

let countFinished = () => finished_counter.textContent = finishedTasks.length

let saveData = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks_data))
}

// localStorage.setItem('language' , 'en')
// localStorage.setItem('direction' , 'rtl')

// console.log(localStorage.getItem('language'))

// localStorage.removeItem('language')

// localStorage.clear()

// document.cookie = 'username = Mohamed;expires=Thu, 18 Dec 2024 12:00:00 UTC'

saved_tasks = JSON.parse(localStorage.getItem('tasks'));

for (let index = 0; index < saved_tasks.length; index++) {
    const task = saved_tasks[index];
    saved_tasks = JSON.parse(localStorage.getItem('tasks'));
    addingTask(task.text)
    countTasks()
    finishTask()
}


/*
    1- Remove No tasks here heading 
    2- Count finished after get data from local storage
    3- Delete task
*/
