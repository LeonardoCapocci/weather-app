async function getWeather() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=ba2e280e87ad4e868ee165446241604&q=london`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

getWeather();
