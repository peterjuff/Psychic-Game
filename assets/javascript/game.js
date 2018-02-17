var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
"t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [ ];



	var computerTurn = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	 
	  console.log(computerTurn);

	  var reset = function(computerTurn) {
		guessesLeft = 9;
		guessesSoFar = [ ];

	}
	

document.onkeyup = function(event) {




	var userGuess = event.key;
	guessesSoFar.push(" " + userGuess);	



	if (event.keyCode >= 65 && event.keyCode <= 90) {
		console.log("no numbers");
	}
	else {
		alert("That's not a letter!");
	}



	if(userGuess === computerTurn) {
		wins++; alert("You are Psychic! Play again!"); 
		guessesLeft = 9; 
		guessesSoFar.length = 0; 
		computerTurn++;
	}
	
	else{
		guessesLeft--;
	}
	if(guessesLeft == 0) {
		losses++; 
		alert("You are NOT Psychic! Try again!"); 
		guessesLeft = 9; 
		guessesSoFar.length = 0; 
		computerTurn++;
	}




	document.getElementById("Wins").innerHTML = "Wins: " + wins;
	document.getElementById("Losses").innerHTML = "Losses: " + losses;
	document.getElementById("Left").innerHTML = "Guesses Left: " + guessesLeft;
	document.getElementById("SoFar").innerHTML = "Your Guesses so far: " + guessesSoFar + "  ";

};

