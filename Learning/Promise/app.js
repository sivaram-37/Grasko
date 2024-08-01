const button = document.querySelector("button");
const output = document.querySelector("p");

const timer = (duration) => {
  const timerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Timer is done...!!!");
    }, duration);
  });
  return timerPromise;
};

const getCoordinates = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(pos),
      (err) => reject(err)
    );
  });
  return promise;
};

function getUserLocation() {
  let coordinates;
  getCoordinates()
    .then((pos) => {
      coordinates = pos;
      return timer(2000);
    })
    .catch((err) => err)
    .then((data) => {
      console.log(data, coordinates);
    });
}

button.addEventListener("click", getUserLocation);

// Promise.all;
Promise.all([getLocation(), setTimer(2000)]).then((data) => console.log(data));

// Promise.race;
Promise.race([getLocation(), setTimer(0)]).then((data) => console.log(data));

// Promise.allSettled;
Promise.allSettled([getLocation(), setTimer(3000)]).then((data) => console.log(data));
