// generate a random number between 1 and 10
var answer = Math.floor(Math.random() * 10) + 1;
console.log('answer random====' ,answer);


// function to check the user's guess
function checkGuess() {
  var guess = parseInt(document.getElementById("guess").value);
  console.log(' guess ===' ,guess);
  if (guess === answer) {
    console.log();
    document.getElementById("result").innerHTML = "Congratulations! You guessed the number.";
  } else {
    document.getElementById("result").innerHTML = "Sorry, that's not it. Guess again.";
  }
}
    