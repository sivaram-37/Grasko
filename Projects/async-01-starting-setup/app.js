const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

const getLocation = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve(pos);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};

// // without async and await
// function trackUserHandler() {
//   let position;
//   getLocation()
//     .then((pos) => {
//       position = pos;
//       return setTimer(2000);
//     })
//     .catch((error) => {
//       console.log(error);
//       return "Can't get the location";
//     })
//     .then((data) => {
//       console.log(data, position);
//     });
//   setTimer(1000).then(() => {
//     console.log("Timer Done...!");
//   });
//   console.log("Getting coordinates....");
// }

//

// with async and await
async function trackUserHandler() {
  let userLocation;
  let timer;
  try {
    userLocation = await getLocation();
    timer = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timer, userLocation);
}

button.addEventListener("click", trackUserHandler);
