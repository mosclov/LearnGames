var torpedoesLeft = 25;
var board = [ [], [], [] , [], [], [], [], [], [], [] ];
var HIT = 1;
var MISS = -1;
var SHIP = 0;
var NOTHING = undefined;
var hitScore = 0;

function addShips() {
    for (var i = 0; i<5; i++) {
      if (board[Math.floor(Math.random()*10)][Math.floor(Math.random()*10)] != SHIP)
        board[Math.floor(Math.random()*10)][Math.floor(Math.random()*10)] = SHIP;
    }
      // else {
      //   i--;
      // }

  };

addShips();


function reset() {
  torpedoesLeft = 25;
  hitScore = 0;
  board = [ [], [], [] , [], [], [], [], [], [], [] ];
  for (var i = 0; i<5; i++) {
    board[Math.floor(Math.random()*10)][Math.floor(Math.random()*10)] = SHIP;
  }
  $("td").removeClass("red");
  $("td").removeClass("orange");
  $("#message").text("Torpedoes Available: 25");
  $("#resetBtn").hide();
}

function checkLoss() {
  if (torpedoesLeft === 0) { //Use all torpedoes = lose
    $("#message").text("You Lose!");
    $("#resetBtn").show();
    reveal();
  }
};
//function to show ships
 function reveal() {
   for (var x = 0; x < 10; x++) {

     for (var y = 0; y < 10; y++) {
       if (board[x][y] === SHIP) {
         $("#"+x+y).addClass("orange");
       }
     }
   }
 }


$(document).ready(function(){
  //hide reset button
  $("#resetBtn").hide();

  //table
  for (var row = 0; row < 10; row++) { //creates table rows
      var insert = $("#gameboard").append("<tr></tr>");

    for (var data = 0; data < 10; data++) { //populates table with data and ID
      insert.append('<td id="' + row + data + '">' + row + data  + '</td>');
    }

  } // close of for loop

    $("#resetBtn").on("click", reset);

  //listen for clicks
  $("td").on("click",
    function() {
        var x = parseInt($(this).attr("id").charAt(0));
        var y = parseInt($(this).attr("id").charAt(1));

      if (board[x][y] === NOTHING && torpedoesLeft > 0) { //red if miss
        $(this).addClass("red");
        board[x][y] = MISS;
        torpedoesLeft--;
        $("#message").text("Torpedoes Available: " + torpedoesLeft);
        checkLoss();
      }

      if (board[x][y] === SHIP && torpedoesLeft > 0) { //orange if hit
        $(this).addClass("orange");
        hitScore++;
        torpedoesLeft--;
        $("#message").text("Torpedoes Available: " + torpedoesLeft);
        checkLoss();
      }

      if (hitScore === 5)
      {
        $("#message").text("You Win!");
        $("#resetBtn").show();
      }

    }) //end click function














}); //close document ready function
