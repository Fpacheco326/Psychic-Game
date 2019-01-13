var alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var guessesSoFar = [];

var wins = 0;

var losses = 0;

var guessesRemaining = 10;

var compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];


function resetGame() {
    compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}




document.onkeyup = function(event) {

    var userGuess = event.key;

    if (userGuess === compLetter){
            wins++;
            guessesRemaining = 10;
            guessesSoFar=[];
            

    } else if (guessesRemaining - 1 === 0){
            losses++;
            guessesRemaining = 10;
            guessesSoFar=[];
            compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      
    

    } else {
        guessesRemaining--;
        guessesSoFar.push(userGuess);
        fillLettersGuessed = document.querySelector('#guessesSoFar').innerHTML = guessesSoFar.join('');
    console.log(guessesSoFar);    
    }

   

         fillWins = document.querySelector('#wins').innerHTML = wins;
    
         fillLosses = document.querySelector('#losses').innerHTML = losses;
    
         fillGuessesRemaining = document.querySelector('#guessesRemaining').innerHTML = guessesRemaining;
    
         
    

};


    console.log(compLetter);
    console.log(event);
    console.log(guessesRemaining);
    