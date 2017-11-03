var wins = 0;
var remainingGuesses = 12;
var alreadyGuessed = [];
var correct = 0;
var hangmanWords = ['html', 'css', 'javascript', 'networking', 'jquery', 'interviewing', 'ajax', 'mysql'];
var word = '';

function getNewWord () {
	word = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
	console.log(word);
}

function newGame () {
	getNewWord ();
	for (var j = 0; j < word.length; j++) {
		var currentGame = document.querySelector('#current');
		var newWord = document.createElement('span');
		newWord.innerHTML = '_ ';
		currentGame.appendChild(newWord);
		newWord.setAttribute('id', 'id' + [j]);
	}
	correct = 0;
}

function clearGame () {
	for (var l = 0; l < word.length; word[l++] = 0) {
		var parent = document.querySelector('#current');
		var child = document.querySelector('#id' + [l]);
		parent.removeChild(child);
	}
	remainingGuesses = 12;
	alreadyGuessed = [];
	updateRemaining ();
	updateLettersGuessed ();
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

updateWins ();
updateRemaining ();
newGame ();

document.onkeyup = function(event) {
	var userGuess = event.key;
	var repeatGuess = null;
	var correctGuess = null;

	if (alreadyGuessed.length > 0) {
		for (var k = 0; k < alreadyGuessed.length; k++) {
			if (userGuess === alreadyGuessed[k]) {
				console.log(userGuess + 'is a repeat');
			}
		}
	}

	for (var i = 0; i < word.length; i++) {
		if (userGuess === word[i]) {
			console.log(userGuess + ' is correct');
			document.querySelector('#id' + [i]).innerHTML = userGuess;
			correctGuess = true;
			correct++;
		}
	}

	if (correctGuess != true) {
		alreadyGuessed.push(' ' + userGuess);
		remainingGuesses--;
		updateRemaining();
		updateLettersGuessed();	
	}
	
	if (correct === word.length) {
		wins++;
		updateWins ();
		clearGame ();
		newGame ();
	}

	if (remainingGuesses < 1) {
		clearGame ();
		newGame ();
	}

}