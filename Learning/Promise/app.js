// Example for async/await
async function print() {
  console.log(await "Hello world");
}
console.log(1);
print();
console.log(2);

// Example for Promise
const promise = new Promise((resolve, reject) => {
  let x = 3;
  if (x % 2 === 0) {
    resolve("It is even");
  } else {
    reject("Not even");
  }
});

// console.log(1);
// promise.then((res) => console.log(res)).catch((err) => console.log(err));
// console.log(2);

// const button = document.querySelector("button");
// const output = document.querySelector("p");

// const timer = (duration) => {
//   const timerPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Timer is done...!!!");
//     }, duration);
//   });
//   return timerPromise;
// };

// const getCoordinates = () => {
//   const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => resolve(pos),
//       (err) => reject(err)
//     );
//   });
//   return promise;
// };

// function getUserLocation() {
//   let coordinates;
//   getCoordinates()
//     .then((pos) => {
//       coordinates = pos;
//       return timer(2000);
//     })
//     .catch((err) => err)
//     .then((data) => {
//       console.log(data, coordinates);
//     });
// }

// button.addEventListener("click", getUserLocation);

// // Promise.all;
// Promise.all([getLocation(), setTimer(2000)]).then((data) => console.log(data));

// // Promise.race;
// Promise.race([getLocation(), setTimer(0)]).then((data) => console.log(data));

// // Promise.allSettled;
// Promise.allSettled([getLocation(), setTimer(3000)]).then((data) => console.log(data));
