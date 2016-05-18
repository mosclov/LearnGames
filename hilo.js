var win = 0;
var lose = 0;
var counter = 0;
var computerNum = Math.floor(Math.random()*100+1);
var userName = prompt("What is your name?");

function hiLo() {

  var num = parseInt($(".inputField").val());

  if (counter >= 7) {
    $("#output").text("Too many guesses, you lose!");
    lose = lose + 1;
    $("#losses").text(lose);
    counter = 0;
    computerNum = Math.floor(Math.random()*100+1);
  }

  if ((num > 100) || (num < 0)) {
    $("#output").text("Guess a number between 1-100! Try again.");
    counter = counter + 1;
  }

  if (num > computerNum && num < 101) {
    $("#output").text("Your number is too high! Try again.");
    counter = counter + 1;
  }

  if (num < computerNum && num > 0) {
    $("#output").text("Your number is too low! Try again.");
    counter = counter + 1;
  }

  if (num === computerNum) {
    $("#output").text("You win " + userName +"!" + " Play again!" );
    win = win + 1;
    $("#wins").text(win);
    counter = 0;
    computerNum = Math.floor(Math.random()*100+1);
  }

  if (isNaN($(".inputField").val()) === true) {
    $("#output").text("Please enter a valid number!");
    counter = counter + 1;
  }
};

$(document).ready(function() {
  $("#mybtn").on("click", hiLo);
});
