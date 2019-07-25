var num1 = Math.floor(Math.random() * 6+1);
var num2 = Math.floor(Math.random() * 6+1);
var pic1 = document.querySelectorAll("img")[0];
var pic2 = document.querySelectorAll("img")[1];

//document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");

function diceRoll() {
    pic1.setAttribute("src", "images/dice" + num1 + ".png");
    pic2.setAttribute("src", "images/dice" + num2 + ".png");
    if (num1 === num2) {
        document.querySelector("title").innerHTML = "Draw!";
        document.querySelector("h1").innerHTML = "Draw!";
    } else if (num1 > num2) {
        document.querySelector("title").innerHTML = "Player 1 Wins!";
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (num1 < num2) {
        document.querySelector("title").innerHTML = "Player 2 Wins!";
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
}

window.onload = diceRoll()
console.log(num1);
console.log(num2);