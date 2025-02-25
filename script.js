const userName = "Tom";
const userAge = 18;

let userIsAdmin = true;
let userIsLoggedIn = false;
let userIsBlocked = false;

let goToPage = "";

const nameExist =
  (typeof userName === "string" || userName instanceof String) &&
  userName.length > 0;

if (nameExist && userAge >= 18 && !userIsBlocked) {
  userIsLoggedIn = true;
  if (userIsAdmin) {
    goToPage = "/admin";
  } else {
    goToPage = "/home";
  }
} else {
  console.log("feil");
}
console.log(goToPage);
