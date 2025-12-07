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