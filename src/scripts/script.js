import {
  getElementById,
  getColorFromSCSS,
  sortTodoList,
  appendTodoElements,
  addTask,
} from "./domFunctions";

getElementById("new-task").addEventListener("click", () => {
  addTask();
});

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

appendTodoElements(true);
appendTodoElements(false);

getElementById("customSwitch").addEventListener("change", toggleStyle);

getElementById("sort-from-new").addEventListener("click", () =>
  sortTodoList("sort-from-new")
);
getElementById("sort-from-old").addEventListener("click", () =>
  sortTodoList("sort-from-old")
);
