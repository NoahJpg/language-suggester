function formSubmit(event) {
  event.preventDefault();
  // let python = document.getElementById("Python").value;
  // let cSharp = document.getElementById("CSharp").value;
  // let javaScript = document.getElementById("JavaScript").value;
  let celebrityResult = document.getElementById("input#celebrity").value;
  let mediaResult = document.getElementById("input#media").value;
  let directionResult = document.getElementById("input#direction").value;
  let genreResult = document.getElementById("input#genre").value;
  let colorResult = document.getElementById("input#color").value;
  const form = document.getElementById("results");

console.log(celebrityResult + " - celeb");

// function hideResults() {
//   python.setAttribute("class", "hidden");
//   cSharp.setAttribute("class", "hidden");
//   javaScript.setAttribute("class", "hidden");
// }
// function showResults() {
//   python.Element.removeAttribute("class", "hidden");
//   cSharp.removeAttribute("class", "hidden");
//   javaScript.removeAttribute("class", "hidden");
// }


  form.onsubmit = function(event) {
    event.preventDefault();


    if (celebrityResult && mediaResult && directionResult && genreResult && colorResult) {
      if ((celebrityResult === "robert") && (mediaResult === "television") && (directionResult === "nowhere") && (genreResult === "iop" ) || (colorResult === "green")) {
        showResults(python);
      } else if ((celebrityResult === "beyonce") && (mediaResult === "books") && (directionResult === "up") && (genreResult === "shoegaze" ) || (colorResult === "red")) {
        showResults(cSharp);
      } else if ((celebrityResult === "willem") && (mediaResult === "videogames") && (directionResult === "down") && (genreResult === "horror-country" ) || (colorResult === "purple")) { 
        showResults(JavaScript);
      } else {
        showResults(python);
      };
    };
  };
}

  window.addEventListener("load", function() {
    results.addEventListener("submit", formSubmit);
  })
  


