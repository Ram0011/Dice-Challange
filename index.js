//random first image
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomDiceImage =  "images/" + "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

//random second image
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomDiceImage2 =  "images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

//comparison
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! ";
}
else if(randomNumber1 < randomNumber2 ) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! ";
}
else {
  document.querySelector("h1").innerHTML = "Draw! ";
}
