window.onload = function() {
  let form = document.querySelector("form");

 function handleSelect(event) {
  event.preventDefault();

    const celebrity = document.getElementById("#celebrity")
    let media = document.getElementById("#media")
    let direction = document.getElementById("#direction");
    let genre = document.getElementById("#genre");
    let color = document.getElementById("#color");

    const userInput = document.getElementById("celebrity").value;

  }

    if (celebrity === "robert") {
    window.alert("robert")
    }
    
window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
  });
}
