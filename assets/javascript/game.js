const computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
"t", "u", "v", "w", "x", "y", "z"];

const wins = 0;
const losses = 0;
const guessesLeft = 9;
const guessesSoFar = [ ];

const computerTurn = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerTurn);

	

document.onkeyup = function(event) {

	

	 var reset = function(computerTurn) {
	   guessesLeft = 9;
	   guessesSoFar = [ ];
	   computerTurn;

   }




	var userGuess = event.key;
	//console.log(guessesSoFar);
	var checkLetter = guessesSoFar.indexOf(userGuess);
	//console.log(checkLetter);
	if (checkLetter == -1) {
		
	

	guessesSoFar.push(userGuess);	



	if (event.keyCode >= 65 && event.keyCode <= 90) {
		
	}
	else {
		alert("That's not a letter!");
		guessesSoFar.push(userGuess) = false;
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
		guessesLeft = 9; 
		guessesSoFar.length = 0; 
		computerTurn++;
		alert("You are NOT Psychic! Try again!"); 
		
	
	}




	document.getElementById("Wins").innerHTML = "Wins: " + wins;
	document.getElementById("Losses").innerHTML = "Losses: " + losses;
	document.getElementById("Left").innerHTML = "Guesses Left: " + guessesLeft;
	document.getElementById("SoFar").innerHTML = "Your Guesses so far: " + guessesSoFar.join(", ");
}
else {

	alert("You've already guessed that letter.")}
};

