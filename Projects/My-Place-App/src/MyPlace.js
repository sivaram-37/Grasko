import { Map } from "./UI/Map";

class LoadedPlace {
  constructor(coordinates, address) {
    const showAddress = document.querySelector("header h1");
    showAddress.textContent = address;
    new Map(coordinates);
  }
}

const url = new URL(location.href);
const paremeters = url.searchParams;
// const coordinates = {
//   lat: paremeters.get("lat"),
//   lng: paremeters.get("lng"),
// };
// const address = paremeters.get("address");
const locId = paremeters.get("location");
fetch("http://localhost:3000/location/" + locId)
  .then((res) => {
    if (res.status === 404) {
      throw new Error("Could not find location");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    new LoadedPlace(data.coordinates, data.address);
  })
  .catch((err) => alert(err.message));
