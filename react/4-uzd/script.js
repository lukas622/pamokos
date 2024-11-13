"use strict";

const displayUserName = async (userId) => {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (data.status == 404) {
      throw new Error("ERROR: User not found!");
    }

    const dataToJson = await data.json();

    const userInfo = document.querySelector(".user-info");

    userInfo.style.color = "green";
    userInfo.textContent = "User Name: " + dataToJson.name;
  } catch (error) {
    userInfo.style.color = "red";
    userInfo.textContent = error.message;
  }
};

displayUserName(1);
