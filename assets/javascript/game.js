var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
"t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

document.onkeyup = function(event) {

	var userGuess = event.key;
	var computerTurn = computerChoices[Math.floor(Math.random() * computerChoices.length)];


	var html =
		"<div>Wins: " + wins + "</div>"
		"<div>Losses: " + losses + "</div>"
		"<div>Guesses Left: " - guessesLeft - "</div>"
		"<div>Your Guesses so far: " + guessesSoFar + "</div>";

	document.querySelector("#psychic").innerHTML = html;
}