const storeBtn = document.getElementById("store-btn");
const retriveBtn = document.getElementById("retrieve-btn");

const userId = "test@test.gmail.com";
const userInfo = {
  name: "siva",
  age: 22,
  hobbies: ["music", "coding"],
};

const storeDataHandler = () => {
  sessionStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(userInfo));
};

const retriveDataHandler = () => {
  const retrivedUserId = sessionStorage.getItem("uid");
  const retrievedUserInfo = JSON.parse(localStorage.getItem("user"));
  console.log(retrievedUserInfo);
  if (retrivedUserId) {
    console.log("Retrived userId - " + retrivedUserId);
  } else {
    console.log("userId not found");
  }
};

storeBtn.addEventListener("click", storeDataHandler);
retriveBtn.addEventListener("click", retriveDataHandler);
