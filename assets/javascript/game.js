//global variables
const computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
"t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerTurn;


function reset(computerTurn) {
	guessesLeft = 9;
	guessesSoFar = [];
	var computerTurn = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerTurn)
	
}
	
	document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		if (event.keyCode >= 65 && event.keyCode <= 90) {
			guessesSoFar
		}
		else {
			alert("That is not a letter. Please try again.")
			guessesSoFar = false;
		}


		var checkLetter = guessesSoFar.indexOf(userGuess);
		if (checkLetter == -1) {
			guessesSoFar.push(userGuess);
			guessesLeft--

		}
		else {
			alert("You've already guessed that letter. Try again.")
		}


		if (guessesLeft == 0) {
			losses++;
			alert("You are NOT Psychic! Try again!");
			reset(computerTurn);
		}

		if (userGuess == computerTurn) {
			wins++;
			alert("You ARE Psychic!")
			reset(computerTurn);
		}
		
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		document.getElementById("losses").innerHTML = "Losses: " + losses;
		document.getElementById("left").innerHTML = "Guesses Left: " + guessesLeft;
		document.getElementById("soFar").innerHTML = "Your Guesses so far: " + guessesSoFar;


	


}

