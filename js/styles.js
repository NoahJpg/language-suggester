let form = document.querySelector("form");
form.onsubmit = function(event) {
  event.preventDefault();


  var celebrity = document.querySelector("input#celebrity").value;
  var zodiac = document.querySelector("input#zodiac").value;
  var direction = document.querySelector("input#direction").value;
  var genre = document.querySelector("input#genre").value;

  const userInput = document.getElementById("celebrity").value;

  console.log("submit form successful")

if (celebrity === "N/A") {
  alert("Pick a celebrity!")
}

}


  if (celebrity === "Willem Dafoe") || (media === "movies") || (direction == "left") || (color = "purple") {
    document.getElementById("Python")
  } else if (celebrity === "Beyonce") || (media === "Video Games") || (direction == "right") || (color === "pink") {
    document.getElementById("C#").show();
  } else if (celebrity === "Wendy Williams") && (media === "television") || (color === "red") {
    document.getElementById("JavaScript")
  } else 

