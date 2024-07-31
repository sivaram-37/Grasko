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
    .then((data) => {
      console.log(data, coordinates);
    });
}

button.addEventListener("click", getUserLocation);

// const setTimer = (duration) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done!");
//     }, duration);
//   });
//   return promise;
// };

// const getLocation = () => {
//   const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         resolve(pos);
//       },
//       (error) => {
//         reject(error);
//       }
//     );
//   });
//   return promise;
// };

// async function trackUserHandler() {
//   let userLocation = await getLocation();
//   let timer = await setTimer(2000);
//   console.log(timer, userLocation);
//   // let position;
//   // getLocation()
//   //   .then((pos) => {
//   //     position = pos;
//   //     return setTimer(2000);
//   //   })
//   //   .catch((error) => {
//   //     console.log(error);
//   //     return "Can't get the location";
//   //   })
//   //   .then((data) => {
//   //     console.log(data, position);
//   //   });
//   // setTimer(1000).then(() => {
//   //   console.log("Timer Done...!");
//   // });
//   // console.log("Getting coordinates....");
// }

// button.addEventListener("click", trackUserHandler);
