/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM-controller.js":
/*!*******************************!*\
  !*** ./src/DOM-controller.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeTemperature: () => (/* binding */ changeTemperature),
/* harmony export */   changeWindSpeed: () => (/* binding */ changeWindSpeed),
/* harmony export */   "default": () => (/* binding */ searchLocation),
/* harmony export */   displayCurrentWeather: () => (/* binding */ displayCurrentWeather),
/* harmony export */   displayLocation: () => (/* binding */ displayLocation),
/* harmony export */   displayTomorrowThisHourWeather: () => (/* binding */ displayTomorrowThisHourWeather)
/* harmony export */ });
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ "./src/weather-data.js");

const searchLocationInput = document.querySelector("[data-search-location-input]");
const searchLocationButton = document.querySelector("[data-search-location-button]");
const location = document.querySelector("[data-location]");
const currentWeatherInfo = document.querySelector("[data-current-weather] > ul");
const tomorrowThisHourWeather = document.querySelector("[data-tomorrow-this-hour-weather] > ul");
const temperatureSelectInput = document.querySelector("[data-temperature-select-input]");
const windSpeedSelectInput = document.querySelector("[data-wind-speed-select-input]");
function searchLocation() {
  searchLocationButton.addEventListener("click", () => {
    (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(searchLocationInput.value);
  });
}
function displayLocation(value) {
  location.textContent = value;
}
function displayCurrentWeather(data) {
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
  lastUpdated.textContent = `Last Updated: ${data.lastUpdated}mph`;
  currentWeatherInfo.append(conditionIcon, condition, dateAndTime, humidity, temperature, windDirection, windSpeed, lastUpdated);
}
function displayTomorrowThisHourWeather(data) {
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
  tomorrowThisHourWeather.append(conditionIcon, condition, dateAndTime, humidity, temperature, windDirection, windSpeed);
}
function changeTemperature() {
  for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }
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
function changeWindSpeed() {
  for (var _len2 = arguments.length, data = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    data[_key2] = arguments[_key2];
  }
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

/***/ }),

/***/ "./src/weather-data.js":
/*!*****************************!*\
  !*** ./src/weather-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchWeatherData)
/* harmony export */ });
/* harmony import */ var _DOM_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-controller */ "./src/DOM-controller.js");

