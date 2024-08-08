import { Map } from "./UI/Map";

class LoadedPlace {
  constructor(coords, address) {
    const showAddress = document.querySelector("header h1");
    showAddress.textContent = address;
    new Map(coordinates);
  }
}

const url = new URL(location.href);
const paremeters = url.searchParams;
const coordinates = {
  lat: paremeters.get("lat"),
  lng: paremeters.get("lng"),
};
const address = paremeters.get("address");
new LoadedPlace(coordinates, address);
