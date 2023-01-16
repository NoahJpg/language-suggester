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
      if ((celebrityResult === "robert") && (mediaResult === "television") || (directionResult === "nowhere") || (genreResult === "iop" ) || (colorResult === "green")) {
        function showResults(python);
      } else if ((celebrityResult === "beyonce") && (mediaResult === "books") || (directionResult === "up") || (genreResult === "shoegaze" ) || (colorResult === "red")) {
        function showResults(cSharp);
      } else  ((celebrityResult === "willem") || (mediaResult === "videogames") || (directionResult === "down") || (genreResult === "horror-country" ) || (colorResult === "purple")); { 
        function showResults(JavaScript);
      };
    };
  };


