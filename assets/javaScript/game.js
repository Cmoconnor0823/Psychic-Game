 //this records user button press
 var computerChoices = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

      //create variables for counts?
      var wins = 0;
      var losses = 0;
      var failGuess = []; 
      var guessesLeft = 9;
      //var relating to html

      var directionsVan = document.getElementById ("directions-van");
      var directionsText = document.getElementById ("directions-text");
      var winText = document.getElementById ("win-text");
      var lossesText = document.getElementById ("losses-text");
      var guessesLeft = document.getElementById ("guesses-left");
      var failGuess = document.getElementById ("fail-guess");
      var computerGuess = document.getElementById ("computer-guess");

        
 document.onkeyup = function(event){
         //determines which key was pressed

    var userGuess = event.key;
    console.log(userGuess)

    //code to make computer randomly choose from array

    var computerGuess = computerChoices [
        Math.floor(Math.random()*computerChoices.length)];


        function countGuessesLeft() {
            document.getElementById("#guessesLeft").innerHTML="Guesses Left: " + guessesLeft;
        }

        function farUserGuesses() {
            document.getElementById("#fail-guess").innerHTML="Your Guesses so far: " + letterUser.join(' ');
        }
        
        countGuessesLeft();
        
        var restart = function() {
            guessesLeft = 9;
            failGuess = [];
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
    guessesLeft--;

	userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	failguess.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#win-text").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose-text").innerHTML = "Loses: " + losses;
		restart();
	}
  };









