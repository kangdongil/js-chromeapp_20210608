const API_KEY = "734e73caa42d5fa76a35322dd5a9abb9";

function onGeoSucc(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log(position);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const place = document.querySelector("#weather span:last-child");
      place.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoErr() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSucc, onGeoErr);
