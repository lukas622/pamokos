"use strict";

const fetchUserData = async (id) => {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (data.status == 404) {
      throw new Error("ERROR: User not found!");
    }

    const dataToJson = await data.json();

    console.log(dataToJson.name);
  } catch (error) {
    console.error(error.message);
  }
};

fetchUserData(999);
