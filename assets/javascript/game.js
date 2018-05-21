//global variables
const computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
"t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerTurn = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerTurn);

//function to reset the game after each win or loss

function reset() {
	guessesLeft = 9;
	guessesSoFar = [];
	computerTurn = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerTurn)
	
}

//check to make sure keystroke is a letter
	
	document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		if (event.keyCode >= 65 && event.keyCode <= 90) {
			guessesSoFar
		}
		else {
			alert("That is not a letter. Please try again.")
			guessesSoFar = false;
		}

//check to make sure user isn't able to guess same letter more than once


		var checkLetter = guessesSoFar.indexOf(userGuess);
		if (checkLetter == -1) {
			guessesSoFar.push(userGuess);
			guessesLeft--;

		}
		else {
			alert("You've already guessed that letter. Try again.")
		}



		if (guessesLeft === 0) {
			losses++;
			alert("You are NOT Psychic! Try again!");
			reset();
		}


		if (userGuess === computerTurn) {
			wins++;
			alert("You ARE Psychic!")
			reset();
		}
		
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		document.getElementById("losses").innerHTML = "Losses: " + losses;
		document.getElementById("left").innerHTML = "Guesses Left: " + guessesLeft;
		document.getElementById("soFar").innerHTML = "Your Guesses so far: " + guessesSoFar;

	

}

