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
  temperature.textContent = `Temperature: ${data.temperatureCelsius}\u2103`;
  windDirection.textContent = `Wind Direction: ${data.windDirection}`;
  windSpeed.textContent = `Wind Speed: ${data.windSpeedMPH}`;
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
