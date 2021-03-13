import * as Handlebars from "handlebars/dist/cjs/handlebars";

const getElementById = (id) => {
  return document.getElementById(id);
};

getElementById("new-task").addEventListener("click", () => {
  addTask();
});

const getMapTodoFromLocalStarage = () => {
  const todos = [];
  for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }
    todos.push(JSON.parse(localStorage.getItem(`${key}`)));
  }
  return todos;
};
const getTasksLITemplate = (title, text, status) => {
  const taskTemplate = Handlebars.compile(
    `
    <div class="w-100 mr-2">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{title}}</h5>
        </div>
        <p class="mb-1 w-100">{{text}}</p>
    </div>
        ${!status ? getCurrentAdditionalTemplate() : ""}`
  );
  return taskTemplate({ title, text });
};
const getCurrentAdditionalTemplate = () => {
  return `
    <div class="dropdown m-2 dropleft">
        <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <div   class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
          <button type="button" class="btn btn-success w-100">Complete</button>
          <button type="button" class="btn btn-info w-100 my-2">Edit</button>
          <button type="button" class="btn btn-danger w-100">Delete</button>
        </div>
    </div>`;
};
const removeToDoItem = (selectedNode) => {
  const key = selectedNode.closest(".currentTodo").id;
  const deletingElement = getElementById(key);
  deletingElement.parentNode.removeChild(deletingElement);
  localStorage.removeItem(+key);
  setCountTodos();
};

const editTodoTask = (selectedNode) => {
  $("#exampleModal").modal("show");
  getElementById("exampleModalLabel").innerText = "Edit task";

  const btn_editTask = getElementById("form-group-save-task");
  btn_editTask.innerText = "Edit task";

  const node_id = +selectedNode.closest(".currentTodo").id;
  const { id, title, text, radio: priority, isCompleted } = JSON.parse(
    localStorage.getItem(node_id)
  );

  setModalValues(title, text, priority);

  btn_editTask.addEventListener("click", () => {
    localStorage.removeItem(id);
    addTodoToLocalStorage(id, id, ...getModalValues(), isCompleted);
  });
};
const completeTodoTask = (selectedNode) => {
  const node_id = +selectedNode.parentNode.parentNode.parentNode.id;

  const { id, title, text, radio: priority, isCompleted } = JSON.parse(
    localStorage.getItem(node_id)
  );
  localStorage.removeItem(+node_id);
  addTodoToLocalStorage(node_id, id, title, text, priority, !isCompleted);
  location.reload();
};

const getModalValues = () => {
  const input_main_text = [getElementById("inputTitle").value, getElementById("inputTitle").value]
  const input_radioValue = document.querySelector(
    'input[name="gridRadios"]:checked'
  ).value;
  return [...input_main_text, input_radioValue];
};
const setModalValues = (title, text, priority) => {
  getElementById("inputTitle").value = title;
  getElementById("inputText").value = text;
  getElementById(`${priority}`).setAttribute("checked", "checked");
};

const setClicksOnNode = (node, func) => {
  for (let i = 0; i < node.length; i++) {
    node[i].addEventListener("click", () => {
      func(node[i]);
    });
  }
};

const addTodoToLocalStorage = (key, id, title, text, radio, isCompleted) => {
  const todoObject = {
    id,
    title,
    text,
    radio,
    isCompleted,
  };
  localStorage.setItem(key, JSON.stringify(todoObject));
};

const appendTodoElements = (completedStatus) => {
  const currentTodos = getMapTodoFromLocalStarage().filter(
    (todo) => todo.isCompleted == completedStatus
  );
  const currentNode = completedStatus
    ? getElementById("completedTasks")
    : getElementById("currentTasks");

  currentTodos.map(({ id, title, text, radio: priority }) => {
    const todoLINode = document.createElement("li");
    todoLINode.setAttribute(
      "class",
      `list-group-item d-flex w-100 mb-2 ${!completedStatus ? "currentTodo" : ""
      }`
    );
    todoLINode.setAttribute(
      "style",
      `background-color:${!completedStatus
        ? setTaskBackgroundColor(priority)
        : setTaskBackgroundColor()
      }`
    );
    todoLINode.setAttribute("id", `${id} `);
    currentNode.append(todoLINode);
    todoLINode.innerHTML = getTasksLITemplate(title, text, completedStatus);
  });
  if (!completedStatus) {
    const map_removeButton = document.querySelectorAll(".btn-danger");
    setClicksOnNode(map_removeButton, removeToDoItem);

    const map_editButton = document.querySelectorAll(".btn-info");
    setClicksOnNode(map_editButton, editTodoTask);

    const map_completeButton = document.querySelectorAll(".btn-success");
    setClicksOnNode(map_completeButton, completeTodoTask);
  }
  setCountTodos();
};

const getColorFromSCSS = (element, color) => {
  return getComputedStyle(element)
    .getPropertyValue(color === "black" ? "--color-font-black" : "--color-font-white");
}

const addTask = () => {
  const btn_saveTask = getElementById("form-group-save-task");
  $("#exampleModal").modal("show");
  btn_saveTask.addEventListener("click", () => {
    const id_dateValue = +new Date();
    addTodoToLocalStorage(
      id_dateValue,
      id_dateValue,
      ...getModalValues(),
      false
    );
  });
};
function toggleStyle() {
  const fontElement = document.querySelectorAll("h3");
  const bodyElement = document.getElementsByTagName("body")[0];
  if (this.checked) {
    bodyElement.style.backgroundColor = getColorFromSCSS(bodyElement, "black");
    fontElement.forEach((fElement) => {
      fElement.style.color = getColorFromSCSS(fElement, "white");
      console.log(getColorFromSCSS(fElement, "white"));
    });
  } else {
    bodyElement.style.backgroundColor = getColorFromSCSS(bodyElement, "white");
    fontElement.forEach((fElement) => {
      fElement.style.color = getColorFromSCSS(fElement, "black");
    });
  }
}
const sortTodoList = (compare) => {
  const currentContainer = getElementById("currentTasks");
  const compareCore = compare === "sort-from-new";
  [...currentContainer.children]
    .sort((current, next) => {
      if (current.id > next.id) {
        return compareCore ? 1 : -1;
      }
      if (current.id < next.id) {
        return !compareCore ? 1 : -1;
      }
      if (current.id == next.id) {
        return 0;
      }
    })
    .forEach((node) => currentContainer.appendChild(node));
};


const setTaskBackgroundColor = (value = "Completed") => {
  switch (value) {
    case "Low":
      return "green";
    case "Medium":
      return "yellow";
    case "High":
      return "red";
    default:
      return "gray";
  }
};

const setCountTodos = () => {
  let countTodos = [];
  let completedTasks = 0;
  let currentTask = 0;
  for (let i = 0; i < localStorage.length; i++) {
    countTodos.push(localStorage.key(i));
    JSON.parse(localStorage.getItem(countTodos[i])).isCompleted
      ? completedTasks++
      : currentTask++;
  }
  const countsTodosElement = getElementById("todosCount");
  countsTodosElement.innerText = ` ${currentTask} / ${completedTasks}`;
};

appendTodoElements(true);
appendTodoElements(false);

getElementById("customSwitch").addEventListener("change", toggleStyle);

getElementById("sort-from-new").addEventListener("click", () =>
  sortTodoList("sort-from-new")
);
getElementById("sort-from-old").addEventListener("click", () =>
  sortTodoList("sort-from-old")
);
