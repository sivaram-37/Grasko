import { Modal } from "./UI/Modal";
import { Map } from "./UI/Map";
import { getAddressFromCoords, getCoordsFromAddress } from "./Utility/Location";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");
    this.shareBtn = document.getElementById("share-btn");
    this.shareLinkElement = document.getElementById("share-link");

    this.shareBtn.addEventListener("click", this.shareBtnHandler.bind(this));
    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    addressForm.addEventListener("submit", this.findUserHandler.bind(this));
  }

  shareBtnHandler() {
    if (!navigator.clipboard) {
      this.shareLinkElement.select();
      return;
    }
    navigator.clipboard
      .writeText(this.shareLinkElement.value)
      .then(() => alert("Link is copied into clipboard"))
      .catch((err) => console.log(err));
  }

  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
    fetch("http://localhost:3000/add-location", {
      method: "POST",
      body: JSON.stringify({
        address: address,
        lat: coordinates.lat,
        lng: coordinates.lng,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.shareBtn.disabled = false;
        this.shareLinkElement.value = `${location.origin}/my-place?location=${data.locId}`;
      });
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert("Cannot find  your location,kindly use a modern browser");
      return;
    }
    const modal = new Modal("loading-modal-content", "Loading location - please wait!");
    modal.show();
    navigator.geolocation.getCurrentPosition(
      async (successResult) => {
        console.log(successResult);
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        modal.hide();
        const address = await getAddressFromCoords(coordinates);
        this.selectPlace(coordinates, address);
      },
      (error) => {
        modal.hide();
        console.log("Cannot find your location, enter your address manually");
      }
    );
  }

  async findUserHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector("input").value;
    if (!address || address.trim().tength === 0) {
      alert("Invalid address, Try using valid address...!!!");
      return;
    }
    const modal = new Modal("loading-modal-content", "Loading location - please wait!");
    modal.show();
    try {
      const coordinates = await getCoordsFromAddress(address);
      console.log(coordinates);
      this.selectPlace(coordinates, address);
    } catch (err) {
      alert(err.message);
    }
    modal.hide();
  }
}

new PlaceFinder();
