function hideResults() {
  python.setAttribute("class", "hidden");
  cSharp.setAttribute("class", "hidden");
  javaScript.setAttribute("class", "hidden");
}
function showResults(language) {
  language.removeAttribute("class", "hidden");
  // python.removeAttribute("class", "hidden");
  // cSharp.removeAttribute("class", "hidden");
  // javaScript.removeAttribute("class", "hidden");
}
window.onload = function(event) {
let form = document.querySelector("form");

  form.onsubmit = function(event) {
    console.log("on submit working")
    event.preventDefault();
    let python = document.getElementById("Python")
    let cSharp = document.getElementById("CSharp")
    let javaScript = document.getElementById("JavaScript")
    
    const celebrityResult = document.getElementById("celebrity").value;
    const mediaResult = document.getElementById("media").value;
    const directionResult = document.getElementById("direction").value;
    const genreResult = document.getElementById("genre").value;
    const colorResult = document.getElementById("color").value;

    if (celebrityResult && mediaResult && directionResult && genreResult && colorResult) {
      if ((celebrityResult === "robert") || (mediaResult === "television") || (directionResult === "nowhere") || (genreResult === "iop" ) || (colorResult === "green")) {
        showResults(python);
      } else if ((celebrityResult === "beyonce") || (mediaResult === "books") || (directionResult === "up") || (genreResult === "shoegaze" ) || (colorResult === "red")) {
        showResults(cSharp);
      } else if ((celebrityResult === "willem") || (mediaResult === "videogames") || (directionResult === "down") || (genreResult === "horror-country" ) || (colorResult === "purple")) { 
        showResults(javaScript);
      } else {
        showResults(cSharp)
      };
    };
  };
}