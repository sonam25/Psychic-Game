 
        var wins = 0;
        var losses = 0;
        var guessLeft = 9;
        var guessSoFar=[] ;
        var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var ingame = document.getElementById("game");
       var  insidegame = 
             "<h1> Psychic-Game </h1>" +
             "<p>Guess what letter I'm thinking of </p>"+
             "<p> Wins:"+ wins + "</p>" +
             "<p> Losses:" + losses +  "</p>"+
             "<p> guessLeft: "+ guessLeft +"</p>"+
             "<p> guessSoFar: "+ guessSoFar +" </p>";
         ingame.innerHTML = insidegame;

          document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;
 //alert(userGuess);
// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
//alert(computerGuess);
 if(userGuess === computerGuess) 
 {
     wins++;
     guessLeft = 9;
     guessSoFar = [];
 }   
 else if(guessLeft == 0)
   {
       losses++
       guessLeft = 9;
     guessSoFar = [];
   }  
   else
 {
    guessLeft--;
    guessSoFar.push(userGuess);
 }
    var  insidegame = 
             "<h1> Psychic-Game </h1>" +
             "<p>Guess what letter I'm thinking of </p>"+
             "<p> Wins:"+ wins + "</p>" +
             "<p> Losses:" + losses +  "</p>"+
             "<p> guessLeft: "+ guessLeft +"</p>"+
             "<p> guessSoFar: "+ guessSoFar.join(",") +" </p>";
   
   document.querySelector("#game").innerHTML = insidegame;      
}
    
