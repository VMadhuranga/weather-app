export default async function getWeatherData() {
  const API_KEY = "4be63e822db44a8d81c64432232608";
  // const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=kalutara`;
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=kalutara&days=2`;

  try {
    const response = await fetch(URL, { mode: "cors" });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}