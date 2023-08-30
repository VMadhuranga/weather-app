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
    if (!response.ok) {
      alert(data.error.message);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsbUJBQW1CLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUNoRCw4QkFDRixDQUFDO0FBQ0QsTUFBTUMsb0JBQW9CLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUNqRCwrQkFDRixDQUFDO0FBQ0QsTUFBTUUsUUFBUSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUMxRCxNQUFNRyxrQkFBa0IsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQy9DLDZCQUNGLENBQUM7QUFDRCxNQUFNSSx1QkFBdUIsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQ3BELHdDQUNGLENBQUM7QUFFYyxTQUFTSyxjQUFjQSxDQUFBLEVBQUc7RUFDdkNKLG9CQUFvQixDQUFDSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUNuRFQseURBQWdCLENBQUNDLG1CQUFtQixDQUFDUyxLQUFLLENBQUM7RUFDN0MsQ0FBQyxDQUFDO0FBQ0o7QUFFTyxTQUFTQyxlQUFlQSxDQUFDRCxLQUFLLEVBQUU7RUFDckNMLFFBQVEsQ0FBQ08sV0FBVyxHQUFHRixLQUFLO0FBQzlCO0FBRU8sU0FBU0cscUJBQXFCQSxDQUFDQyxJQUFJLEVBQUU7RUFDMUNSLGtCQUFrQixDQUFDUyxlQUFlLENBQUMsQ0FBQztFQUVwQyxNQUFNQyxhQUFhLEdBQUdkLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNuRCxNQUFNQyxTQUFTLEdBQUdoQixRQUFRLENBQUNlLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDOUMsTUFBTUUsV0FBVyxHQUFHakIsUUFBUSxDQUFDZSxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ2hELE1BQU1HLFFBQVEsR0FBR2xCLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLElBQUksQ0FBQztFQUM3QyxNQUFNSSxXQUFXLEdBQUduQixRQUFRLENBQUNlLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDaEQsTUFBTUssYUFBYSxHQUFHcEIsUUFBUSxDQUFDZSxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ2xELE1BQU1NLFNBQVMsR0FBR3JCLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLElBQUksQ0FBQztFQUM5QyxNQUFNTyxXQUFXLEdBQUd0QixRQUFRLENBQUNlLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFFaERELGFBQWEsQ0FBQ1MsR0FBRyxHQUFJLFNBQVFYLElBQUksQ0FBQ0UsYUFBYyxFQUFDO0VBQ2pERSxTQUFTLENBQUNOLFdBQVcsR0FBSSxjQUFhRSxJQUFJLENBQUNJLFNBQVUsRUFBQztFQUN0REMsV0FBVyxDQUFDUCxXQUFXLEdBQUksZ0JBQWVFLElBQUksQ0FBQ0ssV0FBWSxFQUFDO0VBQzVEQyxRQUFRLENBQUNSLFdBQVcsR0FBSSxhQUFZRSxJQUFJLENBQUNNLFFBQVMsRUFBQztFQUNuREMsV0FBVyxDQUFDVCxXQUFXLEdBQUksZ0JBQWVFLElBQUksQ0FBQ1ksa0JBQW1CLFFBQU87RUFDekVKLGFBQWEsQ0FBQ1YsV0FBVyxHQUFJLG1CQUFrQkUsSUFBSSxDQUFDUSxhQUFjLEVBQUM7RUFDbkVDLFNBQVMsQ0FBQ1gsV0FBVyxHQUFJLGVBQWNFLElBQUksQ0FBQ2EsWUFBYSxFQUFDO0VBQzFESCxXQUFXLENBQUNaLFdBQVcsR0FBSSxpQkFBZ0JFLElBQUksQ0FBQ1UsV0FBWSxLQUFJO0VBRWhFbEIsa0JBQWtCLENBQUNzQixNQUFNLENBQ3ZCWixhQUFhLEVBQ2JFLFNBQVMsRUFDVEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLFdBQVcsRUFDWEMsYUFBYSxFQUNiQyxTQUFTLEVBQ1RDLFdBQ0YsQ0FBQztBQUNIO0FBRU8sU0FBU0ssOEJBQThCQSxDQUFDZixJQUFJLEVBQUU7RUFDbkRQLHVCQUF1QixDQUFDUSxlQUFlLENBQUMsQ0FBQztFQUV6QyxNQUFNQyxhQUFhLEdBQUdkLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNuRCxNQUFNQyxTQUFTLEdBQUdoQixRQUFRLENBQUNlLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDOUMsTUFBTUUsV0FBVyxHQUFHakIsUUFBUSxDQUFDZSxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ2hELE1BQU1HLFFBQVEsR0FBR2xCLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLElBQUksQ0FBQztFQUM3QyxNQUFNSSxXQUFXLEdBQUduQixRQUFRLENBQUNlLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDaEQsTUFBTUssYUFBYSxHQUFHcEIsUUFBUSxDQUFDZSxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ2xELE1BQU1NLFNBQVMsR0FBR3JCLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLElBQUksQ0FBQztFQUU5Q0QsYUFBYSxDQUFDUyxHQUFHLEdBQUksU0FBUVgsSUFBSSxDQUFDRSxhQUFjLEVBQUM7RUFDakRFLFNBQVMsQ0FBQ04sV0FBVyxHQUFJLGNBQWFFLElBQUksQ0FBQ0ksU0FBVSxFQUFDO0VBQ3REQyxXQUFXLENBQUNQLFdBQVcsR0FBSSxnQkFBZUUsSUFBSSxDQUFDSyxXQUFZLEVBQUM7RUFDNURDLFFBQVEsQ0FBQ1IsV0FBVyxHQUFJLGFBQVlFLElBQUksQ0FBQ00sUUFBUyxFQUFDO0VBQ25EQyxXQUFXLENBQUNULFdBQVcsR0FBSSxnQkFBZUUsSUFBSSxDQUFDWSxrQkFBbUIsUUFBTztFQUN6RUosYUFBYSxDQUFDVixXQUFXLEdBQUksbUJBQWtCRSxJQUFJLENBQUNRLGFBQWMsRUFBQztFQUNuRUMsU0FBUyxDQUFDWCxXQUFXLEdBQUksZUFBY0UsSUFBSSxDQUFDYSxZQUFhLEtBQUk7RUFFN0RwQix1QkFBdUIsQ0FBQ3FCLE1BQU0sQ0FDNUJaLGFBQWEsRUFDYkUsU0FBUyxFQUNUQyxXQUFXLEVBQ1hDLFFBQVEsRUFDUkMsV0FBVyxFQUNYQyxhQUFhLEVBQ2JDLFNBQ0YsQ0FBQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNuRjBCO0FBRVgsZUFBZXZCLGdCQUFnQkEsQ0FBQSxFQUF1QjtFQUFBLElBQXRCSyxRQUFRLEdBQUF5QixTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxTQUFTO0VBQ2pFLE1BQU1HLE9BQU8sR0FBRyxnQ0FBZ0M7RUFDaEQ7RUFDQSxNQUFNQyxHQUFHLEdBQUksbURBQWtERCxPQUFRLE1BQUs1QixRQUFTLFNBQVE7RUFFN0YsSUFBSTtJQUNGLE1BQU04QixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLEVBQUU7TUFBRUcsSUFBSSxFQUFFO0lBQU8sQ0FBQyxDQUFDO0lBQ25ELE1BQU12QixJQUFJLEdBQUcsTUFBTXFCLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7SUFFbEMsSUFBSSxDQUFDSCxRQUFRLENBQUNJLEVBQUUsRUFBRTtNQUNoQkMsS0FBSyxDQUFDMUIsSUFBSSxDQUFDMkIsS0FBSyxDQUFDQyxPQUFPLENBQUM7SUFDM0I7SUFFQS9CLGdFQUFlLENBQUNnQyxXQUFXLENBQUM3QixJQUFJLENBQUMsQ0FBQztJQUNsQ0Qsc0VBQXFCLENBQUMrQixpQkFBaUIsQ0FBQzlCLElBQUksQ0FBQyxDQUFDO0lBQzlDZSwrRUFBOEIsQ0FBQ2dCLDBCQUEwQixDQUFDL0IsSUFBSSxDQUFDLENBQUM7RUFDbEUsQ0FBQyxDQUFDLE9BQU8yQixLQUFLLEVBQUU7SUFDZEssT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUssQ0FBQztFQUNwQjtBQUNGO0FBRUEsU0FBU0UsV0FBV0EsQ0FBQzdCLElBQUksRUFBRTtFQUN6QixNQUFNVCxRQUFRLEdBQUksR0FBRVMsSUFBSSxDQUFDVCxRQUFRLENBQUMyQyxJQUFLLElBQUdsQyxJQUFJLENBQUNULFFBQVEsQ0FBQzRDLE1BQU8sSUFBR25DLElBQUksQ0FBQ1QsUUFBUSxDQUFDNkMsT0FBUSxFQUFDO0VBRXpGLE9BQU83QyxRQUFRO0FBQ2pCO0FBRUEsU0FBU3VDLGlCQUFpQkEsQ0FBQzlCLElBQUksRUFBRTtFQUMvQixNQUFNSyxXQUFXLEdBQUdMLElBQUksQ0FBQ1QsUUFBUSxDQUFDOEMsU0FBUztFQUMzQyxNQUFNakMsU0FBUyxHQUFHSixJQUFJLENBQUNzQyxPQUFPLENBQUNsQyxTQUFTLENBQUNtQyxJQUFJO0VBQzdDLE1BQU1yQyxhQUFhLEdBQUdGLElBQUksQ0FBQ3NDLE9BQU8sQ0FBQ2xDLFNBQVMsQ0FBQ29DLElBQUk7RUFDakQsTUFBTWxDLFFBQVEsR0FBR04sSUFBSSxDQUFDc0MsT0FBTyxDQUFDaEMsUUFBUTtFQUN0QyxNQUFNTSxrQkFBa0IsR0FBR1osSUFBSSxDQUFDc0MsT0FBTyxDQUFDRyxNQUFNO0VBQzlDLE1BQU1DLHFCQUFxQixHQUFHMUMsSUFBSSxDQUFDc0MsT0FBTyxDQUFDSyxNQUFNO0VBQ2pELE1BQU1uQyxhQUFhLEdBQUdSLElBQUksQ0FBQ3NDLE9BQU8sQ0FBQ00sUUFBUTtFQUMzQyxNQUFNQyxZQUFZLEdBQUc3QyxJQUFJLENBQUNzQyxPQUFPLENBQUNRLFFBQVE7RUFDMUMsTUFBTWpDLFlBQVksR0FBR2IsSUFBSSxDQUFDc0MsT0FBTyxDQUFDUyxRQUFRO0VBQzFDLE1BQU1yQyxXQUFXLEdBQUdWLElBQUksQ0FBQ3NDLE9BQU8sQ0FBQ1UsWUFBWTtFQUU3QyxPQUFPO0lBQ0wzQyxXQUFXO0lBQ1hELFNBQVM7SUFDVEYsYUFBYTtJQUNiSSxRQUFRO0lBQ1JNLGtCQUFrQjtJQUNsQjhCLHFCQUFxQjtJQUNyQmxDLGFBQWE7SUFDYnFDLFlBQVk7SUFDWmhDLFlBQVk7SUFDWkg7RUFDRixDQUFDO0FBQ0g7QUFFQSxTQUFTcUIsMEJBQTBCQSxDQUFDL0IsSUFBSSxFQUFFO0VBQ3hDLE1BQU1pRCxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDbEQsSUFBSSxDQUFDVCxRQUFRLENBQUM4QyxTQUFTLENBQUMsQ0FBQ2MsUUFBUSxDQUFDLENBQUM7RUFFekQsTUFBTTlDLFdBQVcsR0FBR0wsSUFBSSxDQUFDb0QsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNLLElBQUk7RUFDaEUsTUFBTWxELFNBQVMsR0FBR0osSUFBSSxDQUFDb0QsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUM3QyxTQUFTLENBQUNtQyxJQUFJO0VBQ3hFLE1BQU1yQyxhQUFhLEdBQUdGLElBQUksQ0FBQ29ELFFBQVEsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDSixJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFDN0MsU0FBUyxDQUFDb0MsSUFBSTtFQUM1RSxNQUFNbEMsUUFBUSxHQUFHTixJQUFJLENBQUNvRCxRQUFRLENBQUNDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0osSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQzNDLFFBQVE7RUFDakUsTUFBTU0sa0JBQWtCLEdBQUdaLElBQUksQ0FBQ29ELFFBQVEsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDSixJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFDUixNQUFNO0VBQ3pFLE1BQU1DLHFCQUFxQixHQUFHMUMsSUFBSSxDQUFDb0QsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNOLE1BQU07RUFDNUUsTUFBTW5DLGFBQWEsR0FBR1IsSUFBSSxDQUFDb0QsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNMLFFBQVE7RUFDdEUsTUFBTUMsWUFBWSxHQUFHN0MsSUFBSSxDQUFDb0QsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNILFFBQVE7RUFDckUsTUFBTWpDLFlBQVksR0FBR2IsSUFBSSxDQUFDb0QsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNGLFFBQVE7RUFFckUsT0FBTztJQUNMMUMsV0FBVztJQUNYRCxTQUFTO0lBQ1RGLGFBQWE7SUFDYkksUUFBUTtJQUNSTSxrQkFBa0I7SUFDbEI4QixxQkFBcUI7SUFDckJsQyxhQUFhO0lBQ2JxQyxZQUFZO0lBQ1poQztFQUNGLENBQUM7QUFDSDs7Ozs7O1VDbkZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ0U7QUFFOUMwQyx5REFBYyxDQUFDLENBQUM7QUFDaEI3RCwyREFBYyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaFdlYXRoZXJEYXRhIGZyb20gXCIuL3dlYXRoZXItZGF0YVwiO1xuXG5jb25zdCBzZWFyY2hMb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1zZWFyY2gtbG9jYXRpb24taW5wdXRdXCIsXG4pO1xuY29uc3Qgc2VhcmNoTG9jYXRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLXNlYXJjaC1sb2NhdGlvbi1idXR0b25dXCIsXG4pO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbG9jYXRpb25dXCIpO1xuY29uc3QgY3VycmVudFdlYXRoZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1jdXJyZW50LXdlYXRoZXJdID4gdWxcIixcbik7XG5jb25zdCB0b21vcnJvd1RoaXNIb3VyV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtdG9tb3Jyb3ctdGhpcy1ob3VyLXdlYXRoZXJdID4gdWxcIixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKCkge1xuICBzZWFyY2hMb2NhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZldGNoV2VhdGhlckRhdGEoc2VhcmNoTG9jYXRpb25JbnB1dC52YWx1ZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxvY2F0aW9uKHZhbHVlKSB7XG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudFdlYXRoZXIoZGF0YSkge1xuICBjdXJyZW50V2VhdGhlckluZm8ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsYXN0VXBkYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBjb25kaXRpb25JY29uLnNyYyA9IGBodHRwczoke2RhdGEuY29uZGl0aW9uSWNvbn1gO1xuICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBgQ29uZGl0aW9uOiAke2RhdGEuY29uZGl0aW9ufWA7XG4gIGRhdGVBbmRUaW1lLnRleHRDb250ZW50ID0gYERhdGUgJiBUaW1lOiAke2RhdGEuZGF0ZUFuZFRpbWV9YDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5odW1pZGl0eX1gO1xuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXBlcmF0dXJlQ2Vsc2l1c31cXHUyMTAzYDtcbiAgd2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGBXaW5kIERpcmVjdGlvbjogJHtkYXRhLndpbmREaXJlY3Rpb259YDtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7ZGF0YS53aW5kU3BlZWRNUEh9YDtcbiAgbGFzdFVwZGF0ZWQudGV4dENvbnRlbnQgPSBgTGFzdCBVcGRhdGVkOiAke2RhdGEubGFzdFVwZGF0ZWR9bXBoYDtcblxuICBjdXJyZW50V2VhdGhlckluZm8uYXBwZW5kKFxuICAgIGNvbmRpdGlvbkljb24sXG4gICAgY29uZGl0aW9uLFxuICAgIGRhdGVBbmRUaW1lLFxuICAgIGh1bWlkaXR5LFxuICAgIHRlbXBlcmF0dXJlLFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkLFxuICAgIGxhc3RVcGRhdGVkLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpIHtcbiAgdG9tb3Jyb3dUaGlzSG91cldlYXRoZXIucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbmRpdGlvbkljb24uc3JjID0gYGh0dHBzOiR7ZGF0YS5jb25kaXRpb25JY29ufWA7XG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGBDb25kaXRpb246ICR7ZGF0YS5jb25kaXRpb259YDtcbiAgZGF0ZUFuZFRpbWUudGV4dENvbnRlbnQgPSBgRGF0ZSAmIFRpbWU6ICR7ZGF0YS5kYXRlQW5kVGltZX1gO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLmh1bWlkaXR5fWA7XG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke2RhdGEudGVtcGVyYXR1cmVDZWxzaXVzfVxcdTIxMDNgO1xuICB3aW5kRGlyZWN0aW9uLnRleHRDb250ZW50ID0gYFdpbmQgRGlyZWN0aW9uOiAke2RhdGEud2luZERpcmVjdGlvbn1gO1xuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtkYXRhLndpbmRTcGVlZE1QSH1tcGhgO1xuXG4gIHRvbW9ycm93VGhpc0hvdXJXZWF0aGVyLmFwcGVuZChcbiAgICBjb25kaXRpb25JY29uLFxuICAgIGNvbmRpdGlvbixcbiAgICBkYXRlQW5kVGltZSxcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZSxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIHdpbmRTcGVlZCxcbiAgKTtcbn1cbiIsImltcG9ydCB7XG4gIGRpc3BsYXlMb2NhdGlvbixcbiAgZGlzcGxheUN1cnJlbnRXZWF0aGVyLFxuICBkaXNwbGF5VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIsXG59IGZyb20gXCIuL0RPTS1jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24gPSBcImF1dG86aXBcIikge1xuICBjb25zdCBBUElfS0VZID0gXCI0YmU2M2U4MjJkYjQ0YThkODFjNjQ0MzIyMzI2MDhcIjtcbiAgLy8gY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBUElfS0VZfSZxPWthbHV0YXJhYDtcbiAgY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY2F0aW9ufSZkYXlzPTJgO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGFsZXJ0KGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZGlzcGxheUxvY2F0aW9uKGdldExvY2F0aW9uKGRhdGEpKTtcbiAgICBkaXNwbGF5Q3VycmVudFdlYXRoZXIoZ2V0Q3VycmVudFdlYXRoZXIoZGF0YSkpO1xuICAgIGRpc3BsYXlUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihnZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihkYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uKGRhdGEpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBgJHtkYXRhLmxvY2F0aW9uLm5hbWV9ICR7ZGF0YS5sb2NhdGlvbi5yZWdpb259ICR7ZGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihkYXRhKSB7XG4gIGNvbnN0IGRhdGVBbmRUaW1lID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgY29uc3QgaHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlQ2Vsc2l1cyA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBlcmF0dXJlRmFocmVuaGVpdCA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkYXRhLmN1cnJlbnQud2luZF9kaXI7XG4gIGNvbnN0IHdpbmRTcGVlZEtQSCA9IGRhdGEuY3VycmVudC53aW5kX2twaDtcbiAgY29uc3Qgd2luZFNwZWVkTVBIID0gZGF0YS5jdXJyZW50LndpbmRfbXBoO1xuICBjb25zdCBsYXN0VXBkYXRlZCA9IGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQ7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRlQW5kVGltZSxcbiAgICBjb25kaXRpb24sXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZUNlbHNpdXMsXG4gICAgdGVtcGVyYXR1cmVGYWhyZW5oZWl0LFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkS1BILFxuICAgIHdpbmRTcGVlZE1QSCxcbiAgICBsYXN0VXBkYXRlZCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YSkge1xuICBjb25zdCBob3VyID0gbmV3IERhdGUoZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpLmdldEhvdXJzKCk7XG5cbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0udGltZTtcbiAgY29uc3QgY29uZGl0aW9uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBjb25kaXRpb25JY29uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmNvbmRpdGlvbi5pY29uO1xuICBjb25zdCBodW1pZGl0eSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS5odW1pZGl0eTtcbiAgY29uc3QgdGVtcGVyYXR1cmVDZWxzaXVzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLnRlbXBfYztcbiAgY29uc3QgdGVtcGVyYXR1cmVGYWhyZW5oZWl0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLnRlbXBfZjtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS53aW5kX2RpcjtcbiAgY29uc3Qgd2luZFNwZWVkS1BIID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLndpbmRfa3BoO1xuICBjb25zdCB3aW5kU3BlZWRNUEggPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0ud2luZF9tcGg7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRlQW5kVGltZSxcbiAgICBjb25kaXRpb24sXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZUNlbHNpdXMsXG4gICAgdGVtcGVyYXR1cmVGYWhyZW5oZWl0LFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkS1BILFxuICAgIHdpbmRTcGVlZE1QSCxcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gXCIuL3dlYXRoZXItZGF0YVwiO1xuaW1wb3J0IHNlYXJjaExvY2F0aW9uIGZyb20gXCIuL0RPTS1jb250cm9sbGVyXCI7XG5cbmdldFdlYXRoZXJEYXRhKCk7XG5zZWFyY2hMb2NhdGlvbigpO1xuIl0sIm5hbWVzIjpbImZldGNoV2VhdGhlckRhdGEiLCJzZWFyY2hMb2NhdGlvbklucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoTG9jYXRpb25CdXR0b24iLCJsb2NhdGlvbiIsImN1cnJlbnRXZWF0aGVySW5mbyIsInRvbW9ycm93VGhpc0hvdXJXZWF0aGVyIiwic2VhcmNoTG9jYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJkaXNwbGF5TG9jYXRpb24iLCJ0ZXh0Q29udGVudCIsImRpc3BsYXlDdXJyZW50V2VhdGhlciIsImRhdGEiLCJyZXBsYWNlQ2hpbGRyZW4iLCJjb25kaXRpb25JY29uIiwiY3JlYXRlRWxlbWVudCIsImNvbmRpdGlvbiIsImRhdGVBbmRUaW1lIiwiaHVtaWRpdHkiLCJ0ZW1wZXJhdHVyZSIsIndpbmREaXJlY3Rpb24iLCJ3aW5kU3BlZWQiLCJsYXN0VXBkYXRlZCIsInNyYyIsInRlbXBlcmF0dXJlQ2Vsc2l1cyIsIndpbmRTcGVlZE1QSCIsImFwcGVuZCIsImRpc3BsYXlUb21vcnJvd1RoaXNIb3VyV2VhdGhlciIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIkFQSV9LRVkiLCJVUkwiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImpzb24iLCJvayIsImFsZXJ0IiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0TG9jYXRpb24iLCJnZXRDdXJyZW50V2VhdGhlciIsImdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJyZWdpb24iLCJjb3VudHJ5IiwibG9jYWx0aW1lIiwiY3VycmVudCIsInRleHQiLCJpY29uIiwidGVtcF9jIiwidGVtcGVyYXR1cmVGYWhyZW5oZWl0IiwidGVtcF9mIiwid2luZF9kaXIiLCJ3aW5kU3BlZWRLUEgiLCJ3aW5kX2twaCIsIndpbmRfbXBoIiwibGFzdF91cGRhdGVkIiwiaG91ciIsIkRhdGUiLCJnZXRIb3VycyIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJ0aW1lIiwiZ2V0V2VhdGhlckRhdGEiXSwic291cmNlUm9vdCI6IiJ9