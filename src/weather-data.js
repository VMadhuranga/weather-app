// eslint-disable-next-line import/no-cycle
import {
  displayLocation,
  displayCurrentWeather,
  displayTomorrowThisHourWeather,
  changeTemperature,
  changeWindSpeed,
} from "./DOM-controller";

export default async function fetchWeatherData(location = "auto:ip") {
  const API_KEY = "4be63e822db44a8d81c64432232608";
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=2`;

  try {
    const response = await fetch(URL, { mode: "cors" });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    displayLocation(getLocation(data));
    displayCurrentWeather(getCurrentWeather(data));
    displayTomorrowThisHourWeather(getTomorrowThisHourWeather(data));
    changeTemperature(
      getCurrentWeather(data),
      getTomorrowThisHourWeather(data),
    );
    changeWindSpeed(getCurrentWeather(data), getTomorrowThisHourWeather(data));
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error);
  }
}

function getLocation(data) {
  const location = `${data.location.name} ${data.location.region} ${data.location.country}`;

  return location;
}

function getCurrentWeather(data) {
  const dateAndTime = data.location.localtime;
  const condition = data.current.condition.text;
  const conditionIcon = data.current.condition.icon;
  // eslint-disable-next-line prefer-destructuring
  const humidity = data.current.humidity;
  const temperatureCelsius = data.current.temp_c;
  const temperatureFahrenheit = data.current.temp_f;
  const windDirection = data.current.wind_dir;
  const windSpeedKPH = data.current.wind_kph;
  const windSpeedMPH = data.current.wind_mph;
  const lastUpdated = data.current.last_updated;

  return {
    dateAndTime,
    condition,
    conditionIcon,
    humidity,
    temperatureCelsius,
    temperatureFahrenheit,
    windDirection,
    windSpeedKPH,
    windSpeedMPH,
    lastUpdated,
  };
}

function getTomorrowThisHourWeather(data) {
  const hour = new Date(data.location.localtime).getHours();

  const dateAndTime = data.forecast.forecastday[1].hour[hour].time;
  const condition = data.forecast.forecastday[1].hour[hour].condition.text;
  const conditionIcon = data.forecast.forecastday[1].hour[hour].condition.icon;
  // eslint-disable-next-line prefer-destructuring
  const humidity = data.forecast.forecastday[1].hour[hour].humidity;
  const temperatureCelsius = data.forecast.forecastday[1].hour[hour].temp_c;
  const temperatureFahrenheit = data.forecast.forecastday[1].hour[hour].temp_f;
  const windDirection = data.forecast.forecastday[1].hour[hour].wind_dir;
  const windSpeedKPH = data.forecast.forecastday[1].hour[hour].wind_kph;
  const windSpeedMPH = data.forecast.forecastday[1].hour[hour].wind_mph;

  return {
    dateAndTime,
    condition,
    conditionIcon,
    humidity,
    temperatureCelsius,
    temperatureFahrenheit,
    windDirection,
    windSpeedKPH,
    windSpeedMPH,
  };
}
