var inputs = Array.from(document.querySelectorAll("input"));
var form = document.getElementById("form");
var formError = document.querySelector("#form-error");

function isValid(elements) {
  var isValid = false;
  elements.forEach(function (el) {
    if (el.value) isValid = true;
  });

  return isValid;
}

form.addEventListener("submit", function (event) {
  console.log("event: ", event);
  event.preventDefault();

  var validation = isValid(inputs);

  if (validation) {
    // Reset input values
    inputs.forEach(function (input) {
      input.value = "";
    });
    alert("Thanks for contacting us!");
  } else {
    formError.style.visibility = "visible";
  }
});

// Hide error message
inputs.forEach(function (input) {
  input.addEventListener("keypress", function (event) {
    var targetValue = event.target.value;
    if (targetValue.length) formError.style.visibility = "hidden";
  });
});
