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
    fetchWeatherData(searchLocationInput.value);
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
  if (temperatureSelectInput.value === "fahrenheit") {
    return `Temperature: ${data.temperatureFahrenheit}\u2109`;
  }

  if (temperatureSelectInput.value === "celsius") {
    return `Temperature: ${data.temperatureCelsius}\u2103`;
  }
}

export function changeWindSpeed(...data) {
  windSpeedSelectInput.addEventListener("change", () => {
    displayCurrentWeather(data[0]);
    displayTomorrowThisHourWeather(data[1]);
  });
}

function showWindSpeed(data) {
  if (windSpeedSelectInput.value === "kph") {
    return `Wind Speed: ${data.windSpeedKPH}kph`;
  }

  if (windSpeedSelectInput.value === "mph") {
    return `Wind Speed: ${data.windSpeedMPH}mph`;
  }
}
