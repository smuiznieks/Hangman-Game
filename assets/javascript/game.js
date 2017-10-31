var wins = 0;
var remainingGuesses = 12;
var alreadyGuessed = null;

var hangmanWords = ['cow', 'cat', 'dog', 'pig'];
var computerGuess = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];

document.onkeyup = function(event) {
	var userGuess = event.key;
	var wordLength = computerGuess.length;

	for (var i = 0; i < wordLength; i++) {
		if (userGuess === i) {
			console.log(userGuess + ' is correct!');
		}

		else {
			remainingGuesses--;
		}
	}

	if (userGuess === computerGuess.charAt(0)) {
		console.log(userGuess + ' is correct!');
	}

	else if (userGuess === computerGuess.charAt(1)) {
		console.log(userGuess + ' is correct!');
	}

	else if (userGuess === computerGuess.charAt(2)) {
		console.log(userGuess + ' is correct!');
	}

	else {
		remainingGuesses--;
	}
	console.log(computerGuess);
	console.log('Remaining Guesses:' + remainingGuesses);
};

// “document.getElementById”, alongside either “innerHTML” or “textcontent”, to write to the DOM.