async function fetchWeatherData() {
  let location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "auto:ip";
  const API_KEY = "4be63e822db44a8d81c64432232608";
  // const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=kalutara`;
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=2`;
  try {
    const response = await fetch(URL, {
      mode: "cors"
    });
    const data = await response.json();
    if (!response.ok) {
      alert(data.error.message);
    }
    (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.displayLocation)(getLocation(data));
    (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.displayCurrentWeather)(getCurrentWeather(data));
    (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.displayTomorrowThisHourWeather)(getTomorrowThisHourWeather(data));
    (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.changeTemperature)(getCurrentWeather(data), getTomorrowThisHourWeather(data));
    (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.changeWindSpeed)(getCurrentWeather(data), getTomorrowThisHourWeather(data));
  } catch (error) {
    console.log(error);
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
    lastUpdated
  };
}
function getTomorrowThisHourWeather(data) {
  const hour = new Date(data.location.localtime).getHours();
  const dateAndTime = data.forecast.forecastday[1].hour[hour].time;
  const condition = data.forecast.forecastday[1].hour[hour].condition.text;
  const conditionIcon = data.forecast.forecastday[1].hour[hour].condition.icon;
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
    windSpeedMPH
  };
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ "./src/weather-data.js");
/* harmony import */ var _DOM_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM-controller */ "./src/DOM-controller.js");


(0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_DOM_controller__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2hXZWF0aGVyRGF0YSBmcm9tIFwiLi93ZWF0aGVyLWRhdGFcIjtcblxuY29uc3Qgc2VhcmNoTG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtc2VhcmNoLWxvY2F0aW9uLWlucHV0XVwiLFxuKTtcbmNvbnN0IHNlYXJjaExvY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1zZWFyY2gtbG9jYXRpb24tYnV0dG9uXVwiLFxuKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWxvY2F0aW9uXVwiKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtY3VycmVudC13ZWF0aGVyXSA+IHVsXCIsXG4pO1xuY29uc3QgdG9tb3Jyb3dUaGlzSG91cldlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLXRvbW9ycm93LXRoaXMtaG91ci13ZWF0aGVyXSA+IHVsXCIsXG4pO1xuY29uc3QgdGVtcGVyYXR1cmVTZWxlY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtdGVtcGVyYXR1cmUtc2VsZWN0LWlucHV0XVwiLFxuKTtcbmNvbnN0IHdpbmRTcGVlZFNlbGVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS13aW5kLXNwZWVkLXNlbGVjdC1pbnB1dF1cIixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKCkge1xuICBzZWFyY2hMb2NhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZldGNoV2VhdGhlckRhdGEoc2VhcmNoTG9jYXRpb25JbnB1dC52YWx1ZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxvY2F0aW9uKHZhbHVlKSB7XG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudFdlYXRoZXIoZGF0YSkge1xuICBjdXJyZW50V2VhdGhlckluZm8ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsYXN0VXBkYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBjb25kaXRpb25JY29uLnNyYyA9IGBodHRwczoke2RhdGEuY29uZGl0aW9uSWNvbn1gO1xuICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBgQ29uZGl0aW9uOiAke2RhdGEuY29uZGl0aW9ufWA7XG4gIGRhdGVBbmRUaW1lLnRleHRDb250ZW50ID0gYERhdGUgJiBUaW1lOiAke2RhdGEuZGF0ZUFuZFRpbWV9YDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5odW1pZGl0eX1gO1xuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHNob3dUZW1wZXJhdHVyZShkYXRhKTtcbiAgd2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGBXaW5kIERpcmVjdGlvbjogJHtkYXRhLndpbmREaXJlY3Rpb259YDtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gc2hvd1dpbmRTcGVlZChkYXRhKTtcbiAgbGFzdFVwZGF0ZWQudGV4dENvbnRlbnQgPSBgTGFzdCBVcGRhdGVkOiAke2RhdGEubGFzdFVwZGF0ZWR9bXBoYDtcblxuICBjdXJyZW50V2VhdGhlckluZm8uYXBwZW5kKFxuICAgIGNvbmRpdGlvbkljb24sXG4gICAgY29uZGl0aW9uLFxuICAgIGRhdGVBbmRUaW1lLFxuICAgIGh1bWlkaXR5LFxuICAgIHRlbXBlcmF0dXJlLFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkLFxuICAgIGxhc3RVcGRhdGVkLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpIHtcbiAgdG9tb3Jyb3dUaGlzSG91cldlYXRoZXIucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbmRpdGlvbkljb24uc3JjID0gYGh0dHBzOiR7ZGF0YS5jb25kaXRpb25JY29ufWA7XG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGBDb25kaXRpb246ICR7ZGF0YS5jb25kaXRpb259YDtcbiAgZGF0ZUFuZFRpbWUudGV4dENvbnRlbnQgPSBgRGF0ZSAmIFRpbWU6ICR7ZGF0YS5kYXRlQW5kVGltZX1gO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLmh1bWlkaXR5fWA7XG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gc2hvd1RlbXBlcmF0dXJlKGRhdGEpO1xuICB3aW5kRGlyZWN0aW9uLnRleHRDb250ZW50ID0gYFdpbmQgRGlyZWN0aW9uOiAke2RhdGEud2luZERpcmVjdGlvbn1gO1xuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBzaG93V2luZFNwZWVkKGRhdGEpO1xuXG4gIHRvbW9ycm93VGhpc0hvdXJXZWF0aGVyLmFwcGVuZChcbiAgICBjb25kaXRpb25JY29uLFxuICAgIGNvbmRpdGlvbixcbiAgICBkYXRlQW5kVGltZSxcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZSxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIHdpbmRTcGVlZCxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRlbXBlcmF0dXJlKC4uLmRhdGEpIHtcbiAgdGVtcGVyYXR1cmVTZWxlY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICBkaXNwbGF5Q3VycmVudFdlYXRoZXIoZGF0YVswXSk7XG4gICAgZGlzcGxheVRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGFbMV0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd1RlbXBlcmF0dXJlKGRhdGEpIHtcbiAgaWYgKHRlbXBlcmF0dXJlU2VsZWN0SW5wdXQudmFsdWUgPT09IFwiZmFocmVuaGVpdFwiKSB7XG4gICAgcmV0dXJuIGBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXBlcmF0dXJlRmFocmVuaGVpdH1cXHUyMTA5YDtcbiAgfVxuXG4gIGlmICh0ZW1wZXJhdHVyZVNlbGVjdElucHV0LnZhbHVlID09PSBcImNlbHNpdXNcIikge1xuICAgIHJldHVybiBgVGVtcGVyYXR1cmU6ICR7ZGF0YS50ZW1wZXJhdHVyZUNlbHNpdXN9XFx1MjEwM2A7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVdpbmRTcGVlZCguLi5kYXRhKSB7XG4gIHdpbmRTcGVlZFNlbGVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlcihkYXRhWzBdKTtcbiAgICBkaXNwbGF5VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YVsxXSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93V2luZFNwZWVkKGRhdGEpIHtcbiAgaWYgKHdpbmRTcGVlZFNlbGVjdElucHV0LnZhbHVlID09PSBcImtwaFwiKSB7XG4gICAgcmV0dXJuIGBXaW5kIFNwZWVkOiAke2RhdGEud2luZFNwZWVkS1BIfWtwaGA7XG4gIH1cblxuICBpZiAod2luZFNwZWVkU2VsZWN0SW5wdXQudmFsdWUgPT09IFwibXBoXCIpIHtcbiAgICByZXR1cm4gYFdpbmQgU3BlZWQ6ICR7ZGF0YS53aW5kU3BlZWRNUEh9bXBoYDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgZGlzcGxheUxvY2F0aW9uLFxuICBkaXNwbGF5Q3VycmVudFdlYXRoZXIsXG4gIGRpc3BsYXlUb21vcnJvd1RoaXNIb3VyV2VhdGhlcixcbiAgY2hhbmdlVGVtcGVyYXR1cmUsXG4gIGNoYW5nZVdpbmRTcGVlZCxcbn0gZnJvbSBcIi4vRE9NLWNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiA9IFwiYXV0bzppcFwiKSB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcIjRiZTYzZTgyMmRiNDRhOGQ4MWM2NDQzMjIzMjYwOFwiO1xuICAvLyBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke0FQSV9LRVl9JnE9a2FsdXRhcmFgO1xuICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb259JmRheXM9MmA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgYWxlcnQoZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5TG9jYXRpb24oZ2V0TG9jYXRpb24oZGF0YSkpO1xuICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlcihnZXRDdXJyZW50V2VhdGhlcihkYXRhKSk7XG4gICAgZGlzcGxheVRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpKTtcbiAgICBjaGFuZ2VUZW1wZXJhdHVyZShcbiAgICAgIGdldEN1cnJlbnRXZWF0aGVyKGRhdGEpLFxuICAgICAgZ2V0VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YSksXG4gICAgKTtcbiAgICBjaGFuZ2VXaW5kU3BlZWQoZ2V0Q3VycmVudFdlYXRoZXIoZGF0YSksIGdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oZGF0YSkge1xuICBjb25zdCBsb2NhdGlvbiA9IGAke2RhdGEubG9jYXRpb24ubmFtZX0gJHtkYXRhLmxvY2F0aW9uLnJlZ2lvbn0gJHtkYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcblxuICByZXR1cm4gbG9jYXRpb247XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGRhdGEpIHtcbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgY29uc3QgY29uZGl0aW9uID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBjb25kaXRpb25JY29uID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICBjb25zdCBodW1pZGl0eSA9IGRhdGEuY3VycmVudC5odW1pZGl0eTtcbiAgY29uc3QgdGVtcGVyYXR1cmVDZWxzaXVzID0gZGF0YS5jdXJyZW50LnRlbXBfYztcbiAgY29uc3QgdGVtcGVyYXR1cmVGYWhyZW5oZWl0ID0gZGF0YS5jdXJyZW50LnRlbXBfZjtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRhdGEuY3VycmVudC53aW5kX2RpcjtcbiAgY29uc3Qgd2luZFNwZWVkS1BIID0gZGF0YS5jdXJyZW50LndpbmRfa3BoO1xuICBjb25zdCB3aW5kU3BlZWRNUEggPSBkYXRhLmN1cnJlbnQud2luZF9tcGg7XG4gIGNvbnN0IGxhc3RVcGRhdGVkID0gZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZDtcblxuICByZXR1cm4ge1xuICAgIGRhdGVBbmRUaW1lLFxuICAgIGNvbmRpdGlvbixcbiAgICBjb25kaXRpb25JY29uLFxuICAgIGh1bWlkaXR5LFxuICAgIHRlbXBlcmF0dXJlQ2Vsc2l1cyxcbiAgICB0ZW1wZXJhdHVyZUZhaHJlbmhlaXQsXG4gICAgd2luZERpcmVjdGlvbixcbiAgICB3aW5kU3BlZWRLUEgsXG4gICAgd2luZFNwZWVkTVBILFxuICAgIGxhc3RVcGRhdGVkLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihkYXRhKSB7XG4gIGNvbnN0IGhvdXIgPSBuZXcgRGF0ZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSkuZ2V0SG91cnMoKTtcblxuICBjb25zdCBkYXRlQW5kVGltZSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS50aW1lO1xuICBjb25zdCBjb25kaXRpb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0uY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0uY29uZGl0aW9uLmljb247XG4gIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmh1bWlkaXR5O1xuICBjb25zdCB0ZW1wZXJhdHVyZUNlbHNpdXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0udGVtcF9jO1xuICBjb25zdCB0ZW1wZXJhdHVyZUZhaHJlbmhlaXQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0udGVtcF9mO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLndpbmRfZGlyO1xuICBjb25zdCB3aW5kU3BlZWRLUEggPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0ud2luZF9rcGg7XG4gIGNvbnN0IHdpbmRTcGVlZE1QSCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS53aW5kX21waDtcblxuICByZXR1cm4ge1xuICAgIGRhdGVBbmRUaW1lLFxuICAgIGNvbmRpdGlvbixcbiAgICBjb25kaXRpb25JY29uLFxuICAgIGh1bWlkaXR5LFxuICAgIHRlbXBlcmF0dXJlQ2Vsc2l1cyxcbiAgICB0ZW1wZXJhdHVyZUZhaHJlbmhlaXQsXG4gICAgd2luZERpcmVjdGlvbixcbiAgICB3aW5kU3BlZWRLUEgsXG4gICAgd2luZFNwZWVkTVBILFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSBcIi4vd2VhdGhlci1kYXRhXCI7XG5pbXBvcnQgc2VhcmNoTG9jYXRpb24gZnJvbSBcIi4vRE9NLWNvbnRyb2xsZXJcIjtcblxuZ2V0V2VhdGhlckRhdGEoKTtcbnNlYXJjaExvY2F0aW9uKCk7XG4iXSwibmFtZXMiOlsiZmV0Y2hXZWF0aGVyRGF0YSIsInNlYXJjaExvY2F0aW9uSW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hMb2NhdGlvbkJ1dHRvbiIsImxvY2F0aW9uIiwiY3VycmVudFdlYXRoZXJJbmZvIiwidG9tb3Jyb3dUaGlzSG91cldlYXRoZXIiLCJ0ZW1wZXJhdHVyZVNlbGVjdElucHV0Iiwid2luZFNwZWVkU2VsZWN0SW5wdXQiLCJzZWFyY2hMb2NhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImRpc3BsYXlMb2NhdGlvbiIsInRleHRDb250ZW50IiwiZGlzcGxheUN1cnJlbnRXZWF0aGVyIiwiZGF0YSIsInJlcGxhY2VDaGlsZHJlbiIsImNvbmRpdGlvbkljb24iLCJjcmVhdGVFbGVtZW50IiwiY29uZGl0aW9uIiwiZGF0ZUFuZFRpbWUiLCJodW1pZGl0eSIsInRlbXBlcmF0dXJlIiwid2luZERpcmVjdGlvbiIsIndpbmRTcGVlZCIsImxhc3RVcGRhdGVkIiwic3JjIiwic2hvd1RlbXBlcmF0dXJlIiwic2hvd1dpbmRTcGVlZCIsImFwcGVuZCIsImRpc3BsYXlUb21vcnJvd1RoaXNIb3VyV2VhdGhlciIsImNoYW5nZVRlbXBlcmF0dXJlIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkFycmF5IiwiX2tleSIsInRlbXBlcmF0dXJlRmFocmVuaGVpdCIsInRlbXBlcmF0dXJlQ2Vsc2l1cyIsImNoYW5nZVdpbmRTcGVlZCIsIl9sZW4yIiwiX2tleTIiLCJ3aW5kU3BlZWRLUEgiLCJ3aW5kU3BlZWRNUEgiLCJ1bmRlZmluZWQiLCJBUElfS0VZIiwiVVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwib2siLCJhbGVydCIsImVycm9yIiwibWVzc2FnZSIsImdldExvY2F0aW9uIiwiZ2V0Q3VycmVudFdlYXRoZXIiLCJnZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlciIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwicmVnaW9uIiwiY291bnRyeSIsImxvY2FsdGltZSIsImN1cnJlbnQiLCJ0ZXh0IiwiaWNvbiIsInRlbXBfYyIsInRlbXBfZiIsIndpbmRfZGlyIiwid2luZF9rcGgiLCJ3aW5kX21waCIsImxhc3RfdXBkYXRlZCIsImhvdXIiLCJEYXRlIiwiZ2V0SG91cnMiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwidGltZSIsImdldFdlYXRoZXJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==