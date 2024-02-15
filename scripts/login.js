"use strict";

const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");

//////////////////////////////////////////////

btnSubmit.addEventListener("click", function () {
  const isValidate = validate();
  //Check if the information is logged in correctly
  if (isValidate) {
    const user = userArr.find(
      (item) =>
        item.userName === inputUsername.value &&
        item.passWord === inputPassword.value
    );

    if (user) {
      alert("Success login !");
      //Save userActive to localStorage
      saveToLocalStorage("userActive", user);
      //change to index's page
      window.location.assign("../index.html");
    } else {
      alert("Login failed, check Username and password");
    }
  }
});

/////////////////////////////////////////////////////
//Check if the information is logged
function validate() {
  let isValidate = true;
  if (inputUsername.value === "") {
    alert("Enter username.");
    isValidate = false;
  }
  if (inputPassword.value === "") {
    alert("Enter password.");
    isValidate = false;
  }
  return isValidate;
}
