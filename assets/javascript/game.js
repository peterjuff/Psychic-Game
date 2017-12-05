var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
"t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [""];

	

document.onkeyup = function(event) {

	

	var computerTurn = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	 
	  console.log(computerTurn);

	  var userGuess = event.key;

	


	if(userGuess === computerTurn) {
		wins++; alert("You are Psychic!");
	}
	else{
		guessesLeft--;
	}
	if(guessesLeft === 0) {
		losses++; alert("You are NOT Psychic!");
	}


	document.getElementById("Wins").innerHTML = "Wins: " + wins;
	document.getElementById("Losses").innerHTML = "Losses: " + losses;
	document.getElementById("Left").innerHTML = "Guesses Left: " + guessesLeft;
	document.getElementById("SoFar").innerHTML = "Your Guesses so far: " + userGuess;

};