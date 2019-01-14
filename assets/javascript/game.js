var alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var guessesSoFar = [];

var wins = 0;

var losses = 0;

var guessesRemaining = 10;

var compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

// This randomizes the letter selection process that the computer chooses //
function resetGame() {
    compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}




document.onkeyup = function(event) {
// This command is what applies the variable userGuess to the keys that are pressed on the keyboard//
    var userGuess = event.key;
// this if function is what states that if the userGuess is equal to the comps chosen letter then the statement is true and therefor applies a win to the win container category and also resets the guesses remaining counter to 10 as well as empties the guesses so far array. Its also resets the game to a new letter of the computers choosing//
    if (userGuess === compLetter){
            wins++;
            guessesRemaining = 10;
            guessesSoFar=[];
            resetGame();

 console.log(compLetter);          

    } else if (guessesRemaining - 1 === 0){
// this function is what states that if and only if the guesses remaining depletes to 0 then the losses counter goes up by 1 and the guesses so far array empties and the game resets and another random letter is chosen by the computer//

            losses++;
            guessesRemaining = 10;
            guessesSoFar=[];
            resetGame();

 console.log(compLetter);      
    

    } else {
// this function is what states that if the user guesses the wrong letter then the guesses counter goes down by 1 and populates the guesses so far array with the incorrect letters that the user has guessed//        
        guessesRemaining--;
        guessesSoFar.push(userGuess);
        fillLettersGuessed = document.querySelector('#guessesSoFar').innerHTML = guessesSoFar.join('');
console.log(guessesSoFar);    
    }

   
// these three statements are what populates the wins, losses, and guesses remaining counters.//
         fillWins = document.querySelector('#wins').innerHTML = wins;
    
         fillLosses = document.querySelector('#losses').innerHTML = losses;
    
         fillGuessesRemaining = document.querySelector('#guessesRemaining').innerHTML = guessesRemaining;
    
         
    

};


    console.log(compLetter);
    console.log(event);
    console.log(guessesRemaining);
    