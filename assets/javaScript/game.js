 //this records user button press
 var computerChoices = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

      //create variables for counts?
      var wins = 0;
      var losses = 0; 
      var guessCount = [10];
      
      //var to print to html

      var directionsVan = document.getElementById ("directions-van");
      var directionsText = document.getElementById ("directions-text");
      var winText = document.getElementById ("win-text");
      var lossesText = document.getElementById ("losses-text");
      var guessesLeft = document.getElementById ("guesses-left");
      var failGuess = document.getElementById ("fail-guess");
      var computerGuess = document.getElementById ("computer-guess");

      //adding debugging attempt remove function

      var guessesLeft = document.getElementById("guesses-left");

      //code to make computer randomly choose from array

      var computerGuess = computerChoices [
        Math.floor(Math.random()*computerChoices.length)];
      
        ///in here lies the problem????
      var restart = function() {
          guessesLeft = 9;
          failGuess = [];
          var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      }
        
    document.onkeyup = function(event){
         //determines which key was pressed

        var userGuess = event.key;
        console.log(userGuess)

        
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
    
        guessesLeft.textContent = "You have: " + (10 - guessCount.length) + " tries remaining.";
    };









