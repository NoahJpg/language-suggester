window.onload = function() {

  let form = document.querySelector("form");

  form.onsubmit = function(event) {
    event.preventDefault();

    let celebrity = document.getElementById("celebrity");
    let zodiac = document.getElementById("zodiac");
    let direction = document.getElementById("direction");
    let genre = document.getElementById("genre");
    let color = document.getElementById("color");

    const userInput = document.getElementById("celebrity").value;

    if ((celebrity === "N/A") || (direction == "N/A") || (color === "N/A")) {
      alert("INCOMPLETE!")
    }

    if ((celebrity === "Willem Dafoe") || (media === "movies") || (direction == "up") || (color = "purple")) {
      form.removeAttribute("class");
    } else if ((celebrity === "Beyonce") || (media === "Video Games") || (direction == "down") || (color === "pink")) {
      document.getElementById("C#").show();
    } else if ((celebrity === "Wendy Williams") && (media === "television") || (color === "red")) {
      form.removeAttribute("class")
    } else {
      form.removeAttribute("class")
    }
  }
}