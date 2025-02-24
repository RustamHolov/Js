const userName = "Tom";
const userAge = 18;

let userIsAdmin = true;
let userIsLoggedIn = false;
let userIsBlocked = false;

let goToPage = "";

if (userName != "" && userAge >= 18 && !userIsBlocked) {
  if (userIsAdmin) {
    goToPage = "/admin";
  } else {
    goToPage = "/home";
    userIsLoggedIn = true;
  }
} else {
  console.log("feil");
}
console.log(goToPage);
