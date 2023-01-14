window.onload = function() {
  const form = document.querySelector("form");


function hideResults() {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("C#").setAttribute("class", "hidden");
  document.getElementById("JavaScript").setAttribute("class", "hidden");
}


  form.onsubmit = function(event) {
    event.preventDefault();
    

    let celebrity = document.getElementById("celebrity");
    let media = document.getElementById("#media");
    let direction = document.getElementById("#direction");
    let genre = document.getElementById("#genre");
    let color = document.getElementById("#color");

    if ( 1 === 1 ) {
      window.alert("1 equals 1")
    
    
    window.onload = function() {
      document.querySelector("form").onsubmit = function(event) {
        event.preventDefault();
        hideResults();
        const age = parseInt(document.querySelector("input#age").value);
        const height = parseInt(document.querySelector("input#height").value);
      };
  };
  }
}
