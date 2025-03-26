document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const doneList = document.getElementById("done-list");

  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && input.value.trim() !== "") {
      addTodo(input.value.trim());
      input.value = "";
    }
  });

  function addTodo(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const doneButton = document.createElement("button");
    doneButton.textContent = "완료";
    doneButton.classList.add("done-btn");
    doneButton.addEventListener("click", () => moveToDone(li));

    li.appendChild(doneButton);
    todoList.appendChild(li);
  }

  function moveToDone(task) {
    task.querySelector(".done-btn").remove();

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => task.remove());

    task.appendChild(deleteButton);
    doneList.appendChild(task);
  }
});
