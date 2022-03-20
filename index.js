var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var RandomDiceImage1 = "images/" + "dice" + randomNum1 + ".png";
var RandomDiceImage2 = "images/" + "dice" + randomNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", RandomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", RandomDiceImage2);

if (randomNum1 > randomNum2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNum1 < randomNum2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}