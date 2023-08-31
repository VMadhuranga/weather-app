import fetchWeatherData from "./weather-data";

const searchLocationInput = document.querySelector(
  "[data-search-location-input]",
);
const searchLocationButton = document.querySelector(
  "[data-search-location-button]",
);
const location = document.querySelector("[data-location]");
const currentWeatherInfo = document.querySelector(
  "[data-current-weather] > ul",
);
const tomorrowThisHourWeather = document.querySelector(
  "[data-tomorrow-this-hour-weather] > ul",
);
const temperatureSelectInput = document.querySelector(
  "[data-temperature-select-input]",
);
const windSpeedSelectInput = document.querySelector(
  "[data-wind-speed-select-input]",
);

export default function searchLocation() {
  searchLocationButton.addEventListener("click", () => {
    if (searchLocationInput.value) {
      fetchWeatherData(searchLocationInput.value);
    } else {
      alert("Please enter your location");
    }
  });
}

export function displayLocation(value) {
  location.textContent = value;
}

export function displayCurrentWeather(data) {
  currentWeatherInfo.replaceChildren();

  const conditionIcon = document.createElement("img");
  const condition = document.createElement("li");
  const dateAndTime = document.createElement("li");
  const humidity = document.createElement("li");
  const temperature = document.createElement("li");
  const windDirection = document.createElement("li");
  const windSpeed = document.createElement("li");
  const lastUpdated = document.createElement("li");

  conditionIcon.src = `https:${data.conditionIcon}`;
  condition.textContent = `Condition: ${data.condition}`;
  dateAndTime.textContent = `Date & Time: ${data.dateAndTime}`;
  humidity.textContent = `Humidity: ${data.humidity}`;
  temperature.textContent = showTemperature(data);
  windDirection.textContent = `Wind Direction: ${data.windDirection}`;
  windSpeed.textContent = showWindSpeed(data);
  lastUpdated.textContent = `Last Updated: ${data.lastUpdated}`;

  currentWeatherInfo.append(
    conditionIcon,
    condition,
    dateAndTime,
    humidity,
    temperature,
    windDirection,
    windSpeed,
    lastUpdated,
  );
}

export function displayTomorrowThisHourWeather(data) {
  tomorrowThisHourWeather.replaceChildren();

  const conditionIcon = document.createElement("img");
  const condition = document.createElement("li");
  const dateAndTime = document.createElement("li");
  const humidity = document.createElement("li");
  const temperature = document.createElement("li");
  const windDirection = document.createElement("li");
  const windSpeed = document.createElement("li");

  conditionIcon.src = `https:${data.conditionIcon}`;
  condition.textContent = `Condition: ${data.condition}`;
  dateAndTime.textContent = `Date & Time: ${data.dateAndTime}`;
  humidity.textContent = `Humidity: ${data.humidity}`;
  temperature.textContent = showTemperature(data);
  windDirection.textContent = `Wind Direction: ${data.windDirection}`;
  windSpeed.textContent = showWindSpeed(data);

  tomorrowThisHourWeather.append(
    conditionIcon,
    condition,
    dateAndTime,
    humidity,
    temperature,
    windDirection,
    windSpeed,
  );
}

export function changeTemperature(...data) {
  temperatureSelectInput.addEventListener("change", () => {
    displayCurrentWeather(data[0]);
    displayTomorrowThisHourWeather(data[1]);
  });
}

function showTemperature(data) {
  let value;

  if (temperatureSelectInput.value === "fahrenheit") {
    value = `Temperature: ${data.temperatureFahrenheit}\u2109`;
  } else if (temperatureSelectInput.value === "celsius") {
    value = `Temperature: ${data.temperatureCelsius}\u2103`;
  }

  return value;
}

export function changeWindSpeed(...data) {
  windSpeedSelectInput.addEventListener("change", () => {
    displayCurrentWeather(data[0]);
    displayTomorrowThisHourWeather(data[1]);
  });
}

function showWindSpeed(data) {
  let value;

  if (windSpeedSelectInput.value === "kph") {
    value = `Wind Speed: ${data.windSpeedKPH}kph`;
  } else if (windSpeedSelectInput.value === "mph") {
    value = `Wind Speed: ${data.windSpeedMPH}mph`;
  }

  return value;
}
