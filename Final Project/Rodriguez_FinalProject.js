// Task Constructor
function Task(taskId, taskName, taskPriority, isImportant, isCompleted, taskDate ) {
    this.taskId = taskId;
    this.taskName = taskName;
    this.taskPriority = taskPriority;
    this.isImportant = isImportant;
    this.isCompleted = isCompleted;
    this.taskDate = taskDate;
};

// Container for div element "taskManager"
const container = document.getElementById("taskManager");

// Test to ensure JavaScript is connected -- REMOVE LATER
console.log("JavaScript is connected :)");

// Sample Task -- REMOVE LATER
const task1 = new Task(1, "Complete Final Project", "High", true, false, "12/10/2025");
console.log(task1);

// Add a title heading to the page
const heading = document.createElement("h1");
heading.textContent = "Task Manager";
container.appendChild(heading);

// Create the form element
const form = document.createElement("form");
form.id = "taskForm";

// CREATE AN INPUT FIELD WHERE USERS CAN ENTER A TASK NAME
// Input box for the task name:
const taskNameInput = document.createElement("input");
taskNameInput.type = "text";
taskNameInput.id = "taskName";
taskNameInput.name = "taskName";
taskNameInput.placeholder = "Enter Task Name";
form.appendChild(taskNameInput);   // Appends input box to the form


// CREATE A DROPDOWN MENU TO SELECT TASK PRIORITY (HIGH, MEDIUM, LOW)
// Priority Dropdown menu element:
const prioritySelect = document.createElement("select");
prioritySelect.id = "priority";
prioritySelect.name = "priority";

// Options for Dropdown menu:
const highOption = document.createElement("option");
highOption.value = "High";
highOption.textContent = "High";
prioritySelect.appendChild(highOption);

const mediumOption = document.createElement("option");
mediumOption.value = "Medium";
mediumOption.textContent = "Medium";
prioritySelect.appendChild(mediumOption);

const lowOption = document.createElement("option");
lowOption.value = "Low";
lowOption.textContent = "Low";
prioritySelect.appendChild(lowOption);

// Append the drop down menu to the form
form.appendChild(prioritySelect);

// ADD A CHECKBOX FOR MARKING A TASK AS IMPORTANT
// Create checkbox element:
const importantCheckbox = document.createElement("input");
importantCheckbox.type = "checkbox";
importantCheckbox.id = "isImportant";
importantCheckbox.name = "isImportant";
form.appendChild(importantCheckbox);

// Add label next to checkbox:
const importantLabel = document.createElement("label");
importantLabel.textContent = "Important"
form.appendChild(importantLabel);

// CREATE A SUBMIT BUTTON TO ADD THE TASK TO THE LIST
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Add Task";
form.appendChild(submitButton);


// Append the form to the div container
container.appendChild(form);