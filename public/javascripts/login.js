const subBtn = document.getElementById("submit"),
  loginChoice = document.getElementById("login"),
  userField = document.getElementById("username-field"),
  passField = document.getElementById("password-field");

let loginType;

loginChoice.addEventListener("change", handleClick);

function handleClick(mouseEvent) {
  loginType = loginChoice.value;

  if (loginType === "Login with Username") {
    passField.style.display = "flex";
    userField.style.display = "flex";
  } else if (loginType === "Login with Google") {
    passField.style.display = "none";
    userField.style.display = "none";
  }
}
