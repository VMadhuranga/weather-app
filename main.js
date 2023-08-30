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
/* harmony export */   displayCurrentWeather: () => (/* binding */ displayCurrentWeather)
/* harmony export */ });
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ "./src/weather-data.js");

const searchLocationInput = document.querySelector("[data-search-location-input]");
const searchLocationButton = document.querySelector("[data-search-location-button]");
const currentWeatherInfo = document.querySelector("[data-current-weather] > ul");
function searchLocation() {
  searchLocationButton.addEventListener("click", () => {
    (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(searchLocationInput.value);
  });
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
  lastUpdated.textContent = `Last Updated: ${data.lastUpdated}`;
  currentWeatherInfo.append(conditionIcon, condition, dateAndTime, humidity, temperature, windDirection, windSpeed, lastUpdated);
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
    console.log(data);
    console.log(getLocation(data));
    (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.displayCurrentWeather)(getCurrentWeather(data));
    console.log(getTomorrowThisHourWeather(data));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ0U7QUFFOUN1Qyx5REFBYyxDQUFDLENBQUM7QUFDaEJ6RCwyREFBYyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaFdlYXRoZXJEYXRhIGZyb20gXCIuL3dlYXRoZXItZGF0YVwiO1xuXG5jb25zdCBzZWFyY2hMb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1zZWFyY2gtbG9jYXRpb24taW5wdXRdXCIsXG4pO1xuY29uc3Qgc2VhcmNoTG9jYXRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLXNlYXJjaC1sb2NhdGlvbi1idXR0b25dXCIsXG4pO1xuY29uc3QgY3VycmVudFdlYXRoZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1jdXJyZW50LXdlYXRoZXJdID4gdWxcIixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKCkge1xuICBzZWFyY2hMb2NhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZldGNoV2VhdGhlckRhdGEoc2VhcmNoTG9jYXRpb25JbnB1dC52YWx1ZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRXZWF0aGVyKGRhdGEpIHtcbiAgY3VycmVudFdlYXRoZXJJbmZvLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGRhdGVBbmRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbGFzdFVwZGF0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgY29uZGl0aW9uSWNvbi5zcmMgPSBgaHR0cHM6JHtkYXRhLmNvbmRpdGlvbkljb259YDtcbiAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gYENvbmRpdGlvbjogJHtkYXRhLmNvbmRpdGlvbn1gO1xuICBkYXRlQW5kVGltZS50ZXh0Q29udGVudCA9IGBEYXRlICYgVGltZTogJHtkYXRhLmRhdGVBbmRUaW1lfWA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGEuaHVtaWRpdHl9YDtcbiAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmU6ICR7ZGF0YS50ZW1wZXJhdHVyZUNlbHNpdXN9XFx1MjEwM2A7XG4gIHdpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSBgV2luZCBEaXJlY3Rpb246ICR7ZGF0YS53aW5kRGlyZWN0aW9ufWA7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke2RhdGEud2luZFNwZWVkTVBIfWA7XG4gIGxhc3RVcGRhdGVkLnRleHRDb250ZW50ID0gYExhc3QgVXBkYXRlZDogJHtkYXRhLmxhc3RVcGRhdGVkfWA7XG5cbiAgY3VycmVudFdlYXRoZXJJbmZvLmFwcGVuZChcbiAgICBjb25kaXRpb25JY29uLFxuICAgIGNvbmRpdGlvbixcbiAgICBkYXRlQW5kVGltZSxcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZSxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIHdpbmRTcGVlZCxcbiAgICBsYXN0VXBkYXRlZCxcbiAgKTtcbn1cbiIsImltcG9ydCB7IGRpc3BsYXlDdXJyZW50V2VhdGhlciB9IGZyb20gXCIuL0RPTS1jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24gPSBcImF1dG86aXBcIikge1xuICBjb25zdCBBUElfS0VZID0gXCI0YmU2M2U4MjJkYjQ0YThkODFjNjQ0MzIyMzI2MDhcIjtcbiAgLy8gY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBUElfS0VZfSZxPWthbHV0YXJhYDtcbiAgY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY2F0aW9ufSZkYXlzPTJgO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhnZXRMb2NhdGlvbihkYXRhKSk7XG4gICAgZGlzcGxheUN1cnJlbnRXZWF0aGVyKGdldEN1cnJlbnRXZWF0aGVyKGRhdGEpKTtcbiAgICBjb25zb2xlLmxvZyhnZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihkYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uKGRhdGEpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBgJHtkYXRhLmxvY2F0aW9uLm5hbWV9ICR7ZGF0YS5sb2NhdGlvbi5yZWdpb259ICR7ZGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihkYXRhKSB7XG4gIGNvbnN0IGRhdGVBbmRUaW1lID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgY29uc3QgaHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlQ2Vsc2l1cyA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBlcmF0dXJlRmFocmVuaGVpdCA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkYXRhLmN1cnJlbnQud2luZF9kaXI7XG4gIGNvbnN0IHdpbmRTcGVlZEtQSCA9IGRhdGEuY3VycmVudC53aW5kX2twaDtcbiAgY29uc3Qgd2luZFNwZWVkTVBIID0gZGF0YS5jdXJyZW50LndpbmRfbXBoO1xuICBjb25zdCBsYXN0VXBkYXRlZCA9IGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQ7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRlQW5kVGltZSxcbiAgICBjb25kaXRpb24sXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZUNlbHNpdXMsXG4gICAgdGVtcGVyYXR1cmVGYWhyZW5oZWl0LFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkS1BILFxuICAgIHdpbmRTcGVlZE1QSCxcbiAgICBsYXN0VXBkYXRlZCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YSkge1xuICBjb25zdCBob3VyID0gbmV3IERhdGUoZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpLmdldEhvdXJzKCk7XG5cbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0udGltZTtcbiAgY29uc3QgY29uZGl0aW9uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBjb25kaXRpb25JY29uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmNvbmRpdGlvbi5pY29uO1xuICBjb25zdCBodW1pZGl0eSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS5odW1pZGl0eTtcbiAgY29uc3QgdGVtcGVyYXR1cmVDZWxzaXVzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLnRlbXBfYztcbiAgY29uc3QgdGVtcGVyYXR1cmVGYWhyZW5oZWl0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLnRlbXBfZjtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS53aW5kX2RpcjtcbiAgY29uc3Qgd2luZFNwZWVkS1BIID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLndpbmRfa3BoO1xuICBjb25zdCB3aW5kU3BlZWRNUEggPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0ud2luZF9tcGg7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRlQW5kVGltZSxcbiAgICBjb25kaXRpb24sXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZUNlbHNpdXMsXG4gICAgdGVtcGVyYXR1cmVGYWhyZW5oZWl0LFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkS1BILFxuICAgIHdpbmRTcGVlZE1QSCxcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gXCIuL3dlYXRoZXItZGF0YVwiO1xuaW1wb3J0IHNlYXJjaExvY2F0aW9uIGZyb20gXCIuL0RPTS1jb250cm9sbGVyXCI7XG5cbmdldFdlYXRoZXJEYXRhKCk7XG5zZWFyY2hMb2NhdGlvbigpO1xuIl0sIm5hbWVzIjpbImZldGNoV2VhdGhlckRhdGEiLCJzZWFyY2hMb2NhdGlvbklucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoTG9jYXRpb25CdXR0b24iLCJjdXJyZW50V2VhdGhlckluZm8iLCJzZWFyY2hMb2NhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImRpc3BsYXlDdXJyZW50V2VhdGhlciIsImRhdGEiLCJyZXBsYWNlQ2hpbGRyZW4iLCJjb25kaXRpb25JY29uIiwiY3JlYXRlRWxlbWVudCIsImNvbmRpdGlvbiIsImRhdGVBbmRUaW1lIiwiaHVtaWRpdHkiLCJ0ZW1wZXJhdHVyZSIsIndpbmREaXJlY3Rpb24iLCJ3aW5kU3BlZWQiLCJsYXN0VXBkYXRlZCIsInNyYyIsInRleHRDb250ZW50IiwidGVtcGVyYXR1cmVDZWxzaXVzIiwid2luZFNwZWVkTVBIIiwiYXBwZW5kIiwibG9jYXRpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJBUElfS0VZIiwiVVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImdldExvY2F0aW9uIiwiZ2V0Q3VycmVudFdlYXRoZXIiLCJnZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlciIsImVycm9yIiwibmFtZSIsInJlZ2lvbiIsImNvdW50cnkiLCJsb2NhbHRpbWUiLCJjdXJyZW50IiwidGV4dCIsImljb24iLCJ0ZW1wX2MiLCJ0ZW1wZXJhdHVyZUZhaHJlbmhlaXQiLCJ0ZW1wX2YiLCJ3aW5kX2RpciIsIndpbmRTcGVlZEtQSCIsIndpbmRfa3BoIiwid2luZF9tcGgiLCJsYXN0X3VwZGF0ZWQiLCJob3VyIiwiRGF0ZSIsImdldEhvdXJzIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsInRpbWUiLCJnZXRXZWF0aGVyRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=