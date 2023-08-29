const weatherData = {};

export default async function fetchWeatherData() {
  const API_KEY = "4be63e822db44a8d81c64432232608";
  // const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=kalutara`;
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=beruwala&days=2`;

  try {
    const response = await fetch(URL, { mode: "cors" });
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
    setCurrentWeather(data);
    setTomorrowThisHourWeather(data);
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
}

function setWeatherData(data) {
  weatherData.location = `${data.location.name} ${data.location.region} ${data.location.country}`;
  weatherData.currentWeather = {};
  weatherData.tomorrowThisHourWeather = {};
}

function setCurrentWeather(data) {
  weatherData.currentWeather.condition = data.current.condition.text;
  weatherData.currentWeather.conditionIcon = data.current.condition.icon;
  weatherData.currentWeather.humidity = data.current.humidity;
  weatherData.currentWeather.temperatureCelsius = data.current.temp_c;
  weatherData.currentWeather.temperatureFahrenheit = data.current.temp_f;
  weatherData.currentWeather.windDirection = data.current.wind_dir;
  weatherData.currentWeather.windSpeedKPH = data.current.wind_kph;
  weatherData.currentWeather.windSpeedMPH = data.current.wind_mph;
}

function setTomorrowThisHourWeather(data) {
  const hour = new Date(data.location.localtime).getHours();

  weatherData.tomorrowThisHourWeather.condition =
    data.forecast.forecastday[1].hour[hour].condition.text;
  weatherData.tomorrowThisHourWeather.conditionIcon =
    data.forecast.forecastday[1].hour[hour].condition.icon;
  weatherData.tomorrowThisHourWeather.humidity =
    data.forecast.forecastday[1].hour[hour].humidity;
  weatherData.tomorrowThisHourWeather.temperatureCelsius =
    data.forecast.forecastday[1].hour[hour].temp_c;
  weatherData.tomorrowThisHourWeather.temperatureFahrenheit =
    data.forecast.forecastday[1].hour[hour].temp_f;
  weatherData.tomorrowThisHourWeather.windDirection =
    data.forecast.forecastday[1].hour[hour].wind_dir;
  weatherData.tomorrowThisHourWeather.windSpeedKPH =
    data.forecast.forecastday[1].hour[hour].wind_kph;
  weatherData.tomorrowThisHourWeather.windSpeedMPH =
    data.forecast.forecastday[1].hour[hour].wind_mph;
}
