//global variables
const computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
"t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerTurn = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerTurn)

//computer chooses random letter
//user guess a letter
//check to make sure user keystroke is a letter--alert if not a letter
//conditional statement comparing compTurn and user guess/display user guess
//if incorrect, deduct from guessesLeft and be able to continue untill no more guesses allowed
//if correct display congrats you are psychich on a new div and restart game

document.onkeyup = function(event) {

	function reset(computerTurn) {
		guessesLeft = 9;
		guessesSoFar = [];
		computerTurn++;
	
	}

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

	if (userGuess === computerTurn) {
		wins++;
		alert("You ARE Psychic!")
		reset(computerTurn);
	}
	
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
	document.getElementById("left").innerHTML = "Guesses Left: " + guessesLeft;
	document.getElementById("soFar").innerHTML = "Your Guesses so far: " + guessesSoFar;


	


}

	


























// document.onkeyup = function(event) {

	

// 	 var reset = function(computerTurn) {
// 	   guessesLeft = 9;
// 	   guessesSoFar = [ ];
// 	   computerTurn;

//    }




// 	var userGuess = event.key;
// 	//console.log(guessesSoFar);
// 	var checkLetter = guessesSoFar.indexOf(userGuess);
// 	//console.log(checkLetter);
// 	if (checkLetter == -1) {
		
	

// 	guessesSoFar.push(userGuess);	



// 	if (event.keyCode >= 65 && event.keyCode <= 90) {
		
// 	}
// 	else {
// 		alert("That's not a letter!");
// 		guessesSoFar.push(userGuess) = false;
// 	}



// 	if(userGuess === computerTurn) {
// 		wins++; alert("You are Psychic! Play again!"); 
// 		guessesLeft = 9; 
// 		guessesSoFar.length = 0; 
// 		computerTurn++;
// 	}
	
// 	else{
// 		guessesLeft--;
// 	}
// 	if(guessesLeft == 0) {
// 		losses++; 
// 		guessesLeft = 9; 
// 		guessesSoFar.length = 0; 
// 		computerTurn++;
// 		alert("You are NOT Psychic! Try again!"); 
		
	
// 	}




// 	document.getElementById("Wins").innerHTML = "Wins: " + wins;
// 	document.getElementById("Losses").innerHTML = "Losses: " + losses;
// 	document.getElementById("Left").innerHTML = "Guesses Left: " + guessesLeft;
// 	document.getElementById("SoFar").innerHTML = "Your Guesses so far: " + guessesSoFar.join(", ");
// }
// else {

// 	alert("You've already guessed that letter.")}
// };

