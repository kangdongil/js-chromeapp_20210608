function onGeoSucc(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(position);
}

function onGeoErr() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSucc, onGeoErr);
