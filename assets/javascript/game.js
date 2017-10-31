var wins = 0;
var remainingGuesses = 12;
var alreadyGuessed = [];

var hangmanWords = ['cow', 'cat', 'dog', 'pig'];
var answer = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];

function updateWins() {
	document.querySelector("#wins").innerHTML = wins;
}

function updateRemaining() {
	document.querySelector("#remaining").innerHTML = remainingGuesses;
}

function updateLettersGuessed () {
	document.querySelector("#alreadyGuessed").innerHTML = alreadyGuessed;
}

function startGame() {
	document.querySelector("#current").innerHTML = '_ _ _';
}


startGame();

document.onkeyup = function(event) {
	var userGuess = event.key;

	console.log(answer);

	for (var i = 0; i < answer.length; i++) {
		if (userGuess === answer[i]) {
			console.log(userGuess + ' is correct!');
		}
	}

	if (userGuess !== answer[i]) {
		alreadyGuessed.push(' ' + userGuess);
		remainingGuesses--;
	}

	

	//console.log('Wins: ' + wins);
	//console.log('Remaining Guesses: ' + remainingGuesses);
	//console.log('Already Guessed: ' + userGuess);

	updateWins();
	updateRemaining();
	updateLettersGuessed();
	
};
