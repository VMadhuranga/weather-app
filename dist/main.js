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
  temperature.textContent = `Temperature: ${data.temperatureCelsius}\u2103`;
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
  temperature.textContent = `Temperature: ${data.temperatureCelsius}\u2103`;
  windDirection.textContent = `Wind Direction: ${data.windDirection}`;
  windSpeed.textContent = `Wind Speed: ${data.windSpeedMPH}mph`;
  tomorrowThisHourWeather.append(conditionIcon, condition, dateAndTime, humidity, temperature, windDirection, windSpeed);
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
    (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.displayLocation)(getLocation(data));
    (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.displayCurrentWeather)(getCurrentWeather(data));
    (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.displayTomorrowThisHourWeather)(getTomorrowThisHourWeather(data));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ0U7QUFFOUN1Qyx5REFBYyxDQUFDLENBQUM7QUFDaEIxRCwyREFBYyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaFdlYXRoZXJEYXRhIGZyb20gXCIuL3dlYXRoZXItZGF0YVwiO1xuXG5jb25zdCBzZWFyY2hMb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1zZWFyY2gtbG9jYXRpb24taW5wdXRdXCIsXG4pO1xuY29uc3Qgc2VhcmNoTG9jYXRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLXNlYXJjaC1sb2NhdGlvbi1idXR0b25dXCIsXG4pO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbG9jYXRpb25dXCIpO1xuY29uc3QgY3VycmVudFdlYXRoZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1jdXJyZW50LXdlYXRoZXJdID4gdWxcIixcbik7XG5jb25zdCB0b21vcnJvd1RoaXNIb3VyV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtdG9tb3Jyb3ctdGhpcy1ob3VyLXdlYXRoZXJdID4gdWxcIixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKCkge1xuICBzZWFyY2hMb2NhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZldGNoV2VhdGhlckRhdGEoc2VhcmNoTG9jYXRpb25JbnB1dC52YWx1ZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxvY2F0aW9uKHZhbHVlKSB7XG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudFdlYXRoZXIoZGF0YSkge1xuICBjdXJyZW50V2VhdGhlckluZm8ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsYXN0VXBkYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBjb25kaXRpb25JY29uLnNyYyA9IGBodHRwczoke2RhdGEuY29uZGl0aW9uSWNvbn1gO1xuICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBgQ29uZGl0aW9uOiAke2RhdGEuY29uZGl0aW9ufWA7XG4gIGRhdGVBbmRUaW1lLnRleHRDb250ZW50ID0gYERhdGUgJiBUaW1lOiAke2RhdGEuZGF0ZUFuZFRpbWV9YDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5odW1pZGl0eX1gO1xuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXBlcmF0dXJlQ2Vsc2l1c31cXHUyMTAzYDtcbiAgd2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGBXaW5kIERpcmVjdGlvbjogJHtkYXRhLndpbmREaXJlY3Rpb259YDtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7ZGF0YS53aW5kU3BlZWRNUEh9YDtcbiAgbGFzdFVwZGF0ZWQudGV4dENvbnRlbnQgPSBgTGFzdCBVcGRhdGVkOiAke2RhdGEubGFzdFVwZGF0ZWR9bXBoYDtcblxuICBjdXJyZW50V2VhdGhlckluZm8uYXBwZW5kKFxuICAgIGNvbmRpdGlvbkljb24sXG4gICAgY29uZGl0aW9uLFxuICAgIGRhdGVBbmRUaW1lLFxuICAgIGh1bWlkaXR5LFxuICAgIHRlbXBlcmF0dXJlLFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkLFxuICAgIGxhc3RVcGRhdGVkLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpIHtcbiAgdG9tb3Jyb3dUaGlzSG91cldlYXRoZXIucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbmRpdGlvbkljb24uc3JjID0gYGh0dHBzOiR7ZGF0YS5jb25kaXRpb25JY29ufWA7XG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGBDb25kaXRpb246ICR7ZGF0YS5jb25kaXRpb259YDtcbiAgZGF0ZUFuZFRpbWUudGV4dENvbnRlbnQgPSBgRGF0ZSAmIFRpbWU6ICR7ZGF0YS5kYXRlQW5kVGltZX1gO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLmh1bWlkaXR5fWA7XG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke2RhdGEudGVtcGVyYXR1cmVDZWxzaXVzfVxcdTIxMDNgO1xuICB3aW5kRGlyZWN0aW9uLnRleHRDb250ZW50ID0gYFdpbmQgRGlyZWN0aW9uOiAke2RhdGEud2luZERpcmVjdGlvbn1gO1xuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtkYXRhLndpbmRTcGVlZE1QSH1tcGhgO1xuXG4gIHRvbW9ycm93VGhpc0hvdXJXZWF0aGVyLmFwcGVuZChcbiAgICBjb25kaXRpb25JY29uLFxuICAgIGNvbmRpdGlvbixcbiAgICBkYXRlQW5kVGltZSxcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZSxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIHdpbmRTcGVlZCxcbiAgKTtcbn1cbiIsImltcG9ydCB7XG4gIGRpc3BsYXlMb2NhdGlvbixcbiAgZGlzcGxheUN1cnJlbnRXZWF0aGVyLFxuICBkaXNwbGF5VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIsXG59IGZyb20gXCIuL0RPTS1jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24gPSBcImF1dG86aXBcIikge1xuICBjb25zdCBBUElfS0VZID0gXCI0YmU2M2U4MjJkYjQ0YThkODFjNjQ0MzIyMzI2MDhcIjtcbiAgLy8gY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBUElfS0VZfSZxPWthbHV0YXJhYDtcbiAgY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY2F0aW9ufSZkYXlzPTJgO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBkaXNwbGF5TG9jYXRpb24oZ2V0TG9jYXRpb24oZGF0YSkpO1xuICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlcihnZXRDdXJyZW50V2VhdGhlcihkYXRhKSk7XG4gICAgZGlzcGxheVRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oZGF0YSkge1xuICBjb25zdCBsb2NhdGlvbiA9IGAke2RhdGEubG9jYXRpb24ubmFtZX0gJHtkYXRhLmxvY2F0aW9uLnJlZ2lvbn0gJHtkYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcblxuICByZXR1cm4gbG9jYXRpb247XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGRhdGEpIHtcbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgY29uc3QgY29uZGl0aW9uID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBjb25kaXRpb25JY29uID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICBjb25zdCBodW1pZGl0eSA9IGRhdGEuY3VycmVudC5odW1pZGl0eTtcbiAgY29uc3QgdGVtcGVyYXR1cmVDZWxzaXVzID0gZGF0YS5jdXJyZW50LnRlbXBfYztcbiAgY29uc3QgdGVtcGVyYXR1cmVGYWhyZW5oZWl0ID0gZGF0YS5jdXJyZW50LnRlbXBfZjtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRhdGEuY3VycmVudC53aW5kX2RpcjtcbiAgY29uc3Qgd2luZFNwZWVkS1BIID0gZGF0YS5jdXJyZW50LndpbmRfa3BoO1xuICBjb25zdCB3aW5kU3BlZWRNUEggPSBkYXRhLmN1cnJlbnQud2luZF9tcGg7XG4gIGNvbnN0IGxhc3RVcGRhdGVkID0gZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZDtcblxuICByZXR1cm4ge1xuICAgIGRhdGVBbmRUaW1lLFxuICAgIGNvbmRpdGlvbixcbiAgICBjb25kaXRpb25JY29uLFxuICAgIGh1bWlkaXR5LFxuICAgIHRlbXBlcmF0dXJlQ2Vsc2l1cyxcbiAgICB0ZW1wZXJhdHVyZUZhaHJlbmhlaXQsXG4gICAgd2luZERpcmVjdGlvbixcbiAgICB3aW5kU3BlZWRLUEgsXG4gICAgd2luZFNwZWVkTVBILFxuICAgIGxhc3RVcGRhdGVkLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihkYXRhKSB7XG4gIGNvbnN0IGhvdXIgPSBuZXcgRGF0ZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSkuZ2V0SG91cnMoKTtcblxuICBjb25zdCBkYXRlQW5kVGltZSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS50aW1lO1xuICBjb25zdCBjb25kaXRpb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0uY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0uY29uZGl0aW9uLmljb247XG4gIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmh1bWlkaXR5O1xuICBjb25zdCB0ZW1wZXJhdHVyZUNlbHNpdXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0udGVtcF9jO1xuICBjb25zdCB0ZW1wZXJhdHVyZUZhaHJlbmhlaXQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0udGVtcF9mO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLndpbmRfZGlyO1xuICBjb25zdCB3aW5kU3BlZWRLUEggPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0ud2luZF9rcGg7XG4gIGNvbnN0IHdpbmRTcGVlZE1QSCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS53aW5kX21waDtcblxuICByZXR1cm4ge1xuICAgIGRhdGVBbmRUaW1lLFxuICAgIGNvbmRpdGlvbixcbiAgICBjb25kaXRpb25JY29uLFxuICAgIGh1bWlkaXR5LFxuICAgIHRlbXBlcmF0dXJlQ2Vsc2l1cyxcbiAgICB0ZW1wZXJhdHVyZUZhaHJlbmhlaXQsXG4gICAgd2luZERpcmVjdGlvbixcbiAgICB3aW5kU3BlZWRLUEgsXG4gICAgd2luZFNwZWVkTVBILFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSBcIi4vd2VhdGhlci1kYXRhXCI7XG5pbXBvcnQgc2VhcmNoTG9jYXRpb24gZnJvbSBcIi4vRE9NLWNvbnRyb2xsZXJcIjtcblxuZ2V0V2VhdGhlckRhdGEoKTtcbnNlYXJjaExvY2F0aW9uKCk7XG4iXSwibmFtZXMiOlsiZmV0Y2hXZWF0aGVyRGF0YSIsInNlYXJjaExvY2F0aW9uSW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hMb2NhdGlvbkJ1dHRvbiIsImxvY2F0aW9uIiwiY3VycmVudFdlYXRoZXJJbmZvIiwidG9tb3Jyb3dUaGlzSG91cldlYXRoZXIiLCJzZWFyY2hMb2NhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImRpc3BsYXlMb2NhdGlvbiIsInRleHRDb250ZW50IiwiZGlzcGxheUN1cnJlbnRXZWF0aGVyIiwiZGF0YSIsInJlcGxhY2VDaGlsZHJlbiIsImNvbmRpdGlvbkljb24iLCJjcmVhdGVFbGVtZW50IiwiY29uZGl0aW9uIiwiZGF0ZUFuZFRpbWUiLCJodW1pZGl0eSIsInRlbXBlcmF0dXJlIiwid2luZERpcmVjdGlvbiIsIndpbmRTcGVlZCIsImxhc3RVcGRhdGVkIiwic3JjIiwidGVtcGVyYXR1cmVDZWxzaXVzIiwid2luZFNwZWVkTVBIIiwiYXBwZW5kIiwiZGlzcGxheVRvbW9ycm93VGhpc0hvdXJXZWF0aGVyIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiQVBJX0tFWSIsIlVSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwianNvbiIsImdldExvY2F0aW9uIiwiZ2V0Q3VycmVudFdlYXRoZXIiLCJnZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJyZWdpb24iLCJjb3VudHJ5IiwibG9jYWx0aW1lIiwiY3VycmVudCIsInRleHQiLCJpY29uIiwidGVtcF9jIiwidGVtcGVyYXR1cmVGYWhyZW5oZWl0IiwidGVtcF9mIiwid2luZF9kaXIiLCJ3aW5kU3BlZWRLUEgiLCJ3aW5kX2twaCIsIndpbmRfbXBoIiwibGFzdF91cGRhdGVkIiwiaG91ciIsIkRhdGUiLCJnZXRIb3VycyIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJ0aW1lIiwiZ2V0V2VhdGhlckRhdGEiXSwic291cmNlUm9vdCI6IiJ9