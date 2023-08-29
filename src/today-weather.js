export default function getTodayWeather(data) {
  const todayWeather = {
    location: `${data.location.name} ${data.location.region} ${data.location.country}`,
    dateAndTime: data.location.localtime,
    condition: data.current.condition.text,
    conditionIcon: data.current.condition.icon,
    temperatureCelsius: data.current.temp_c,
    temperatureFahrenheit: data.current.temp_f,
    windDirection: data.current.wind_dir,
    windSpeedKPH: data.current.wind_kph,
    windSpeedMPH: data.current.wind_mph,
    humidity: data.current.humidity,
    lastUpdated: data.current.last_updated,
  };

  console.log(todayWeather);
  console.log(`Location: ${todayWeather.location}`);
  console.log(`Date & Time: ${todayWeather.dateAndTime}`);
  console.log(`Condition: ${todayWeather.condition}`);
  console.log(`Condition Icon: ${todayWeather.conditionIcon}`);
  console.log(`Temperature: ${todayWeather.temperatureCelsius}c`);
  console.log(`Temperature: ${todayWeather.temperatureFahrenheit}f`);
  console.log(`Wind Direction: ${todayWeather.windDirection}`);
  console.log(`Wind Speed: ${todayWeather.windSpeedKPH}KPH`);
  console.log(`Wind Speed: ${todayWeather.windSpeedMPH}MPH`);
  console.log(`Humidity: ${todayWeather.humidity}`);
  console.log(`Last Updated: ${todayWeather.lastUpdated}`);
}
