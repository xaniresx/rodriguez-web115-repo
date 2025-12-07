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

console.log("JavaScript is connected :)");

// Sample Task
const task1 = new Task(1, "Complete Final Project", "High", true, false, "12/10/2025");

console.log(task1);