var wins = 0;
var remainingGuesses = 12;
var alreadyGuessed = [];
var hangmanWords = ['html', 'css', 'javascript', 'networking', 'jquery', 'interviewing', 'ajax', 'mysql'];
var answer = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
var correctGuess = 0;


function newGame () {
	for (var j = 0; j < answer.length; j++) {
		var currentWord = document.querySelector('#current');
		var newWord = document.createElement('span');
		newWord.innerHTML = '_ ';
		currentWord.appendChild(newWord);
		newWord.setAttribute('id', 'id' + [j]);
	}
}

function restartGame () {
	remainingGuesses = 12;
	alreadyGuessed = [];
	correctGuess = 0;
	newGame ();
}

function updateWins() {
	document.querySelector('#wins').innerHTML = wins;
}

function updateRemaining() {
	document.querySelector('#remaining').innerHTML = remainingGuesses;
}

function updateLettersGuessed () {
	document.querySelector('#alreadyGuessed').innerHTML = alreadyGuessed;
}


	

// Execute functions below

document.querySelector('#wins').innerHTML = wins;
document.querySelector('#remaining').innerHTML = remainingGuesses;
document.querySelector('#alreadyGuessed').innerHTML = alreadyGuessed;

newGame();

document.onkeyup = function(event) {
	var userGuess = event.key;
	console.log(answer);

	for (var i = 0; i < answer.length; i++) {
		if (userGuess === answer[i]) {
			console.log(userGuess + ' is true');
			document.querySelector('#id' + [i]).innerHTML = userGuess;
			correctGuess++;
		}
	}

	alreadyGuessed.push(' ' + userGuess);
	remainingGuesses--;
	updateRemaining();
	updateLettersGuessed();	


	if (correctGuess === answer.length) {
		restartGame ();
	}

	if (remainingGuesses < 1) {
		restartGame ();
	}

}