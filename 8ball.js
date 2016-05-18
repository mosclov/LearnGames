
var answers = ["Yes", "No", "Maybe", "Okay"];

$(document).keypress(function(e) {
  if(e.which == 13) {
    //if enter is pressed
    enter();
  }
});

function enter() {
  var random = Math.floor(Math.random()*4)
  $("#output").text(answers[random]);
}
