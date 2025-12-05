// Task Constructor
function Task(taskId, taskName, taskPriority, taskImportance, taskCompletionStatus, taskDate ) {
    this.id = taskId;
    this.name = taskName;
    this.priority = taskPriority;
    this.isImportant = taskImportance;
    this.isCompleted = taskCompletionStatus;
    this.date = taskDate;
};

// Container for div element "taskManager"
const container = document.getElementById("taskManager");

