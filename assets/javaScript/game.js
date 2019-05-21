//this records user button press

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//create variables for counts?
var wins = 0;
var losses = 0;
//var userGuess = null;
var guessLeft = 9;
var choiceToGuess;
var failGuessArr = [];


//var to print to html

var directionsVan = document.getElementById("directions-van");
var directionsText = document.getElementById("directions-text");
var winText = document.getElementById("win-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var failGuess = document.getElementById("fail-guess");
//var computerGuess = document.getElementById ("computer-guess");


var restart = function () {
  userGuess = "";
  guessCount = 9;
  computerGuess();
  guessLeft = 9;
  failGuessArr = [];
}

//code to make computer randomly choose from array
var computerGuess = function () {
  choiceToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

computerGuess();

//start this function on key up
document.onkeyup = function (event) {
  //determines which key was pressed

  var userGuess = event.key;
  console.log(userGuess)


  /**
   * = is reassign
   * == compare (dont check for types) '5' == 5 true
   * ==== compare (checks for types) '5' === 5 false
   */


  console.log("userGuess", userGuess)
  console.log("computerGuess", computerGuess)
  console.log("choiceToGuess", choiceToGuess)
  if (userGuess === choiceToGuess) {
    wins++;
    document.querySelector("#win-text").innerHTML = "Wins: " + (wins);
    console.log(wins)
    console.log(userGuess)
    restart();
    failGuess.innerHTML = "Your Guesses so far: " + failGuessArr.join(",")

  }



  else {


    if (guessLeft === 0) {
      losses++;
      restart();
    }

    document.querySelector("#losses-text").innerHTML = "Loses: " + (losses);

    failGuessArr.push(userGuess);
    console.log(failGuessArr)
    failGuess.innerHTML = "Your Guesses so far: " + failGuessArr.join(",")
    guessLeft--;
    guessesLeft.textContent = "You have: " + (guessLeft) + " tries remaining.";
    console.log(guessLeft, "guessLeft");

    //if reached end of count re start

  }

};









