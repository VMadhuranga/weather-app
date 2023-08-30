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
/* harmony export */   "default": () => (/* binding */ searchLocation)
/* harmony export */ });
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ "./src/weather-data.js");

const searchLocationInput = document.querySelector("[data-search-location-input]");
const searchLocationButton = document.querySelector("[data-search-location-button]");
const currentWeather = document.querySelector("[data-current-weather]");
function searchLocation() {
  searchLocationButton.addEventListener("click", () => {
    (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(searchLocationInput.value);
  });
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
    console.log(getCurrentWeather(data));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDNUUsTUFBTUMsYUFBYSxHQUFHdkIsSUFBSSxDQUFDa0MsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNQLFFBQVE7RUFDdEUsTUFBTUMsWUFBWSxHQUFHekIsSUFBSSxDQUFDa0MsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNMLFFBQVE7RUFDckUsTUFBTUMsWUFBWSxHQUFHM0IsSUFBSSxDQUFDa0MsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNILFFBQVE7RUFFckUsT0FBTztJQUNMakIsV0FBVztJQUNYRSxTQUFTO0lBQ1RHLGFBQWE7SUFDYkUsUUFBUTtJQUNSQyxrQkFBa0I7SUFDbEJFLHFCQUFxQjtJQUNyQkUsYUFBYTtJQUNiRSxZQUFZO0lBQ1pFO0VBQ0YsQ0FBQztBQUNIOzs7Ozs7VUN6RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDRTtBQUU5Q1UseURBQWMsQ0FBQyxDQUFDO0FBQ2hCakQsMkRBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2hXZWF0aGVyRGF0YSBmcm9tIFwiLi93ZWF0aGVyLWRhdGFcIjtcblxuY29uc3Qgc2VhcmNoTG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtc2VhcmNoLWxvY2F0aW9uLWlucHV0XVwiLFxuKTtcbmNvbnN0IHNlYXJjaExvY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1zZWFyY2gtbG9jYXRpb24tYnV0dG9uXVwiLFxuKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWN1cnJlbnQtd2VhdGhlcl1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKCkge1xuICBzZWFyY2hMb2NhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZldGNoV2VhdGhlckRhdGEoc2VhcmNoTG9jYXRpb25JbnB1dC52YWx1ZSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiA9IFwiYXV0bzppcFwiKSB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcIjRiZTYzZTgyMmRiNDRhOGQ4MWM2NDQzMjIzMjYwOFwiO1xuICAvLyBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke0FQSV9LRVl9JnE9a2FsdXRhcmFgO1xuICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb259JmRheXM9MmA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGdldExvY2F0aW9uKGRhdGEpKTtcbiAgICBjb25zb2xlLmxvZyhnZXRDdXJyZW50V2VhdGhlcihkYXRhKSk7XG4gICAgY29uc29sZS5sb2coZ2V0VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbihkYXRhKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gYCR7ZGF0YS5sb2NhdGlvbi5uYW1lfSAke2RhdGEubG9jYXRpb24ucmVnaW9ufSAke2RhdGEubG9jYXRpb24uY291bnRyeX1gO1xuXG4gIHJldHVybiBsb2NhdGlvbjtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIoZGF0YSkge1xuICBjb25zdCBkYXRlQW5kVGltZSA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lO1xuICBjb25zdCBjb25kaXRpb24gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xuICBjb25zdCB0ZW1wZXJhdHVyZUNlbHNpdXMgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xuICBjb25zdCB0ZW1wZXJhdHVyZUZhaHJlbmhlaXQgPSBkYXRhLmN1cnJlbnQudGVtcF9mO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZGF0YS5jdXJyZW50LndpbmRfZGlyO1xuICBjb25zdCB3aW5kU3BlZWRLUEggPSBkYXRhLmN1cnJlbnQud2luZF9rcGg7XG4gIGNvbnN0IHdpbmRTcGVlZE1QSCA9IGRhdGEuY3VycmVudC53aW5kX21waDtcbiAgY29uc3QgbGFzdFVwZGF0ZWQgPSBkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkO1xuXG4gIHJldHVybiB7XG4gICAgZGF0ZUFuZFRpbWUsXG4gICAgY29uZGl0aW9uLFxuICAgIGNvbmRpdGlvbkljb24sXG4gICAgaHVtaWRpdHksXG4gICAgdGVtcGVyYXR1cmVDZWxzaXVzLFxuICAgIHRlbXBlcmF0dXJlRmFocmVuaGVpdCxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIHdpbmRTcGVlZEtQSCxcbiAgICB3aW5kU3BlZWRNUEgsXG4gICAgbGFzdFVwZGF0ZWQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpIHtcbiAgY29uc3QgaG91ciA9IG5ldyBEYXRlKGRhdGEubG9jYXRpb24ubG9jYWx0aW1lKS5nZXRIb3VycygpO1xuXG4gIGNvbnN0IGRhdGVBbmRUaW1lID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLnRpbWU7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS5jb25kaXRpb24uaWNvbjtcbiAgY29uc3QgaHVtaWRpdHkgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0uaHVtaWRpdHk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlQ2Vsc2l1cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS50ZW1wX2M7XG4gIGNvbnN0IHRlbXBlcmF0dXJlRmFocmVuaGVpdCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS50ZW1wX2Y7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0ud2luZF9kaXI7XG4gIGNvbnN0IHdpbmRTcGVlZEtQSCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS53aW5kX2twaDtcbiAgY29uc3Qgd2luZFNwZWVkTVBIID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLndpbmRfbXBoO1xuXG4gIHJldHVybiB7XG4gICAgZGF0ZUFuZFRpbWUsXG4gICAgY29uZGl0aW9uLFxuICAgIGNvbmRpdGlvbkljb24sXG4gICAgaHVtaWRpdHksXG4gICAgdGVtcGVyYXR1cmVDZWxzaXVzLFxuICAgIHRlbXBlcmF0dXJlRmFocmVuaGVpdCxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIHdpbmRTcGVlZEtQSCxcbiAgICB3aW5kU3BlZWRNUEgsXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tIFwiLi93ZWF0aGVyLWRhdGFcIjtcbmltcG9ydCBzZWFyY2hMb2NhdGlvbiBmcm9tIFwiLi9ET00tY29udHJvbGxlclwiO1xuXG5nZXRXZWF0aGVyRGF0YSgpO1xuc2VhcmNoTG9jYXRpb24oKTtcbiJdLCJuYW1lcyI6WyJmZXRjaFdlYXRoZXJEYXRhIiwic2VhcmNoTG9jYXRpb25JbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlYXJjaExvY2F0aW9uQnV0dG9uIiwiY3VycmVudFdlYXRoZXIiLCJzZWFyY2hMb2NhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImxvY2F0aW9uIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiQVBJX0tFWSIsIlVSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZ2V0TG9jYXRpb24iLCJnZXRDdXJyZW50V2VhdGhlciIsImdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyIiwiZXJyb3IiLCJuYW1lIiwicmVnaW9uIiwiY291bnRyeSIsImRhdGVBbmRUaW1lIiwibG9jYWx0aW1lIiwiY29uZGl0aW9uIiwiY3VycmVudCIsInRleHQiLCJjb25kaXRpb25JY29uIiwiaWNvbiIsImh1bWlkaXR5IiwidGVtcGVyYXR1cmVDZWxzaXVzIiwidGVtcF9jIiwidGVtcGVyYXR1cmVGYWhyZW5oZWl0IiwidGVtcF9mIiwid2luZERpcmVjdGlvbiIsIndpbmRfZGlyIiwid2luZFNwZWVkS1BIIiwid2luZF9rcGgiLCJ3aW5kU3BlZWRNUEgiLCJ3aW5kX21waCIsImxhc3RVcGRhdGVkIiwibGFzdF91cGRhdGVkIiwiaG91ciIsIkRhdGUiLCJnZXRIb3VycyIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJ0aW1lIiwiZ2V0V2VhdGhlckRhdGEiXSwic291cmNlUm9vdCI6IiJ9