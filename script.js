let addBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create <li>
  let li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete on click
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Right-click to delete
  li.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = ""; // clear input
});
