let python = document.getElementById("Python")
let cSharp = document.getElementById("CSharp")
let javaScript = document.getElementById("JavaScript")
let form = document.querySelector("form");

function hideResults() {
  python.setAttribute("class", "hidden");
  cSharp.setAttribute("class", "hidden");
  javaScript.setAttribute("class", "hidden");
}
function showResults() {
  python.removeAttribute("class", "hidden");
  cSharp.removeAttribute("class", "hidden");
  javaScript.removeAttribute("class", "hidden");
}
  form.onsubmit = function(event) {
    event.preventDefault();
    showResults();
    const celebrityResult = toString(document.getElementById("input#celebrity"));
    const mediaResult = toString(document.getElementById("input#media"));
    const directionResult = toString(document.getElementById("input#direction"));
    const genreResult = toString(document.getElementById("input#genre"));
    const colorResult = toString(document.getElementById("input#color"));

    if (celebrityResult && mediaResult && directionResult && genreResult && colorResult) {
      if (mediaResult === "television" ) {
        window.alert("something is working");
      } else if (directionResult === "up") {
        window.alert("nothing is working");
      } else {
        window.alert("IT DOES NOT WORK YET")
      }
    };
  };


