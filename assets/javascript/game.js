var alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var guessesSoFar = [];

var wins = 0;

var losses = 0;

var guessesRemaining = 10;

display();

resetGame();

document.onkeyup = function(event) {

    var userGuess = event.key;
    if (userGuess === compLetter){
        wins();
    } else if (guessesRemaining - 1 === 0){
        losses();
    } else {
        wrong(guessesSoFar);
    }

    display();
}

    function display(){

        var fillWins = document.querySelector('#wins');

        var fillLosses = document.querySelector('#losses');

        var fillGuessesRemaining = document.querySelector('#guessesRemaining');

        var fillLettersGuessed = document.querySelector('#guessesSoFar');

        fillWins.innerHTML = wins;

        fillLosses.innerHTML = losses;

        fillGuessesRemaining.innerHTML = guessesRemaining;

        fillLettersGuessed.innerHTML = guessesSoFar.join();
    }

    function wins() {
        wins++;
        resetGame();
    }  

    function losses() {
        losses++;
        resetGame();
    }
    
    function wrong(guessesSoFar) {
        guessesRemaining--;
        alphabet.push(guessedLetters);
    }  

    function resetGame() {
        guessesRemaining = 10;
        guessedLetters=[];
        wins=0;
        losses=0;
        compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    console.log(compLetter);
