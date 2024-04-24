const searchBoxInput = document.querySelector("#search-box-input");

const condition = document.querySelector(".current-weather-conditions");
const selectedLocation = document.querySelector(".selected-location");
const temp = document.querySelector(".current-temp");
const feelsLike = document.querySelector(".current-feels-like");
const wind = document.querySelector(".current-wind");
const humidity = document.querySelector(".current-humidity");

async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=ba2e280e87ad4e868ee165446241604&q=${location}`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

async function displayWeather() {
  const data = await getWeather(searchBoxInput.value);
  const weatherData = data.current;
  const locationData = data.location;

  condition.textContent = weatherData.condition.text;
  selectedLocation.textContent = `${locationData.name}, ${locationData.country}`;
  temp.textContent = `${weatherData.temp_f}°F`;
  feelsLike.textContent = `Feels Like: ${weatherData.feelslike_f}°F`;
  wind.textContent = `Wind: ${weatherData.wind_mph}mph`;
  humidity.textContent = `Humidity: ${weatherData.humidity}%`;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    displayWeather();
  }
});

displayWeather();
