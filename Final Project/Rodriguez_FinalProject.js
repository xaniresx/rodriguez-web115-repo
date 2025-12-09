// Task Constructor
function Task(taskId, taskName, taskPriority, isImportant, isCompleted, taskDate ) {
    this.taskId = taskId;
    this.taskName = taskName;
    this.taskPriority = taskPriority;
    this.isImportant = isImportant;
    this.isCompleted = isCompleted;
    this.taskDate = taskDate;
};

// Array to store tasks
let tasks = [];

// Task counter
let taskIDcounter = 1;

// Container for div element "taskManager"
const container = document.getElementById("taskManager");

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
taskNameInput.required = true;  // Makes task name required! 
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
// Create checkbox element for importance:
const importantCheckbox = document.createElement("input");
importantCheckbox.type = "checkbox";
importantCheckbox.id = "isImportant";
importantCheckbox.name = "isImportant";
form.appendChild(importantCheckbox);

// Add label next to importance checkbox:
const importantLabel = document.createElement("label");
importantLabel.textContent = "Important " // Space after text for better formatting for now
form.appendChild(importantLabel);

// CREATE A SUBMIT BUTTON TO ADD THE TASK TO THE LIST
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Add Task";
form.appendChild(submitButton);

// Append the form to the div container
container.appendChild(form);

// DIV TO DISPLAY TASKS IN A DEDICATED SECTION OF WEBPAGE
const displayTaskDiv = document.createElement("div");
displayTaskDiv.id = "displayTasks";
container.appendChild(displayTaskDiv); 

// Function to display all tasks
function displayTasks() {
    // Clear previous display
    displayTaskDiv.innerHTML = "";

    // IF no tasks yet -- prompts user to add some.
    if (tasks.length === 0) {
        displayTaskDiv.innerHTML = "<p>No tasks yet. Let's add some tasks!</p>";
        return;
    }

    // Display each task
    tasks.forEach(function(task) {
        // DIV for task item
        const taskItem = document.createElement("div");

        // Display task name
        const taskNameText = document.createElement("strong");
        taskNameText.textContent = task.taskName;
        taskItem.appendChild(taskNameText);

        // Display task priority
        const taskPrioritySetting = document.createElement("div");
        taskPrioritySetting.textContent = "Priority: " + task.taskPriority;
        taskItem.appendChild(taskPrioritySetting);

        // APPLY HIGHLIGHT OF IMPORTANT TASKS IN RED
        if (task.isImportant) {
            taskItem.style.backgroundColor = "lightcoral";
            taskItem.style.borderLeftColor = "red";
            taskItem.style.borderLeftStyle = "solid";
            taskItem.style.borderLeftWidth = "5px";
        }
    
        // Display task date
        const taskDate = document.createElement("div");
        taskDate.textContent = "Added: " + task.taskDate;
        taskItem.appendChild(taskDate);

        // ADD A CHECKBOX FOR MARKING A TASK AS COMPLETED OR DONE
        // Create checkbox element for completion:
        const completedCheckbox = document.createElement("input");
        completedCheckbox.type = "checkbox";
        completedCheckbox.id = "isCompleted";
        completedCheckbox.name = "isCompleted";
        taskItem.appendChild(completedCheckbox);

        // Add label next to completion checkbox:
        const completedLabel = document.createElement("label");
        completedLabel.textContent = "Done. ";
        taskItem.appendChild(completedLabel);

        // Event listener for completion checkbox:
        completedCheckbox.addEventListener('change', function() {
            task.isCompleted = completedCheckbox.checked;

            // Apply or remove strikethrough based on completion status
            if (task.isCompleted) {
                taskNameText.style.textDecoration = "line-through";
            } else {
                taskNameText.style.textDecoration = "none";
            }
        });

        // Delete button to remove task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteTask(task.taskId);
        };
        taskItem.appendChild(deleteButton);

        displayTaskDiv.appendChild(taskItem);
    });

}

// FUNCTION TO DELETE A TASK
function deleteTask(taskId) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].taskId === taskId) {
            tasks.splice(i, 1); // Removes task from array
            break;
        }
    }

    // Print to console after deletion
    console.log("Task deleted.\n Updated task list: ");
    console.log(JSON.stringify(tasks,null, 2)); // 2 is for spacing!

}

// EVENT LISTENER TO SUBMIT TASK VIA THE FORM
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get current date for task 
    const today = new Date();
    const todaysDate = today.toLocaleDateString();

    // Create a new task object with the form input values
    const newTask = new Task(
        taskIDcounter++,
        taskNameInput.value,
        prioritySelect.value,
        importantCheckbox.checked,
        false, // New tasks are not completed by default
        todaysDate
    ); 

    // Add task to array
    tasks.push(newTask);

    // Log added task to console in JSON -- NEED TO LOG ~ALL~ CHANGES!**
    console.log("Task successfully added.\n Current task list:");
    console.log(JSON.stringify(tasks,null, 2)); // 2 is for spacing!

    // Call displayTask function to update task list on page
    displayTasks();

    // Reset form after submission
    form.reset();

}); // END of event listener

// Call displayTasks function
displayTasks();