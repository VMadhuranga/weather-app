/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/today-weather.js":
/*!******************************!*\
  !*** ./src/today-weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTodayWeather)
/* harmony export */ });
function getTodayWeather(data) {
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
    lastUpdated: data.current.last_updated
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

/***/ }),

/***/ "./src/tommorow-weather.js":
/*!*********************************!*\
  !*** ./src/tommorow-weather.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTomorrowWeather)
/* harmony export */ });
function getTomorrowWeather(data) {
  const tomorrowWeather = {
    date: data.forecast.forecastday[1].date,
    condition: data.forecast.forecastday[1].day.condition.text,
    conditionIcon: data.forecast.forecastday[1].day.condition.icon,
    averageTemperatureCelsius: data.forecast.forecastday[1].day.avgtemp_c,
    averageTemperatureFahrenheit: data.forecast.forecastday[1].day.avgtemp_f,
    averageHumidity: data.forecast.forecastday[1].day.avghumidity
  };
  console.log(data.forecast.forecastday[1]);
  console.log(`Date: ${tomorrowWeather.date}`);
  console.log(`Condition: ${tomorrowWeather.condition}`);
  console.log(`Average Temperature: ${tomorrowWeather.averageTemperatureCelsius}c`);
  console.log(`Average Temperature: ${tomorrowWeather.averageTemperatureFahrenheit}f`);
  console.log(`Average Humidity: ${tomorrowWeather.averageHumidity}`);
}

/***/ }),

/***/ "./src/weather-data.js":
/*!*****************************!*\
  !*** ./src/weather-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _today_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today-weather */ "./src/today-weather.js");
/* harmony import */ var _tommorow_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tommorow-weather */ "./src/tommorow-weather.js");


