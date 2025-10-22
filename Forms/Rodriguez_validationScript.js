// JavaScript code for form validation
let myForm = document.forms.myForm;
let input = document.getElementById("inputField");

// Disable default browser validation tools
myForm.noValidate = true;

// Add an event listener to the form that submits an event
 myForm.addEventListener('submit', function(e) {
    // Prevent form from submitting
    e.preventDefault();

    // Retrieve the input field value
    let inputValue = input.value;

    // Regular expression pattern for alphanumeric input
    let pattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (!pattern.test(inputValue)) {

      // Set custom validity message
      input.setCustomValidity("Error: Input must be alphanumeric.");

      // Invalid input: display error message
      let error = document.createElement("label");
      error.id = "errorMessage";
      error.textContent = input.validationMessage;
      error.style.color = "red";
      error.style.fontSize = "10px";

      // Inserts the error after the input field
      input.parentNode.insertBefore(error, input.nextSibling);
    } else {
      // Valid input: display confirmation and submit the form
      input.setCustomValidity("");
      myForm.submit();
      alert("Valid input! Form submitted.");
    }
 });