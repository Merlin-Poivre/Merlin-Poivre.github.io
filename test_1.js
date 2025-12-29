const lesElements = document.querySelectorAll("li");

function changerValidation(e) {
  if (!e.target.className) {
    e.target.className = "fini";
  } else {
    e.target.className = "";
  }
}

lesElements.forEach((element) => {
  element.addEventListener("click", changerValidation);
});