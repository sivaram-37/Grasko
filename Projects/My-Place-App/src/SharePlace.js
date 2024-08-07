import { Modal } from "./UI/Modal";

class PlaceFinder {
  constructor() {
    const getAddressForm = document.querySelector("form");
    const getLocation = document.querySelector("#locate-btn");

    const getLocationHandler = () => {
      if (!navigator.geolocation) {
        alert(
          "Your browser doesn't support geoloaction, try entering your address manually...!"
        );
        return;
      }
      const modal = new Modal(
        "loading-modal-content",
        "Getting your location,Please wait...!!!"
      );
      modal.show();
      navigator.geolocation.getCurrentPosition(
        (success) => {
          modal.hide();
          const coordinates = {
            lat: success.coords.latitude,
            lng: success.coords.longitude,
          };
          console.log(coordinates);
        },
        (err) => {
          modal.hide();
          alert("can't get your location, try entering your address manually...!");
        }
      );
    };

    getLocation.addEventListener("click", getLocationHandler);
  }
}
new PlaceFinder();
