"use strict";

const logiModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");

const welcomeMessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");

displayHome();
/**
 * Hàm hiển thị nội dung trên trang Home một cách hợp lý tùy vào trường hợp có người đang đăng nhập hay không
 */

function displayHome() {
  //if userActive "loginModal" and "ManiContent" will be none display
  if (userActive) {
    logiModal.style.display = "none";
    mainContent.style.display = "block";

    welcomeMessage.textContent = `welcome ${userActive.fistName}`;
    //and on the contrary
  } else {
    logiModal.style.display = "block";
    mainContent.style.display = "none";
  }
}

/////////////////////////////////////////////////
//btnLogout
btnLogout.addEventListener("click", function () {
  const isLogout = confirm("Are you sure you want to log out ?");

  if (isLogout) {
    welcomeMessage.style.display = "none";
    btnLogout.style.display = "none";
    userActive = null;
    saveToLocalStorage("userActive", userActive);
    displayHome();
  }
});
