"use strict";

//
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const parserUser = (userData) => {
  const user = new User(
    userData.fistName,
    userData.lastName,
    userData.userName,
    userData.passWord
  );
  return user;
};

let userList = getFromLocalStorage("userArr")
  ? getFromLocalStorage("userArr")
  : [];
let userArr = userList.map((user) => parserUser(user));

let userActive = getFromLocalStorage("userActive")
  ? parserUser(getFromLocalStorage("userActive"))
  : null;
