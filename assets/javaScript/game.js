//this records user button press

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//create variables for counts?
var wins = 0;
var losses = 0;
var userGuess = [];
var guessesLeft = 9;
var choicesToGuess = null;
var failGuessArr = [];


//var to print to html

var directionsVan = document.getElementById("directions-van");
var directionsText = document.getElementById("directions-text");
var winText = document.getElementById("win-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var failGuess = document.getElementById("fail-guess");
//var computerGuess = document.getElementById ("computer-guess");


///in here lies the problem????

var restart = function () {
  userGuess = [];
  guessCount = 9;
  computerGuess();
  guessesLeft = 9;
  failGuessArr = [];
}

//code to make computer randomly choose from array
var computerGuess = function () {
  choicesToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  console.log(choicesToGuess)

}
//code to print user guesses so far
var userGuess = function () {
  document.getElementById("fail-guess").innerHTML = "Guesses so far: " + userGuess.join(",");
};

computerGuess();


document.onkeyup = function (event) {
  //determines which key was pressed

  var userGuess = event.key;
  console.log(userGuess)


  
//wins do not record
  if (userGuess === computerGuess) {
    wins++;
    document.querySelector("#win-text").innerHTML = "Wins: " + (wins) ;
    //restart();
    console.log(wins)
  }
   

  else {
    losses++;
    document.querySelector("#losses-text").innerHTML = "Loses: " + (losses) ;

    failGuessArr.push(userGuess);
    failGuess.innerHTML = "Your Guesses so far: " + failGuessArr.join(",")
    guessesLeft.textContent = "You have: " + (10 - failGuessArr.length) + " tries remaining.";

}
  //else {
    //restart()

 // }

};









