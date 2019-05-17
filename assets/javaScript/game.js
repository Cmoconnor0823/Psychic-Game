 //this records user button press
 var computerChoices = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

      //create variables for counts?
      var wins = 0;
      var losses = 0;
      //do I need a var user guess ending with []
      var fail = []; //need to be an empty array to push info to

      //var relating to html

      var directionsVan = document.getElementById ("directions-van");
      var directionsText = document.getElementById ("directions-text");
      var winText = document.getElementById ("win-text");
      var lossesText = document.getElementById ("losses-text");
      var guessesLeft = document.getElementById ("guesses-left");
      var failGuess = document.getElementById ("fail-guess");
      // rename this????    var computerGuess = document.getElementById ("computer-guess");

 document.onkeyup = function(event){

    //determines which key was pressed

    var userGuess = event.key;

    //code to make computer randomly choose from array

    var computerGuess = computerChoices [
        Math.floor(math.random()*computerChoices.length)];

console.log(userGuess)


        
}
