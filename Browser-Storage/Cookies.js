const storeBtn = document.getElementById("store-btn");
const retriveBtn = document.getElementById("retrieve-btn");

const userId = "test@test.gmail.com";
const user = JSON.stringify({ name: "siva", age: 22 });

const storeDataHandler = () => {
  document.cookie = `uid=${userId}; Max-Age=20`;
  document.cookie = `user=${user}`;
};

const retriveDataHandler = () => {
  console.log(document.cookie);
};

storeBtn.addEventListener("click", storeDataHandler);
retriveBtn.addEventListener("click", retriveDataHandler);
