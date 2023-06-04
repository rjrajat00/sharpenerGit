document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const taskList = document.getElementById("taskList");
  const doneList = document.getElementById("doneList");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("task");
    const descInput = document.getElementById("desc");

    const task = taskInput.value.trim();
    const desc = descInput.value.trim();

    if (task !== "") {
      const listItem = createTaskListItem(task, desc);
      taskList.appendChild(listItem);

      taskInput.value = "";
      descInput.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("check-btn")) {
      const listItem = event.target.parentNode;
      const doneItem = createDoneItem(listItem);
      doneList.appendChild(doneItem);
      listItem.remove();
    } else if (event.target.classList.contains("delete-btn")) {
      const listItem = event.target.parentNode;
      listItem.remove();
    }
  });

  doneList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const listItem = event.target.parentNode;
      listItem.remove();
    }
  });

  function createTaskListItem(task, desc) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("form-check-input", "check-btn");
    listItem.appendChild(checkbox);

    const taskText = document.createElement("span");
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const descText = document.createElement("p");
    descText.textContent = desc;
    listItem.appendChild(descText);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn", "btn-danger", "delete-btn");

    listItem.appendChild(deleteBtn);

    axios
      .delete("https://api.instantwebtools.net/v1/airlines")
      .then((res) => {
        showOutput(res);

        const userData = res.data;
        updateDataList(userData);
      })
      .catch((err) => {
        console.log(err);
      });

    return listItem;
  }

  function createDoneItem(listItem) {
    const doneItem = listItem.cloneNode(true);
    const checkbox = doneItem.querySelector(".check-btn");
    checkbox.remove();

    return doneItem;

    axios
      .post("https://api.instantwebtools.net/v1/airlines")
      .then((res) => {
        console.log(res);

        const userData = res.data;
        updateDataList(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
