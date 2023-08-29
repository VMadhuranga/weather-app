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
const weatherData = {};
async function fetchWeatherData() {
  const API_KEY = "4be63e822db44a8d81c64432232608";
  // const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=kalutara`;
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=beruwala&days=2`;
  try {
    const response = await fetch(URL, {
      mode: "cors"
    });
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
  weatherData.tomorrowThisHourWeather.condition = data.forecast.forecastday[1].hour[hour].condition.text;
  weatherData.tomorrowThisHourWeather.conditionIcon = data.forecast.forecastday[1].hour[hour].condition.icon;
  weatherData.tomorrowThisHourWeather.humidity = data.forecast.forecastday[1].hour[hour].humidity;
  weatherData.tomorrowThisHourWeather.temperatureCelsius = data.forecast.forecastday[1].hour[hour].temp_c;
  weatherData.tomorrowThisHourWeather.temperatureFahrenheit = data.forecast.forecastday[1].hour[hour].temp_f;
  weatherData.tomorrowThisHourWeather.windDirection = data.forecast.forecastday[1].hour[hour].wind_dir;
  weatherData.tomorrowThisHourWeather.windSpeedKPH = data.forecast.forecastday[1].hour[hour].wind_kph;
  weatherData.tomorrowThisHourWeather.windSpeedMPH = data.forecast.forecastday[1].hour[hour].wind_mph;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONEM7QUFFNUNPLHlEQUFjLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2VhdGhlckRhdGEgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YSgpIHtcbiAgY29uc3QgQVBJX0tFWSA9IFwiNGJlNjNlODIyZGI0NGE4ZDgxYzY0NDMyMjMyNjA4XCI7XG4gIC8vIGNvbnN0IFVSTCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT1rYWx1dGFyYWA7XG4gIGNvbnN0IFVSTCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSV9LRVl9JnE9YmVydXdhbGEmZGF5cz0yYDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgc2V0V2VhdGhlckRhdGEoZGF0YSk7XG4gICAgc2V0Q3VycmVudFdlYXRoZXIoZGF0YSk7XG4gICAgc2V0VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YSk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRXZWF0aGVyRGF0YShkYXRhKSB7XG4gIHdlYXRoZXJEYXRhLmxvY2F0aW9uID0gYCR7ZGF0YS5sb2NhdGlvbi5uYW1lfSAke2RhdGEubG9jYXRpb24ucmVnaW9ufSAke2RhdGEubG9jYXRpb24uY291bnRyeX1gO1xuICB3ZWF0aGVyRGF0YS5jdXJyZW50V2VhdGhlciA9IHt9O1xuICB3ZWF0aGVyRGF0YS50b21vcnJvd1RoaXNIb3VyV2VhdGhlciA9IHt9O1xufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50V2VhdGhlcihkYXRhKSB7XG4gIHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgd2VhdGhlckRhdGEuY3VycmVudFdlYXRoZXIuY29uZGl0aW9uSWNvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgd2VhdGhlckRhdGEuY3VycmVudFdlYXRoZXIuaHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHk7XG4gIHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlQ2Vsc2l1cyA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG4gIHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlRmFocmVuaGVpdCA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XG4gIHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLndpbmREaXJlY3Rpb24gPSBkYXRhLmN1cnJlbnQud2luZF9kaXI7XG4gIHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLndpbmRTcGVlZEtQSCA9IGRhdGEuY3VycmVudC53aW5kX2twaDtcbiAgd2VhdGhlckRhdGEuY3VycmVudFdlYXRoZXIud2luZFNwZWVkTVBIID0gZGF0YS5jdXJyZW50LndpbmRfbXBoO1xufVxuXG5mdW5jdGlvbiBzZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihkYXRhKSB7XG4gIGNvbnN0IGhvdXIgPSBuZXcgRGF0ZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSkuZ2V0SG91cnMoKTtcblxuICB3ZWF0aGVyRGF0YS50b21vcnJvd1RoaXNIb3VyV2VhdGhlci5jb25kaXRpb24gPVxuICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS5jb25kaXRpb24udGV4dDtcbiAgd2VhdGhlckRhdGEudG9tb3Jyb3dUaGlzSG91cldlYXRoZXIuY29uZGl0aW9uSWNvbiA9XG4gICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmNvbmRpdGlvbi5pY29uO1xuICB3ZWF0aGVyRGF0YS50b21vcnJvd1RoaXNIb3VyV2VhdGhlci5odW1pZGl0eSA9XG4gICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmh1bWlkaXR5O1xuICB3ZWF0aGVyRGF0YS50b21vcnJvd1RoaXNIb3VyV2VhdGhlci50ZW1wZXJhdHVyZUNlbHNpdXMgPVxuICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS50ZW1wX2M7XG4gIHdlYXRoZXJEYXRhLnRvbW9ycm93VGhpc0hvdXJXZWF0aGVyLnRlbXBlcmF0dXJlRmFocmVuaGVpdCA9XG4gICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLnRlbXBfZjtcbiAgd2VhdGhlckRhdGEudG9tb3Jyb3dUaGlzSG91cldlYXRoZXIud2luZERpcmVjdGlvbiA9XG4gICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLndpbmRfZGlyO1xuICB3ZWF0aGVyRGF0YS50b21vcnJvd1RoaXNIb3VyV2VhdGhlci53aW5kU3BlZWRLUEggPVxuICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS53aW5kX2twaDtcbiAgd2VhdGhlckRhdGEudG9tb3Jyb3dUaGlzSG91cldlYXRoZXIud2luZFNwZWVkTVBIID1cbiAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0ud2luZF9tcGg7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tIFwiLi93ZWF0aGVyLWRhdGFcIjtcblxuZ2V0V2VhdGhlckRhdGEoKTtcbiJdLCJuYW1lcyI6WyJ3ZWF0aGVyRGF0YSIsImZldGNoV2VhdGhlckRhdGEiLCJBUElfS0VZIiwiVVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRXZWF0aGVyRGF0YSIsInNldEN1cnJlbnRXZWF0aGVyIiwic2V0VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIiLCJlcnJvciIsImxvY2F0aW9uIiwibmFtZSIsInJlZ2lvbiIsImNvdW50cnkiLCJjdXJyZW50V2VhdGhlciIsInRvbW9ycm93VGhpc0hvdXJXZWF0aGVyIiwiY29uZGl0aW9uIiwiY3VycmVudCIsInRleHQiLCJjb25kaXRpb25JY29uIiwiaWNvbiIsImh1bWlkaXR5IiwidGVtcGVyYXR1cmVDZWxzaXVzIiwidGVtcF9jIiwidGVtcGVyYXR1cmVGYWhyZW5oZWl0IiwidGVtcF9mIiwid2luZERpcmVjdGlvbiIsIndpbmRfZGlyIiwid2luZFNwZWVkS1BIIiwid2luZF9rcGgiLCJ3aW5kU3BlZWRNUEgiLCJ3aW5kX21waCIsImhvdXIiLCJEYXRlIiwibG9jYWx0aW1lIiwiZ2V0SG91cnMiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiZ2V0V2VhdGhlckRhdGEiXSwic291cmNlUm9vdCI6IiJ9