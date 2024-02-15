"use strict";

// truy cap dom get element - lay thong tin
const inputFistName = document.querySelector("#input-firstname");
const inputLastName = document.querySelector("#input-lastname");
const inputUserName = document.querySelector("#input-username");
const inputPassword = document.querySelector("#input-password");
const confirmPassword = document.querySelector("#input-password-confirm");
const submitBtn = document.querySelector("#btn-submit");
// logic validate
// checking data - delete space
let noSpaceString = (string) => {
  let newSring = [];
  for (let i = 0; i <= string.length; ++i) {
    if (string[i] !== " ") {
      newSring.push(string[i]);
    }
  }
  newSring = newSring.join("");
  return newSring;
};

//
// su li su kien
submitBtn.addEventListener("click", () => {
  let user = new User(
    noSpaceString(inputFistName.value).trim(),
    noSpaceString(inputLastName.value).trim(),
    noSpaceString(inputUserName.value).trim(),
    noSpaceString(inputPassword.value).trim(),
    noSpaceString(confirmPassword.value).trim()
  );
  console.log(noSpaceString(inputUserName.value).trim());
  const validateHandle = (user) => {
    let isValidate = true;
    //khong co truong input nao sau khi loai bo khoang trang bi bo trong
    if (noSpaceString(inputFistName.value).trim() === "") {
      console.log("sai fistName");
      alert("Vui long nhap FistName");
      isValidate = false;
    } else if (noSpaceString(inputLastName.value).trim() === "") {
      console.log("sai lastName");
      alert("Vui long nhap lastName");
      isValidate = false;
    } else if (noSpaceString(inputUserName.value).trim() === "") {
      console.log("sai userName");
      alert("Vui long nhap userName");
      isValidate = false;
    } else if (noSpaceString(inputPassword.value).trim() === "") {
      console.log("sai password");
      alert("Vui long nhap password");
      isValidate = false;
    } else if (noSpaceString(inputPassword.value).trim().length < 8) {
      console.log("sai ki tu");
      alert("password khong duoc nho hon 8 ki tu");
      isValidate = false;
    } else if (noSpaceString(confirmPassword.value).trim() === "") {
      alert("vui long nhap lai password");
      isValidate = false;
    } else if (
      noSpaceString(inputPassword.value).trim() !==
      noSpaceString(confirmPassword.value).trim()
    ) {
      alert("password va confirm password can giong nha");
      isValidate = false;
    } else if (
      !userArr.every((item) => (item.userName !== user.userName ? true : false))
    ) {
      alert("trung userName ");
      isValidate = false;
    }

    return isValidate;
  };
  let isValidate = validateHandle(user);
  if (isValidate) {
    userArr.push(user);
    saveToLocalStorage("userArr", userArr);
    alert("dang ki thanh cong");
    window.location.href = "../pages/login.html";
  }
});
