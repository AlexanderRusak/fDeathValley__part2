const btn_saveTask = document.getElementById("form-group-save-task");

let map_removeButton;

const getMapTodoFromLocalStarage = () => {
    const todos = [];
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        }
        todos.push(JSON.parse(localStorage.getItem(`${key}`)));
    }
    return todos;
}
const getCurrentTasksLITemplate = (id, title, text) => {
    return (`
    <div class="w-100 mr-2">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${title}</h5>
        </div>
        <p class="mb-1 w-100">${text}</p>
    </div>
    <div class="dropdown m-2 dropleft">
        <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
          <button type="button" class="btn btn-success w-100">Complete</button>
          <button type="button" class="btn btn-info w-100 my-2">Edit</button>
          <button id=${id}   type="button" class="btn btn-danger w-100">Delete</button>
        </div>
    </div>`);
}

const setClicksOnNode = (node) => {
    for (let i = 0; i < node.length; i++) {
        node[i].addEventListener("click", () => {
            removeToDoItem(node[i].id);
        })
    }
}
const removeToDoItem = (id) => {
    const deletingElement = document.getElementById(`${id}`);
    deletingElement.parentNode.removeChild(deletingElement)
    localStorage.removeItem(id);
}
const getNodeTodoListItem = () => {
    const todos = getMapTodoFromLocalStarage();
    console.log(todos);
    const getNodeULTodoItem = document.getElementById("currentTasks");
    todos.map(({ id, title, text }) => {
        const todoLINode = document.createElement("li");
        todoLINode.setAttribute("class", "list-group-item d-flex w-100 mb-2");
        todoLINode.setAttribute("id", `${id}`);
        getNodeULTodoItem.append(todoLINode);
        todoLINode.innerHTML = getCurrentTasksLITemplate(id, title, text);

    })
    map_removeButton = document.querySelectorAll(".btn-danger");
    setClicksOnNode(map_removeButton);
}
const addTodoToLocalStorage = (key, id, title, text, radio) => {
    const todoObject = {
        id,
        title,
        text,
        radio
    }
    localStorage.setItem(key, JSON.stringify(todoObject));
}





btn_saveTask.addEventListener("click", () => {
    const id_dateValue = +new Date;
    const input_titleValue = document.getElementById("inputTitle").value;
    const input_textValue = document.getElementById("inputText").value;
    const input_radioValue = document.querySelector('input[name="gridRadios"]:checked').value;
    addTodoToLocalStorage(id_dateValue, id_dateValue, input_titleValue, input_textValue, input_radioValue);
});

getNodeTodoListItem();



