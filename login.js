$(document).ready(function() {
  $("#btn").on("click", login);
});

function check(uId, pwd) {
  if (uId === pwd) {
    $("#message").text("Username can not be the same as password");
  }
  if (uId.length < 6 && pwd.length < 6) {
    $("#message").text("Username and password must be at least 6 characters long");
  }
  if (uId.includes("!") || uId.includes("$") || uId.includes("#")) {
    $("#message").text("Username can not include !, $, or #");
  }
  if (!pwd.includes("!") && !pwd.includes("$") && !pwd.includes("#")) {
    $("#message").text("Password must include at least one of the following characters: !, $, or #");
  }

  if (!pwd.includes("0") && !pwd.includes("1") && !pwd.includes("2") && !pwd.includes("3") && !pwd.includes("4") && !pwd.includes("5") && !pwd.includes("6") && !pwd.includes("7") &&
  !pwd.includes("8") && !pwd.includes("9")) {
    $("#message").text("Password must contain at least 1 digit");
  }

  if (pwd.toLowerCase() === "password") {
    $("#message").text("Password can not be 'password'");
  }
  if (pwd.toLowerCase() === pwd || pwd.toUpperCase() === pwd) {
    $("#message").text("Password must contain at least one uppercase and one lowercase character");
  }
  else {
    $('#btn').on("click", function() {
   window.location = "games.html";
});
  }
}

function login() {
  var uId = $("#user").val();
  var pwd = $("#pass").val();
  check(uId, pwd);
}
