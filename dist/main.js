/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

(0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TGpCLFdBQVc7SUFDWEUsU0FBUztJQUNURyxhQUFhO0lBQ2JFLFFBQVE7SUFDUkMsa0JBQWtCO0lBQ2xCRSxxQkFBcUI7SUFDckJFLGFBQWE7SUFDYkUsWUFBWTtJQUNaRTtFQUNGLENBQUM7QUFDSDs7Ozs7O1VDekVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONEM7QUFFNUNVLHlEQUFjLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiA9IFwiYXV0bzppcFwiKSB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcIjRiZTYzZTgyMmRiNDRhOGQ4MWM2NDQzMjIzMjYwOFwiO1xuICAvLyBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke0FQSV9LRVl9JnE9a2FsdXRhcmFgO1xuICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb259JmRheXM9MmA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGdldExvY2F0aW9uKGRhdGEpKTtcbiAgICBjb25zb2xlLmxvZyhnZXRDdXJyZW50V2VhdGhlcihkYXRhKSk7XG4gICAgY29uc29sZS5sb2coZ2V0VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbihkYXRhKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gYCR7ZGF0YS5sb2NhdGlvbi5uYW1lfSAke2RhdGEubG9jYXRpb24ucmVnaW9ufSAke2RhdGEubG9jYXRpb24uY291bnRyeX1gO1xuXG4gIHJldHVybiBsb2NhdGlvbjtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIoZGF0YSkge1xuICBjb25zdCBkYXRlQW5kVGltZSA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lO1xuICBjb25zdCBjb25kaXRpb24gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xuICBjb25zdCB0ZW1wZXJhdHVyZUNlbHNpdXMgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xuICBjb25zdCB0ZW1wZXJhdHVyZUZhaHJlbmhlaXQgPSBkYXRhLmN1cnJlbnQudGVtcF9mO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZGF0YS5jdXJyZW50LndpbmRfZGlyO1xuICBjb25zdCB3aW5kU3BlZWRLUEggPSBkYXRhLmN1cnJlbnQud2luZF9rcGg7XG4gIGNvbnN0IHdpbmRTcGVlZE1QSCA9IGRhdGEuY3VycmVudC53aW5kX21waDtcbiAgY29uc3QgbGFzdFVwZGF0ZWQgPSBkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkO1xuXG4gIHJldHVybiB7XG4gICAgZGF0ZUFuZFRpbWUsXG4gICAgY29uZGl0aW9uLFxuICAgIGNvbmRpdGlvbkljb24sXG4gICAgaHVtaWRpdHksXG4gICAgdGVtcGVyYXR1cmVDZWxzaXVzLFxuICAgIHRlbXBlcmF0dXJlRmFocmVuaGVpdCxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIHdpbmRTcGVlZEtQSCxcbiAgICB3aW5kU3BlZWRNUEgsXG4gICAgbGFzdFVwZGF0ZWQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpIHtcbiAgY29uc3QgaG91ciA9IG5ldyBEYXRlKGRhdGEubG9jYXRpb24ubG9jYWx0aW1lKS5nZXRIb3VycygpO1xuXG4gIGNvbnN0IGRhdGVBbmRUaW1lID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLnRpbWU7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS5jb25kaXRpb24uaWNvbjtcbiAgY29uc3QgaHVtaWRpdHkgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0uaHVtaWRpdHk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlQ2Vsc2l1cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS50ZW1wX2M7XG4gIGNvbnN0IHRlbXBlcmF0dXJlRmFocmVuaGVpdCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS50ZW1wX2Y7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0ud2luZF9kaXI7XG4gIGNvbnN0IHdpbmRTcGVlZEtQSCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS53aW5kX2twaDtcbiAgY29uc3Qgd2luZFNwZWVkTVBIID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLndpbmRfbXBoO1xuXG4gIHJldHVybiB7XG4gICAgZGF0ZUFuZFRpbWUsXG4gICAgY29uZGl0aW9uLFxuICAgIGNvbmRpdGlvbkljb24sXG4gICAgaHVtaWRpdHksXG4gICAgdGVtcGVyYXR1cmVDZWxzaXVzLFxuICAgIHRlbXBlcmF0dXJlRmFocmVuaGVpdCxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIHdpbmRTcGVlZEtQSCxcbiAgICB3aW5kU3BlZWRNUEgsXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tIFwiLi93ZWF0aGVyLWRhdGFcIjtcblxuZ2V0V2VhdGhlckRhdGEoKTtcbiJdLCJuYW1lcyI6WyJmZXRjaFdlYXRoZXJEYXRhIiwibG9jYXRpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJBUElfS0VZIiwiVVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRMb2NhdGlvbiIsImdldEN1cnJlbnRXZWF0aGVyIiwiZ2V0VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIiLCJlcnJvciIsIm5hbWUiLCJyZWdpb24iLCJjb3VudHJ5IiwiZGF0ZUFuZFRpbWUiLCJsb2NhbHRpbWUiLCJjb25kaXRpb24iLCJjdXJyZW50IiwidGV4dCIsImNvbmRpdGlvbkljb24iLCJpY29uIiwiaHVtaWRpdHkiLCJ0ZW1wZXJhdHVyZUNlbHNpdXMiLCJ0ZW1wX2MiLCJ0ZW1wZXJhdHVyZUZhaHJlbmhlaXQiLCJ0ZW1wX2YiLCJ3aW5kRGlyZWN0aW9uIiwid2luZF9kaXIiLCJ3aW5kU3BlZWRLUEgiLCJ3aW5kX2twaCIsIndpbmRTcGVlZE1QSCIsIndpbmRfbXBoIiwibGFzdFVwZGF0ZWQiLCJsYXN0X3VwZGF0ZWQiLCJob3VyIiwiRGF0ZSIsImdldEhvdXJzIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsInRpbWUiLCJnZXRXZWF0aGVyRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=