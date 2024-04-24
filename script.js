const searchBoxInput = document.querySelector("#search-box-input");
const searchButton = document.querySelector("#search-button");

async function getWeather(location) {
  // console.log("GETWEATHER FUNCTION");
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=ba2e280e87ad4e868ee165446241604&q=${location}`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

function displayWeather() {
  getWeather(searchBoxInput.value);
}

searchButton.addEventListener("click", displayWeather);
