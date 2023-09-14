const form = document.getElementById('form')
const input = document.getElementById('input')
const todosEl = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value.trim();
    var t = document.createTextNode(inputValue);
    li.appendChild(t);


    if (inputValue === '') {
        alert("Please write something!");
    } else {
        document.getElementById("todos").appendChild(li);
    }
    document.getElementById("input").value = "";

}

function removeTask() {
    const todos = document.getElementById("todos");
    const taskItems = todos.getElementsByTagName("li");

    for (let i = 0; i < taskItems.length; i++) {
        taskItems[i].onclick = function() {
            todos.removeChild(this);
        };
    }
}


