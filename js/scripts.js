function hideResults() {
  python.setAttribute("class", "hidden");
  cSharp.setAttribute("class", "hidden");
  javaScript.setAttribute("class", "hidden");
}
function showResults(language) {
  language.removeAttribute("class", "hidden");
}
window.onload = function(event) {
let form = document.querySelector("form");

  form.onsubmit = function(event) {
    event.preventDefault();
    let python = document.getElementById("Python");
    let cSharp = document.getElementById("CSharp");
    let javaScript = document.getElementById("JavaScript");
    
    const celebrityResult = document.getElementById("celebrity").value;
    const mediaResult = document.getElementById("media").value;
    const directionResult = document.getElementById("direction").value;
    const genreResult = document.getElementById("genre").value;
    const colorResult = document.getElementById("color").value;

    if (celebrityResult && mediaResult && directionResult && genreResult && colorResult) {
      if ((celebrityResult === "robert") || (mediaResult === "television")) {
        showResults(python);
      } else if ((celebrityResult === "beyonce") || (mediaResult === "books") || (directionResult === "up")) {
        showResults(cSharp);
      } else if ((celebrityResult === "willem") && (genreResult === "horror-country" ) || (colorResult === "purple")) { 
        showResults(javaScript);
      } else {
        showResults(python)
      };
    };
  };
}