async function getWeatherData() {
  const API_KEY = "4be63e822db44a8d81c64432232608";
  // const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=kalutara`;
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=beruwala&days=2`;
  try {
    const response = await fetch(URL, {
      mode: "cors"
    });
    const data = await response.json();
    console.log(data);
    (0,_today_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    (0,_tommorow_weather__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
  } catch (error) {
    console.log(error);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0yQyxRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBQ2xDcEIsT0FBTyxDQUFDQyxHQUFHLENBQUMzQixJQUFJLENBQUM7SUFDakJELDBEQUFlLENBQUNDLElBQUksQ0FBQztJQUNyQjRCLDZEQUFrQixDQUFDNUIsSUFBSSxDQUFDO0VBQzFCLENBQUMsQ0FBQyxPQUFPK0MsS0FBSyxFQUFFO0lBQ2RyQixPQUFPLENBQUNDLEdBQUcsQ0FBQ29CLEtBQUssQ0FBQztFQUNwQjtBQUNGOzs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040QztBQUU1Q1AseURBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90b2RheS13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RvbW1vcm93LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VG9kYXlXZWF0aGVyKGRhdGEpIHtcbiAgY29uc3QgdG9kYXlXZWF0aGVyID0ge1xuICAgIGxvY2F0aW9uOiBgJHtkYXRhLmxvY2F0aW9uLm5hbWV9ICR7ZGF0YS5sb2NhdGlvbi5yZWdpb259ICR7ZGF0YS5sb2NhdGlvbi5jb3VudHJ5fWAsXG4gICAgZGF0ZUFuZFRpbWU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgIGNvbmRpdGlvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgIGNvbmRpdGlvbkljb246IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcbiAgICB0ZW1wZXJhdHVyZUNlbHNpdXM6IGRhdGEuY3VycmVudC50ZW1wX2MsXG4gICAgdGVtcGVyYXR1cmVGYWhyZW5oZWl0OiBkYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgIHdpbmREaXJlY3Rpb246IGRhdGEuY3VycmVudC53aW5kX2RpcixcbiAgICB3aW5kU3BlZWRLUEg6IGRhdGEuY3VycmVudC53aW5kX2twaCxcbiAgICB3aW5kU3BlZWRNUEg6IGRhdGEuY3VycmVudC53aW5kX21waCxcbiAgICBodW1pZGl0eTogZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgIGxhc3RVcGRhdGVkOiBkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkLFxuICB9O1xuXG4gIGNvbnNvbGUubG9nKHRvZGF5V2VhdGhlcik7XG4gIGNvbnNvbGUubG9nKGBMb2NhdGlvbjogJHt0b2RheVdlYXRoZXIubG9jYXRpb259YCk7XG4gIGNvbnNvbGUubG9nKGBEYXRlICYgVGltZTogJHt0b2RheVdlYXRoZXIuZGF0ZUFuZFRpbWV9YCk7XG4gIGNvbnNvbGUubG9nKGBDb25kaXRpb246ICR7dG9kYXlXZWF0aGVyLmNvbmRpdGlvbn1gKTtcbiAgY29uc29sZS5sb2coYENvbmRpdGlvbiBJY29uOiAke3RvZGF5V2VhdGhlci5jb25kaXRpb25JY29ufWApO1xuICBjb25zb2xlLmxvZyhgVGVtcGVyYXR1cmU6ICR7dG9kYXlXZWF0aGVyLnRlbXBlcmF0dXJlQ2Vsc2l1c31jYCk7XG4gIGNvbnNvbGUubG9nKGBUZW1wZXJhdHVyZTogJHt0b2RheVdlYXRoZXIudGVtcGVyYXR1cmVGYWhyZW5oZWl0fWZgKTtcbiAgY29uc29sZS5sb2coYFdpbmQgRGlyZWN0aW9uOiAke3RvZGF5V2VhdGhlci53aW5kRGlyZWN0aW9ufWApO1xuICBjb25zb2xlLmxvZyhgV2luZCBTcGVlZDogJHt0b2RheVdlYXRoZXIud2luZFNwZWVkS1BIfUtQSGApO1xuICBjb25zb2xlLmxvZyhgV2luZCBTcGVlZDogJHt0b2RheVdlYXRoZXIud2luZFNwZWVkTVBIfU1QSGApO1xuICBjb25zb2xlLmxvZyhgSHVtaWRpdHk6ICR7dG9kYXlXZWF0aGVyLmh1bWlkaXR5fWApO1xuICBjb25zb2xlLmxvZyhgTGFzdCBVcGRhdGVkOiAke3RvZGF5V2VhdGhlci5sYXN0VXBkYXRlZH1gKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRvbW9ycm93V2VhdGhlcihkYXRhKSB7XG4gIGNvbnN0IHRvbW9ycm93V2VhdGhlciA9IHtcbiAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGUsXG4gICAgY29uZGl0aW9uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24udGV4dCxcbiAgICBjb25kaXRpb25JY29uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbixcbiAgICBhdmVyYWdlVGVtcGVyYXR1cmVDZWxzaXVzOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5hdmd0ZW1wX2MsXG4gICAgYXZlcmFnZVRlbXBlcmF0dXJlRmFocmVuaGVpdDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuYXZndGVtcF9mLFxuICAgIGF2ZXJhZ2VIdW1pZGl0eTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuYXZnaHVtaWRpdHksXG4gIH07XG5cbiAgY29uc29sZS5sb2coZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXSk7XG4gIGNvbnNvbGUubG9nKGBEYXRlOiAke3RvbW9ycm93V2VhdGhlci5kYXRlfWApO1xuICBjb25zb2xlLmxvZyhgQ29uZGl0aW9uOiAke3RvbW9ycm93V2VhdGhlci5jb25kaXRpb259YCk7XG4gIGNvbnNvbGUubG9nKFxuICAgIGBBdmVyYWdlIFRlbXBlcmF0dXJlOiAke3RvbW9ycm93V2VhdGhlci5hdmVyYWdlVGVtcGVyYXR1cmVDZWxzaXVzfWNgLFxuICApO1xuICBjb25zb2xlLmxvZyhcbiAgICBgQXZlcmFnZSBUZW1wZXJhdHVyZTogJHt0b21vcnJvd1dlYXRoZXIuYXZlcmFnZVRlbXBlcmF0dXJlRmFocmVuaGVpdH1mYCxcbiAgKTtcbiAgY29uc29sZS5sb2coYEF2ZXJhZ2UgSHVtaWRpdHk6ICR7dG9tb3Jyb3dXZWF0aGVyLmF2ZXJhZ2VIdW1pZGl0eX1gKTtcbn1cbiIsImltcG9ydCBnZXRUb2RheVdlYXRoZXIgZnJvbSBcIi4vdG9kYXktd2VhdGhlclwiO1xuaW1wb3J0IGdldFRvbW9ycm93V2VhdGhlciBmcm9tIFwiLi90b21tb3Jvdy13ZWF0aGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKCkge1xuICBjb25zdCBBUElfS0VZID0gXCI0YmU2M2U4MjJkYjQ0YThkODFjNjQ0MzIyMzI2MDhcIjtcbiAgLy8gY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBUElfS0VZfSZxPWthbHV0YXJhYDtcbiAgY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT1iZXJ1d2FsYSZkYXlzPTJgO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBnZXRUb2RheVdlYXRoZXIoZGF0YSk7XG4gICAgZ2V0VG9tb3Jyb3dXZWF0aGVyKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSBcIi4vd2VhdGhlci1kYXRhXCI7XG5cbmdldFdlYXRoZXJEYXRhKCk7XG4iXSwibmFtZXMiOlsiZ2V0VG9kYXlXZWF0aGVyIiwiZGF0YSIsInRvZGF5V2VhdGhlciIsImxvY2F0aW9uIiwibmFtZSIsInJlZ2lvbiIsImNvdW50cnkiLCJkYXRlQW5kVGltZSIsImxvY2FsdGltZSIsImNvbmRpdGlvbiIsImN1cnJlbnQiLCJ0ZXh0IiwiY29uZGl0aW9uSWNvbiIsImljb24iLCJ0ZW1wZXJhdHVyZUNlbHNpdXMiLCJ0ZW1wX2MiLCJ0ZW1wZXJhdHVyZUZhaHJlbmhlaXQiLCJ0ZW1wX2YiLCJ3aW5kRGlyZWN0aW9uIiwid2luZF9kaXIiLCJ3aW5kU3BlZWRLUEgiLCJ3aW5kX2twaCIsIndpbmRTcGVlZE1QSCIsIndpbmRfbXBoIiwiaHVtaWRpdHkiLCJsYXN0VXBkYXRlZCIsImxhc3RfdXBkYXRlZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRUb21vcnJvd1dlYXRoZXIiLCJ0b21vcnJvd1dlYXRoZXIiLCJkYXRlIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRheSIsImF2ZXJhZ2VUZW1wZXJhdHVyZUNlbHNpdXMiLCJhdmd0ZW1wX2MiLCJhdmVyYWdlVGVtcGVyYXR1cmVGYWhyZW5oZWl0IiwiYXZndGVtcF9mIiwiYXZlcmFnZUh1bWlkaXR5IiwiYXZnaHVtaWRpdHkiLCJnZXRXZWF0aGVyRGF0YSIsIkFQSV9LRVkiLCJVUkwiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=