const getElementById = (id) => {
    return document.getElementById(id);
}

const btn_newTask = getElementById("new-task");
btn_newTask.addEventListener("click", () => {
    console.log("ok");
    addTask();

})


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
        <div   class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
          <button type="button" class="btn btn-success w-100">Complete</button>
          <button type="button" class="btn btn-info w-100 my-2">Edit</button>
          <button type="button" class="btn btn-danger w-100">Delete</button>
        </div>
    </div>`);
}

const editTodoTask = (selectedNode) => {

    $('#exampleModal').modal("show");
    getElementById("exampleModalLabel").innerText = "Edit task";
    const btn_editTask = getElementById("form-group-save-task");
    btn_editTask.innerText = "Edit task";
    const node_id = selectedNode.parentNode.parentNode.parentNode.id;
    const { id, title, text, radio: priority } = JSON.parse(localStorage.getItem(node_id));
    setModalValues(title, text, priority);
    btn_editTask.addEventListener("click", () => {
        localStorage.removeItem(id);
        addTodoToLocalStorage(id, id, ...getModalValues());

    })
}

const getModalValues = () => {
    const input_titleValue = getElementById("inputTitle").value;
    const input_textValue = getElementById("inputText").value;
    const input_radioValue = document.querySelector('input[name="gridRadios"]:checked').value;
    return [input_titleValue, input_textValue, input_radioValue];
}
const setModalValues = (title, text, priority) => {
    getElementById("inputTitle").value = title;
    getElementById("inputText").value = text;
    getElementById(priority).setAttribute("checked", "checked");
}

const setClicksOnNode = (node, func) => {
    for (let i = 0; i < node.length; i++) {
        node[i].addEventListener("click", () => {
            func(node[i]);
        })
    }
}

const removeToDoItem = (selectedNode) => {
    const id = selectedNode.parentNode.parentNode.parentNode.id;
    const deletingElement = getElementById(`${id}`);
    deletingElement.parentNode.removeChild(deletingElement)
    localStorage.removeItem(id);
}
const getNodeTodoListItem = () => {
    const todos = getMapTodoFromLocalStarage();
    console.log(todos);
    const getNodeULTodoItem = getElementById("currentTasks");
    todos.map(({ id, title, text }) => {
        const todoLINode = document.createElement("li");
        todoLINode.setAttribute("class", "list-group-item d-flex w-100 mb-2");
        todoLINode.setAttribute("id", `${id}`);
        getNodeULTodoItem.append(todoLINode);
        todoLINode.innerHTML = getCurrentTasksLITemplate(id, title, text);

    })
    map_removeButton = document.querySelectorAll(".btn-danger");
    setClicksOnNode(map_removeButton, removeToDoItem);

    const map_editButton = document.querySelectorAll(".btn-info");
    setClicksOnNode(map_editButton, editTodoTask);
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


const addTask = () => {
    const btn_saveTask = getElementById("form-group-save-task");
    $('#exampleModal').modal("show");
    btn_saveTask.addEventListener("click", () => {
        console.log("ok");
        const id_dateValue = +new Date;
        addTodoToLocalStorage(id_dateValue, id_dateValue, ...getModalValues());
    });
}




getNodeTodoListItem();



