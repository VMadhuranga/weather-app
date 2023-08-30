import fetchWeatherData from "./weather-data";

const searchLocationInput = document.querySelector(
  "[data-search-location-input]",
);
const searchLocationButton = document.querySelector(
  "[data-search-location-button]",
);
const currentWeather = document.querySelector("[data-current-weather]");

export default function searchLocation() {
  searchLocationButton.addEventListener("click", () => {
    fetchWeatherData(searchLocationInput.value);
  });
}
