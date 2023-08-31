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
  windSpeed.textContent = `Wind Speed: ${data.windSpeedMPH}`;
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
  windSpeed.textContent = `Wind Speed: ${data.windSpeedMPH}mph`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNFO0FBRTlDK0MseURBQWMsQ0FBQyxDQUFDO0FBQ2hCbEUsMkRBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2hXZWF0aGVyRGF0YSBmcm9tIFwiLi93ZWF0aGVyLWRhdGFcIjtcblxuY29uc3Qgc2VhcmNoTG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtc2VhcmNoLWxvY2F0aW9uLWlucHV0XVwiLFxuKTtcbmNvbnN0IHNlYXJjaExvY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1zZWFyY2gtbG9jYXRpb24tYnV0dG9uXVwiLFxuKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWxvY2F0aW9uXVwiKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtY3VycmVudC13ZWF0aGVyXSA+IHVsXCIsXG4pO1xuY29uc3QgdG9tb3Jyb3dUaGlzSG91cldlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLXRvbW9ycm93LXRoaXMtaG91ci13ZWF0aGVyXSA+IHVsXCIsXG4pO1xuY29uc3QgdGVtcGVyYXR1cmVTZWxlY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtdGVtcGVyYXR1cmUtc2VsZWN0LWlucHV0XVwiLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoTG9jYXRpb24oKSB7XG4gIHNlYXJjaExvY2F0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZmV0Y2hXZWF0aGVyRGF0YShzZWFyY2hMb2NhdGlvbklucHV0LnZhbHVlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TG9jYXRpb24odmFsdWUpIHtcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50V2VhdGhlcihkYXRhKSB7XG4gIGN1cnJlbnRXZWF0aGVySW5mby5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBjb25zdCBjb25kaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBkYXRlQW5kVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGxhc3RVcGRhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbmRpdGlvbkljb24uc3JjID0gYGh0dHBzOiR7ZGF0YS5jb25kaXRpb25JY29ufWA7XG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGBDb25kaXRpb246ICR7ZGF0YS5jb25kaXRpb259YDtcbiAgZGF0ZUFuZFRpbWUudGV4dENvbnRlbnQgPSBgRGF0ZSAmIFRpbWU6ICR7ZGF0YS5kYXRlQW5kVGltZX1gO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLmh1bWlkaXR5fWA7XG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gc2hvd1RlbXBlcmF0dXJlKGRhdGEpO1xuICB3aW5kRGlyZWN0aW9uLnRleHRDb250ZW50ID0gYFdpbmQgRGlyZWN0aW9uOiAke2RhdGEud2luZERpcmVjdGlvbn1gO1xuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtkYXRhLndpbmRTcGVlZE1QSH1gO1xuICBsYXN0VXBkYXRlZC50ZXh0Q29udGVudCA9IGBMYXN0IFVwZGF0ZWQ6ICR7ZGF0YS5sYXN0VXBkYXRlZH1tcGhgO1xuXG4gIGN1cnJlbnRXZWF0aGVySW5mby5hcHBlbmQoXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBjb25kaXRpb24sXG4gICAgZGF0ZUFuZFRpbWUsXG4gICAgaHVtaWRpdHksXG4gICAgdGVtcGVyYXR1cmUsXG4gICAgd2luZERpcmVjdGlvbixcbiAgICB3aW5kU3BlZWQsXG4gICAgbGFzdFVwZGF0ZWQsXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YSkge1xuICB0b21vcnJvd1RoaXNIb3VyV2VhdGhlci5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBjb25zdCBjb25kaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBkYXRlQW5kVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgY29uZGl0aW9uSWNvbi5zcmMgPSBgaHR0cHM6JHtkYXRhLmNvbmRpdGlvbkljb259YDtcbiAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gYENvbmRpdGlvbjogJHtkYXRhLmNvbmRpdGlvbn1gO1xuICBkYXRlQW5kVGltZS50ZXh0Q29udGVudCA9IGBEYXRlICYgVGltZTogJHtkYXRhLmRhdGVBbmRUaW1lfWA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGEuaHVtaWRpdHl9YDtcbiAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBzaG93VGVtcGVyYXR1cmUoZGF0YSk7XG4gIHdpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSBgV2luZCBEaXJlY3Rpb246ICR7ZGF0YS53aW5kRGlyZWN0aW9ufWA7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke2RhdGEud2luZFNwZWVkTVBIfW1waGA7XG5cbiAgdG9tb3Jyb3dUaGlzSG91cldlYXRoZXIuYXBwZW5kKFxuICAgIGNvbmRpdGlvbkljb24sXG4gICAgY29uZGl0aW9uLFxuICAgIGRhdGVBbmRUaW1lLFxuICAgIGh1bWlkaXR5LFxuICAgIHRlbXBlcmF0dXJlLFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGVtcGVyYXR1cmUoLi4uZGF0YSkge1xuICB0ZW1wZXJhdHVyZVNlbGVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlcihkYXRhWzBdKTtcbiAgICBkaXNwbGF5VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YVsxXSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93VGVtcGVyYXR1cmUoZGF0YSkge1xuICBpZiAodGVtcGVyYXR1cmVTZWxlY3RJbnB1dC52YWx1ZSA9PT0gXCJmYWhyZW5oZWl0XCIpIHtcbiAgICByZXR1cm4gYFRlbXBlcmF0dXJlOiAke2RhdGEudGVtcGVyYXR1cmVGYWhyZW5oZWl0fVxcdTIxMDlgO1xuICB9XG5cbiAgaWYgKHRlbXBlcmF0dXJlU2VsZWN0SW5wdXQudmFsdWUgPT09IFwiY2Vsc2l1c1wiKSB7XG4gICAgcmV0dXJuIGBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXBlcmF0dXJlQ2Vsc2l1c31cXHUyMTAzYDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgZGlzcGxheUxvY2F0aW9uLFxuICBkaXNwbGF5Q3VycmVudFdlYXRoZXIsXG4gIGRpc3BsYXlUb21vcnJvd1RoaXNIb3VyV2VhdGhlcixcbiAgY2hhbmdlVGVtcGVyYXR1cmUsXG59IGZyb20gXCIuL0RPTS1jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24gPSBcImF1dG86aXBcIikge1xuICBjb25zdCBBUElfS0VZID0gXCI0YmU2M2U4MjJkYjQ0YThkODFjNjQ0MzIyMzI2MDhcIjtcbiAgLy8gY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBUElfS0VZfSZxPWthbHV0YXJhYDtcbiAgY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY2F0aW9ufSZkYXlzPTJgO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGFsZXJ0KGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZGlzcGxheUxvY2F0aW9uKGdldExvY2F0aW9uKGRhdGEpKTtcbiAgICBkaXNwbGF5Q3VycmVudFdlYXRoZXIoZ2V0Q3VycmVudFdlYXRoZXIoZGF0YSkpO1xuICAgIGRpc3BsYXlUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihnZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihkYXRhKSk7XG4gICAgY2hhbmdlVGVtcGVyYXR1cmUoXG4gICAgICBnZXRDdXJyZW50V2VhdGhlcihkYXRhKSxcbiAgICAgIGdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpLFxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uKGRhdGEpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBgJHtkYXRhLmxvY2F0aW9uLm5hbWV9ICR7ZGF0YS5sb2NhdGlvbi5yZWdpb259ICR7ZGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihkYXRhKSB7XG4gIGNvbnN0IGRhdGVBbmRUaW1lID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgY29uc3QgaHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlQ2Vsc2l1cyA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBlcmF0dXJlRmFocmVuaGVpdCA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkYXRhLmN1cnJlbnQud2luZF9kaXI7XG4gIGNvbnN0IHdpbmRTcGVlZEtQSCA9IGRhdGEuY3VycmVudC53aW5kX2twaDtcbiAgY29uc3Qgd2luZFNwZWVkTVBIID0gZGF0YS5jdXJyZW50LndpbmRfbXBoO1xuICBjb25zdCBsYXN0VXBkYXRlZCA9IGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQ7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRlQW5kVGltZSxcbiAgICBjb25kaXRpb24sXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZUNlbHNpdXMsXG4gICAgdGVtcGVyYXR1cmVGYWhyZW5oZWl0LFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkS1BILFxuICAgIHdpbmRTcGVlZE1QSCxcbiAgICBsYXN0VXBkYXRlZCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YSkge1xuICBjb25zdCBob3VyID0gbmV3IERhdGUoZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpLmdldEhvdXJzKCk7XG5cbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0udGltZTtcbiAgY29uc3QgY29uZGl0aW9uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBjb25kaXRpb25JY29uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmNvbmRpdGlvbi5pY29uO1xuICBjb25zdCBodW1pZGl0eSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS5odW1pZGl0eTtcbiAgY29uc3QgdGVtcGVyYXR1cmVDZWxzaXVzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLnRlbXBfYztcbiAgY29uc3QgdGVtcGVyYXR1cmVGYWhyZW5oZWl0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLnRlbXBfZjtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS53aW5kX2RpcjtcbiAgY29uc3Qgd2luZFNwZWVkS1BIID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLndpbmRfa3BoO1xuICBjb25zdCB3aW5kU3BlZWRNUEggPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0ud2luZF9tcGg7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRlQW5kVGltZSxcbiAgICBjb25kaXRpb24sXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZUNlbHNpdXMsXG4gICAgdGVtcGVyYXR1cmVGYWhyZW5oZWl0LFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkS1BILFxuICAgIHdpbmRTcGVlZE1QSCxcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gXCIuL3dlYXRoZXItZGF0YVwiO1xuaW1wb3J0IHNlYXJjaExvY2F0aW9uIGZyb20gXCIuL0RPTS1jb250cm9sbGVyXCI7XG5cbmdldFdlYXRoZXJEYXRhKCk7XG5zZWFyY2hMb2NhdGlvbigpO1xuIl0sIm5hbWVzIjpbImZldGNoV2VhdGhlckRhdGEiLCJzZWFyY2hMb2NhdGlvbklucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoTG9jYXRpb25CdXR0b24iLCJsb2NhdGlvbiIsImN1cnJlbnRXZWF0aGVySW5mbyIsInRvbW9ycm93VGhpc0hvdXJXZWF0aGVyIiwidGVtcGVyYXR1cmVTZWxlY3RJbnB1dCIsInNlYXJjaExvY2F0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwiZGlzcGxheUxvY2F0aW9uIiwidGV4dENvbnRlbnQiLCJkaXNwbGF5Q3VycmVudFdlYXRoZXIiLCJkYXRhIiwicmVwbGFjZUNoaWxkcmVuIiwiY29uZGl0aW9uSWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjb25kaXRpb24iLCJkYXRlQW5kVGltZSIsImh1bWlkaXR5IiwidGVtcGVyYXR1cmUiLCJ3aW5kRGlyZWN0aW9uIiwid2luZFNwZWVkIiwibGFzdFVwZGF0ZWQiLCJzcmMiLCJzaG93VGVtcGVyYXR1cmUiLCJ3aW5kU3BlZWRNUEgiLCJhcHBlbmQiLCJkaXNwbGF5VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIiLCJjaGFuZ2VUZW1wZXJhdHVyZSIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJBcnJheSIsIl9rZXkiLCJ0ZW1wZXJhdHVyZUZhaHJlbmhlaXQiLCJ0ZW1wZXJhdHVyZUNlbHNpdXMiLCJ1bmRlZmluZWQiLCJBUElfS0VZIiwiVVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwib2siLCJhbGVydCIsImVycm9yIiwibWVzc2FnZSIsImdldExvY2F0aW9uIiwiZ2V0Q3VycmVudFdlYXRoZXIiLCJnZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlciIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwicmVnaW9uIiwiY291bnRyeSIsImxvY2FsdGltZSIsImN1cnJlbnQiLCJ0ZXh0IiwiaWNvbiIsInRlbXBfYyIsInRlbXBfZiIsIndpbmRfZGlyIiwid2luZFNwZWVkS1BIIiwid2luZF9rcGgiLCJ3aW5kX21waCIsImxhc3RfdXBkYXRlZCIsImhvdXIiLCJEYXRlIiwiZ2V0SG91cnMiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwidGltZSIsImdldFdlYXRoZXJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==