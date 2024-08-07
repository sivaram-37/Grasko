const storeBtn = document.getElementById("store-btn");
const retriveBtn = document.getElementById("retrieve-btn");

// Creating a db if db not present in indexedDB or open the db if it exist
let db;
const dbRequest = indexedDB.open("StorageDummy", 1);

// To add a data to the db "products" by using storeBtn
dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

// To add a data while creating the db
dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function (event) {
    const productsStore = db.transaction("products", "readwrite").objectStore("products");
    productsStore.add({
      id: "p1",
      name: "Dell omen",
      price: 70000,
      tags: ["Gaming", "Productivity"],
    });
  };
};

// Error msg if creating or openning the db
dbRequest.onerror = function (event) {
  console.log("error");
};

// StoreBtn event
storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const productsStore = db.transaction("products", "readwrite").objectStore("products");
  productsStore.add({
    id: "p2",
    name: "Lenovo Legion",
    price: 80000,
    tags: ["Gaming", "Productivity"],
  });
});

// RetriveBtn event
retriveBtn.addEventListener("click", () => {
  const productsStore = db.transaction("products", "readwrite").objectStore("products");
  const req = productsStore.get("p1");
  req.onsuccess = function () {
    console.log(req.result);
  };
});
