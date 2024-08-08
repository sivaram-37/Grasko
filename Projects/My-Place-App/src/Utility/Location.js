const API_KEY = "0dd8feb4b1e14a44b2495995697cb021";

export async function getAddressFromCoords(coords) {
  // console.log(encodeURI(coords.lat), encodeURI(coords.lng));
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURI(coords.lat)}+${encodeURI(
      coords.lng
    )}&key=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch coordinates");
  }
  const data = await res.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }
  const address = data.results[0].formatted;
  console.log(address);
  return address;
}

export async function getCoordsFromAddress(address) {
  const UrlAddress = encodeURI(address);

  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${UrlAddress}&key=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch coordinates");
  }
  const data = await res.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }

  const coordinates = data.results[0].geometry;
  return coordinates;
}
