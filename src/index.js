document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get the task description from the input field
  const taskDescription = document.getElementById("new-task-description").value;

  // Create a new list item element (li) to display the task
  const newListItem = document.createElement("li");
  newListItem.textContent = taskDescription;

  // (Optional) Add styling to the list item (e.g., border, padding)
  newListItem.style.border = "1px solid #ddd";
  newListItem.style.padding = "10px";

  // Get the existing task list element (ul) from the HTML
  const taskList = document.getElementById("task-list");

  // Append the new list item to the task list
  taskList.appendChild(newListItem);

  // Clear the input field for the next task
  document.getElementById("new-task-description").value = "";
});

});
