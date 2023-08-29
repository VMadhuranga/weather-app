export default function getTomorrowWeather(data) {
  const tomorrowWeather = {
    date: data.forecast.forecastday[1].date,
    condition: data.forecast.forecastday[1].day.condition.text,
    conditionIcon: data.forecast.forecastday[1].day.condition.icon,
    averageTemperatureCelsius: data.forecast.forecastday[1].day.avgtemp_c,
    averageTemperatureFahrenheit: data.forecast.forecastday[1].day.avgtemp_f,
    averageHumidity: data.forecast.forecastday[1].day.avghumidity,
  };

  console.log(data.forecast.forecastday[1]);
  console.log(`Date: ${tomorrowWeather.date}`);
  console.log(`Condition: ${tomorrowWeather.condition}`);
  console.log(
    `Average Temperature: ${tomorrowWeather.averageTemperatureCelsius}c`,
  );
  console.log(
    `Average Temperature: ${tomorrowWeather.averageTemperatureFahrenheit}f`,
  );
  console.log(`Average Humidity: ${tomorrowWeather.averageHumidity}`);
}
