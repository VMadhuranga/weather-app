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
    if (searchLocationInput.value) {
      (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(searchLocationInput.value);
    } else {
      alert("Please enter your location");
    }
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
  lastUpdated.textContent = `Last Updated: ${data.lastUpdated}`;
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
  let value;
  if (temperatureSelectInput.value === "fahrenheit") {
    value = `Temperature: ${data.temperatureFahrenheit}\u2109`;
  } else if (temperatureSelectInput.value === "celsius") {
    value = `Temperature: ${data.temperatureCelsius}\u2103`;
  }
  return value;
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
  let value;
  if (windSpeedSelectInput.value === "kph") {
    value = `Wind Speed: ${data.windSpeedKPH}kph`;
  } else if (windSpeedSelectInput.value === "mph") {
    value = `Wind Speed: ${data.windSpeedMPH}mph`;
  }
  return value;
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
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=2`;
  const response = await fetch(URL, {
    mode: "cors"
  });
  const data = await response.json();
  if (response.ok) {
    try {
      (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.displayLocation)(getLocation(data));
      (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.displayCurrentWeather)(getCurrentWeather(data));
      (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.displayTomorrowThisHourWeather)(getTomorrowThisHourWeather(data));
      (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.changeTemperature)(getCurrentWeather(data), getTomorrowThisHourWeather(data));
      (0,_DOM_controller__WEBPACK_IMPORTED_MODULE_0__.changeWindSpeed)(getCurrentWeather(data), getTomorrowThisHourWeather(data));
    } catch (error) {
      console.log(error);
    }
  } else {
    alert(data.error.message);
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

header {
  background-color: #6b7280;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

header > h1 {
  font-size: 2.5rem;
  color: #e5e7eb;
}

.search-box {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.search-box > input {
  font-size: 1rem;
  background-color: #e5e7eb;
  padding: 6px;
  border: none;
  border-radius: 5px;
}

.search-box > button {
  font-size: 1rem;
  font-weight: bold;
  color: #1f2937;
  background-color: #e5e7eb;
  padding: 6px 8px;
  border: none;
  border-radius: 5px;
}

.settings-container {
  font-size: 1rem;
  color: #1f2937;
  padding: 5px 10px;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.settings-container select {
  font-size: 0.9rem;
  padding: 2px 5px;
  border-radius: 5px;
  outline: none;
}

.location {
  font-size: 1.8rem;
  color: #1f2937;
  text-align: center;
  margin: 20px 0 30px;
}

.weather-data-container {
  color: #1f2937;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
}

.weather-data-container > div > h3 {
  font-size: 1.5rem;
  text-align: center;
}

.weather-data-container ul {
  font-size: 1.2rem;
  font-weight: 500;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.weather-data-container ul > img {
  width: 75px;
  height: auto;
  margin: 0 auto;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;AACX;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB","sourcesContent":["*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nheader {\n  background-color: #6b7280;\n  padding: 15px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n\nheader > h1 {\n  font-size: 2.5rem;\n  color: #e5e7eb;\n}\n\n.search-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.search-box > input {\n  font-size: 1rem;\n  background-color: #e5e7eb;\n  padding: 6px;\n  border: none;\n  border-radius: 5px;\n}\n\n.search-box > button {\n  font-size: 1rem;\n  font-weight: bold;\n  color: #1f2937;\n  background-color: #e5e7eb;\n  padding: 6px 8px;\n  border: none;\n  border-radius: 5px;\n}\n\n.settings-container {\n  font-size: 1rem;\n  color: #1f2937;\n  padding: 5px 10px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.settings-container select {\n  font-size: 0.9rem;\n  padding: 2px 5px;\n  border-radius: 5px;\n  outline: none;\n}\n\n.location {\n  font-size: 1.8rem;\n  color: #1f2937;\n  text-align: center;\n  margin: 20px 0 30px;\n}\n\n.weather-data-container {\n  color: #1f2937;\n  padding: 10px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 100px;\n}\n\n.weather-data-container > div > h3 {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.weather-data-container ul {\n  font-size: 1.2rem;\n  font-weight: 500;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.weather-data-container ul > img {\n  width: 75px;\n  height: auto;\n  margin: 0 auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_DOM_controller__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxtQkFBbUIsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQ2hELDhCQUNGLENBQUM7QUFDRCxNQUFNQyxvQkFBb0IsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQ2pELCtCQUNGLENBQUM7QUFDRCxNQUFNRSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQzFELE1BQU1HLGtCQUFrQixHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FDL0MsNkJBQ0YsQ0FBQztBQUNELE1BQU1JLHVCQUF1QixHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FDcEQsd0NBQ0YsQ0FBQztBQUNELE1BQU1LLHNCQUFzQixHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FDbkQsaUNBQ0YsQ0FBQztBQUNELE1BQU1NLG9CQUFvQixHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FDakQsZ0NBQ0YsQ0FBQztBQUVjLFNBQVNPLGNBQWNBLENBQUEsRUFBRztFQUN2Q04sb0JBQW9CLENBQUNPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQ25ELElBQUlWLG1CQUFtQixDQUFDVyxLQUFLLEVBQUU7TUFDN0JaLHlEQUFnQixDQUFDQyxtQkFBbUIsQ0FBQ1csS0FBSyxDQUFDO0lBQzdDLENBQUMsTUFBTTtNQUNMQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7SUFDckM7RUFDRixDQUFDLENBQUM7QUFDSjtBQUVPLFNBQVNDLGVBQWVBLENBQUNGLEtBQUssRUFBRTtFQUNyQ1AsUUFBUSxDQUFDVSxXQUFXLEdBQUdILEtBQUs7QUFDOUI7QUFFTyxTQUFTSSxxQkFBcUJBLENBQUNDLElBQUksRUFBRTtFQUMxQ1gsa0JBQWtCLENBQUNZLGVBQWUsQ0FBQyxDQUFDO0VBRXBDLE1BQU1DLGFBQWEsR0FBR2pCLFFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbkQsTUFBTUMsU0FBUyxHQUFHbkIsUUFBUSxDQUFDa0IsYUFBYSxDQUFDLElBQUksQ0FBQztFQUM5QyxNQUFNRSxXQUFXLEdBQUdwQixRQUFRLENBQUNrQixhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ2hELE1BQU1HLFFBQVEsR0FBR3JCLFFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDN0MsTUFBTUksV0FBVyxHQUFHdEIsUUFBUSxDQUFDa0IsYUFBYSxDQUFDLElBQUksQ0FBQztFQUNoRCxNQUFNSyxhQUFhLEdBQUd2QixRQUFRLENBQUNrQixhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ2xELE1BQU1NLFNBQVMsR0FBR3hCLFFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDOUMsTUFBTU8sV0FBVyxHQUFHekIsUUFBUSxDQUFDa0IsYUFBYSxDQUFDLElBQUksQ0FBQztFQUVoREQsYUFBYSxDQUFDUyxHQUFHLEdBQUksU0FBUVgsSUFBSSxDQUFDRSxhQUFjLEVBQUM7RUFDakRFLFNBQVMsQ0FBQ04sV0FBVyxHQUFJLGNBQWFFLElBQUksQ0FBQ0ksU0FBVSxFQUFDO0VBQ3REQyxXQUFXLENBQUNQLFdBQVcsR0FBSSxnQkFBZUUsSUFBSSxDQUFDSyxXQUFZLEVBQUM7RUFDNURDLFFBQVEsQ0FBQ1IsV0FBVyxHQUFJLGFBQVlFLElBQUksQ0FBQ00sUUFBUyxFQUFDO0VBQ25EQyxXQUFXLENBQUNULFdBQVcsR0FBR2MsZUFBZSxDQUFDWixJQUFJLENBQUM7RUFDL0NRLGFBQWEsQ0FBQ1YsV0FBVyxHQUFJLG1CQUFrQkUsSUFBSSxDQUFDUSxhQUFjLEVBQUM7RUFDbkVDLFNBQVMsQ0FBQ1gsV0FBVyxHQUFHZSxhQUFhLENBQUNiLElBQUksQ0FBQztFQUMzQ1UsV0FBVyxDQUFDWixXQUFXLEdBQUksaUJBQWdCRSxJQUFJLENBQUNVLFdBQVksRUFBQztFQUU3RHJCLGtCQUFrQixDQUFDeUIsTUFBTSxDQUN2QlosYUFBYSxFQUNiRSxTQUFTLEVBQ1RDLFdBQVcsRUFDWEMsUUFBUSxFQUNSQyxXQUFXLEVBQ1hDLGFBQWEsRUFDYkMsU0FBUyxFQUNUQyxXQUNGLENBQUM7QUFDSDtBQUVPLFNBQVNLLDhCQUE4QkEsQ0FBQ2YsSUFBSSxFQUFFO0VBQ25EVix1QkFBdUIsQ0FBQ1csZUFBZSxDQUFDLENBQUM7RUFFekMsTUFBTUMsYUFBYSxHQUFHakIsUUFBUSxDQUFDa0IsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNuRCxNQUFNQyxTQUFTLEdBQUduQixRQUFRLENBQUNrQixhQUFhLENBQUMsSUFBSSxDQUFDO0VBQzlDLE1BQU1FLFdBQVcsR0FBR3BCLFFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDaEQsTUFBTUcsUUFBUSxHQUFHckIsUUFBUSxDQUFDa0IsYUFBYSxDQUFDLElBQUksQ0FBQztFQUM3QyxNQUFNSSxXQUFXLEdBQUd0QixRQUFRLENBQUNrQixhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ2hELE1BQU1LLGFBQWEsR0FBR3ZCLFFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDbEQsTUFBTU0sU0FBUyxHQUFHeEIsUUFBUSxDQUFDa0IsYUFBYSxDQUFDLElBQUksQ0FBQztFQUU5Q0QsYUFBYSxDQUFDUyxHQUFHLEdBQUksU0FBUVgsSUFBSSxDQUFDRSxhQUFjLEVBQUM7RUFDakRFLFNBQVMsQ0FBQ04sV0FBVyxHQUFJLGNBQWFFLElBQUksQ0FBQ0ksU0FBVSxFQUFDO0VBQ3REQyxXQUFXLENBQUNQLFdBQVcsR0FBSSxnQkFBZUUsSUFBSSxDQUFDSyxXQUFZLEVBQUM7RUFDNURDLFFBQVEsQ0FBQ1IsV0FBVyxHQUFJLGFBQVlFLElBQUksQ0FBQ00sUUFBUyxFQUFDO0VBQ25EQyxXQUFXLENBQUNULFdBQVcsR0FBR2MsZUFBZSxDQUFDWixJQUFJLENBQUM7RUFDL0NRLGFBQWEsQ0FBQ1YsV0FBVyxHQUFJLG1CQUFrQkUsSUFBSSxDQUFDUSxhQUFjLEVBQUM7RUFDbkVDLFNBQVMsQ0FBQ1gsV0FBVyxHQUFHZSxhQUFhLENBQUNiLElBQUksQ0FBQztFQUUzQ1YsdUJBQXVCLENBQUN3QixNQUFNLENBQzVCWixhQUFhLEVBQ2JFLFNBQVMsRUFDVEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLFdBQVcsRUFDWEMsYUFBYSxFQUNiQyxTQUNGLENBQUM7QUFDSDtBQUVPLFNBQVNPLGlCQUFpQkEsQ0FBQSxFQUFVO0VBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBTm5CLElBQUksT0FBQW9CLEtBQUEsQ0FBQUgsSUFBQSxHQUFBSSxJQUFBLE1BQUFBLElBQUEsR0FBQUosSUFBQSxFQUFBSSxJQUFBO0lBQUpyQixJQUFJLENBQUFxQixJQUFBLElBQUFILFNBQUEsQ0FBQUcsSUFBQTtFQUFBO0VBQ3ZDOUIsc0JBQXNCLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFNO0lBQ3RESyxxQkFBcUIsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCZSw4QkFBOEIsQ0FBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3pDLENBQUMsQ0FBQztBQUNKO0FBRUEsU0FBU1ksZUFBZUEsQ0FBQ1osSUFBSSxFQUFFO0VBQzdCLElBQUlMLEtBQUs7RUFFVCxJQUFJSixzQkFBc0IsQ0FBQ0ksS0FBSyxLQUFLLFlBQVksRUFBRTtJQUNqREEsS0FBSyxHQUFJLGdCQUFlSyxJQUFJLENBQUNzQixxQkFBc0IsUUFBTztFQUM1RCxDQUFDLE1BQU0sSUFBSS9CLHNCQUFzQixDQUFDSSxLQUFLLEtBQUssU0FBUyxFQUFFO0lBQ3JEQSxLQUFLLEdBQUksZ0JBQWVLLElBQUksQ0FBQ3VCLGtCQUFtQixRQUFPO0VBQ3pEO0VBRUEsT0FBTzVCLEtBQUs7QUFDZDtBQUVPLFNBQVM2QixlQUFlQSxDQUFBLEVBQVU7RUFBQSxTQUFBQyxLQUFBLEdBQUFQLFNBQUEsQ0FBQUMsTUFBQSxFQUFObkIsSUFBSSxPQUFBb0IsS0FBQSxDQUFBSyxLQUFBLEdBQUFDLEtBQUEsTUFBQUEsS0FBQSxHQUFBRCxLQUFBLEVBQUFDLEtBQUE7SUFBSjFCLElBQUksQ0FBQTBCLEtBQUEsSUFBQVIsU0FBQSxDQUFBUSxLQUFBO0VBQUE7RUFDckNsQyxvQkFBb0IsQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU07SUFDcERLLHFCQUFxQixDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUJlLDhCQUE4QixDQUFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDekMsQ0FBQyxDQUFDO0FBQ0o7QUFFQSxTQUFTYSxhQUFhQSxDQUFDYixJQUFJLEVBQUU7RUFDM0IsSUFBSUwsS0FBSztFQUVULElBQUlILG9CQUFvQixDQUFDRyxLQUFLLEtBQUssS0FBSyxFQUFFO0lBQ3hDQSxLQUFLLEdBQUksZUFBY0ssSUFBSSxDQUFDMkIsWUFBYSxLQUFJO0VBQy9DLENBQUMsTUFBTSxJQUFJbkMsb0JBQW9CLENBQUNHLEtBQUssS0FBSyxLQUFLLEVBQUU7SUFDL0NBLEtBQUssR0FBSSxlQUFjSyxJQUFJLENBQUM0QixZQUFhLEtBQUk7RUFDL0M7RUFFQSxPQUFPakMsS0FBSztBQUNkOzs7Ozs7Ozs7Ozs7Ozs7QUNqSTBCO0FBRVgsZUFBZVosZ0JBQWdCQSxDQUFBLEVBQXVCO0VBQUEsSUFBdEJLLFFBQVEsR0FBQThCLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFXLFNBQUEsR0FBQVgsU0FBQSxNQUFHLFNBQVM7RUFDakUsTUFBTVksT0FBTyxHQUFHLGdDQUFnQztFQUNoRCxNQUFNQyxHQUFHLEdBQUksbURBQWtERCxPQUFRLE1BQUsxQyxRQUFTLFNBQVE7RUFFN0YsTUFBTTRDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsRUFBRTtJQUFFRyxJQUFJLEVBQUU7RUFBTyxDQUFDLENBQUM7RUFDbkQsTUFBTWxDLElBQUksR0FBRyxNQUFNZ0MsUUFBUSxDQUFDRyxJQUFJLENBQUMsQ0FBQztFQUVsQyxJQUFJSCxRQUFRLENBQUNJLEVBQUUsRUFBRTtJQUNmLElBQUk7TUFDRnZDLGdFQUFlLENBQUN3QyxXQUFXLENBQUNyQyxJQUFJLENBQUMsQ0FBQztNQUNsQ0Qsc0VBQXFCLENBQUN1QyxpQkFBaUIsQ0FBQ3RDLElBQUksQ0FBQyxDQUFDO01BQzlDZSwrRUFBOEIsQ0FBQ3dCLDBCQUEwQixDQUFDdkMsSUFBSSxDQUFDLENBQUM7TUFDaEVnQixrRUFBaUIsQ0FDZnNCLGlCQUFpQixDQUFDdEMsSUFBSSxDQUFDLEVBQ3ZCdUMsMEJBQTBCLENBQUN2QyxJQUFJLENBQ2pDLENBQUM7TUFDRHdCLGdFQUFlLENBQ2JjLGlCQUFpQixDQUFDdEMsSUFBSSxDQUFDLEVBQ3ZCdUMsMEJBQTBCLENBQUN2QyxJQUFJLENBQ2pDLENBQUM7SUFDSCxDQUFDLENBQUMsT0FBT3dDLEtBQUssRUFBRTtNQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0lBQ3BCO0VBQ0YsQ0FBQyxNQUFNO0lBQ0w1QyxLQUFLLENBQUNJLElBQUksQ0FBQ3dDLEtBQUssQ0FBQ0csT0FBTyxDQUFDO0VBQzNCO0FBQ0Y7QUFFQSxTQUFTTixXQUFXQSxDQUFDckMsSUFBSSxFQUFFO0VBQ3pCLE1BQU1aLFFBQVEsR0FBSSxHQUFFWSxJQUFJLENBQUNaLFFBQVEsQ0FBQ3dELElBQUssSUFBRzVDLElBQUksQ0FBQ1osUUFBUSxDQUFDeUQsTUFBTyxJQUFHN0MsSUFBSSxDQUFDWixRQUFRLENBQUMwRCxPQUFRLEVBQUM7RUFFekYsT0FBTzFELFFBQVE7QUFDakI7QUFFQSxTQUFTa0QsaUJBQWlCQSxDQUFDdEMsSUFBSSxFQUFFO0VBQy9CLE1BQU1LLFdBQVcsR0FBR0wsSUFBSSxDQUFDWixRQUFRLENBQUMyRCxTQUFTO0VBQzNDLE1BQU0zQyxTQUFTLEdBQUdKLElBQUksQ0FBQ2dELE9BQU8sQ0FBQzVDLFNBQVMsQ0FBQzZDLElBQUk7RUFDN0MsTUFBTS9DLGFBQWEsR0FBR0YsSUFBSSxDQUFDZ0QsT0FBTyxDQUFDNUMsU0FBUyxDQUFDOEMsSUFBSTtFQUNqRCxNQUFNNUMsUUFBUSxHQUFHTixJQUFJLENBQUNnRCxPQUFPLENBQUMxQyxRQUFRO0VBQ3RDLE1BQU1pQixrQkFBa0IsR0FBR3ZCLElBQUksQ0FBQ2dELE9BQU8sQ0FBQ0csTUFBTTtFQUM5QyxNQUFNN0IscUJBQXFCLEdBQUd0QixJQUFJLENBQUNnRCxPQUFPLENBQUNJLE1BQU07RUFDakQsTUFBTTVDLGFBQWEsR0FBR1IsSUFBSSxDQUFDZ0QsT0FBTyxDQUFDSyxRQUFRO0VBQzNDLE1BQU0xQixZQUFZLEdBQUczQixJQUFJLENBQUNnRCxPQUFPLENBQUNNLFFBQVE7RUFDMUMsTUFBTTFCLFlBQVksR0FBRzVCLElBQUksQ0FBQ2dELE9BQU8sQ0FBQ08sUUFBUTtFQUMxQyxNQUFNN0MsV0FBVyxHQUFHVixJQUFJLENBQUNnRCxPQUFPLENBQUNRLFlBQVk7RUFFN0MsT0FBTztJQUNMbkQsV0FBVztJQUNYRCxTQUFTO0lBQ1RGLGFBQWE7SUFDYkksUUFBUTtJQUNSaUIsa0JBQWtCO0lBQ2xCRCxxQkFBcUI7SUFDckJkLGFBQWE7SUFDYm1CLFlBQVk7SUFDWkMsWUFBWTtJQUNabEI7RUFDRixDQUFDO0FBQ0g7QUFFQSxTQUFTNkIsMEJBQTBCQSxDQUFDdkMsSUFBSSxFQUFFO0VBQ3hDLE1BQU15RCxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDMUQsSUFBSSxDQUFDWixRQUFRLENBQUMyRCxTQUFTLENBQUMsQ0FBQ1ksUUFBUSxDQUFDLENBQUM7RUFFekQsTUFBTXRELFdBQVcsR0FBR0wsSUFBSSxDQUFDNEQsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNLLElBQUk7RUFDaEUsTUFBTTFELFNBQVMsR0FBR0osSUFBSSxDQUFDNEQsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNyRCxTQUFTLENBQUM2QyxJQUFJO0VBQ3hFLE1BQU0vQyxhQUFhLEdBQUdGLElBQUksQ0FBQzRELFFBQVEsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDSixJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFDckQsU0FBUyxDQUFDOEMsSUFBSTtFQUM1RSxNQUFNNUMsUUFBUSxHQUFHTixJQUFJLENBQUM0RCxRQUFRLENBQUNDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0osSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQ25ELFFBQVE7RUFDakUsTUFBTWlCLGtCQUFrQixHQUFHdkIsSUFBSSxDQUFDNEQsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNOLE1BQU07RUFDekUsTUFBTTdCLHFCQUFxQixHQUFHdEIsSUFBSSxDQUFDNEQsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNMLE1BQU07RUFDNUUsTUFBTTVDLGFBQWEsR0FBR1IsSUFBSSxDQUFDNEQsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNKLFFBQVE7RUFDdEUsTUFBTTFCLFlBQVksR0FBRzNCLElBQUksQ0FBQzRELFFBQVEsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDSixJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFDSCxRQUFRO0VBQ3JFLE1BQU0xQixZQUFZLEdBQUc1QixJQUFJLENBQUM0RCxRQUFRLENBQUNDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0osSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQ0YsUUFBUTtFQUVyRSxPQUFPO0lBQ0xsRCxXQUFXO0lBQ1hELFNBQVM7SUFDVEYsYUFBYTtJQUNiSSxRQUFRO0lBQ1JpQixrQkFBa0I7SUFDbEJELHFCQUFxQjtJQUNyQmQsYUFBYTtJQUNibUIsWUFBWTtJQUNaQztFQUNGLENBQUM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrRkFBa0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLGtEQUFrRCwyQkFBMkIsY0FBYyxlQUFlLEdBQUcsVUFBVSw4Q0FBOEMsR0FBRyxZQUFZLDhCQUE4QixrQkFBa0Isa0JBQWtCLGtDQUFrQyx3QkFBd0Isb0JBQW9CLGNBQWMsR0FBRyxpQkFBaUIsc0JBQXNCLG1CQUFtQixHQUFHLGlCQUFpQixrQkFBa0Isb0JBQW9CLGNBQWMsR0FBRyx5QkFBeUIsb0JBQW9CLDhCQUE4QixpQkFBaUIsaUJBQWlCLHVCQUF1QixHQUFHLDBCQUEwQixvQkFBb0Isc0JBQXNCLG1CQUFtQiw4QkFBOEIscUJBQXFCLGlCQUFpQix1QkFBdUIsR0FBRyx5QkFBeUIsb0JBQW9CLG1CQUFtQixzQkFBc0Isa0JBQWtCLHlCQUF5Qix3QkFBd0Isb0JBQW9CLGNBQWMsR0FBRyxnQ0FBZ0Msc0JBQXNCLHFCQUFxQix1QkFBdUIsa0JBQWtCLEdBQUcsZUFBZSxzQkFBc0IsbUJBQW1CLHVCQUF1Qix3QkFBd0IsR0FBRyw2QkFBNkIsbUJBQW1CLGtCQUFrQix3QkFBd0Isa0JBQWtCLDRCQUE0QixvQkFBb0IsZUFBZSxHQUFHLHdDQUF3QyxzQkFBc0IsdUJBQXVCLEdBQUcsZ0NBQWdDLHNCQUFzQixxQkFBcUIscUJBQXFCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGFBQWEsR0FBRyxzQ0FBc0MsZ0JBQWdCLGlCQUFpQixtQkFBbUIsR0FBRyxxQkFBcUI7QUFDM3BGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDakgxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTRDO0FBQ0U7QUFDekI7QUFFckJtQyx5REFBYyxDQUFDLENBQUM7QUFDaEJ0RSwyREFBYyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2hXZWF0aGVyRGF0YSBmcm9tIFwiLi93ZWF0aGVyLWRhdGFcIjtcblxuY29uc3Qgc2VhcmNoTG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtc2VhcmNoLWxvY2F0aW9uLWlucHV0XVwiLFxuKTtcbmNvbnN0IHNlYXJjaExvY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1zZWFyY2gtbG9jYXRpb24tYnV0dG9uXVwiLFxuKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWxvY2F0aW9uXVwiKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtY3VycmVudC13ZWF0aGVyXSA+IHVsXCIsXG4pO1xuY29uc3QgdG9tb3Jyb3dUaGlzSG91cldlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLXRvbW9ycm93LXRoaXMtaG91ci13ZWF0aGVyXSA+IHVsXCIsXG4pO1xuY29uc3QgdGVtcGVyYXR1cmVTZWxlY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtdGVtcGVyYXR1cmUtc2VsZWN0LWlucHV0XVwiLFxuKTtcbmNvbnN0IHdpbmRTcGVlZFNlbGVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS13aW5kLXNwZWVkLXNlbGVjdC1pbnB1dF1cIixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKCkge1xuICBzZWFyY2hMb2NhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChzZWFyY2hMb2NhdGlvbklucHV0LnZhbHVlKSB7XG4gICAgICBmZXRjaFdlYXRoZXJEYXRhKHNlYXJjaExvY2F0aW9uSW5wdXQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBlbnRlciB5b3VyIGxvY2F0aW9uXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TG9jYXRpb24odmFsdWUpIHtcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50V2VhdGhlcihkYXRhKSB7XG4gIGN1cnJlbnRXZWF0aGVySW5mby5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBjb25zdCBjb25kaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBkYXRlQW5kVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGxhc3RVcGRhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbmRpdGlvbkljb24uc3JjID0gYGh0dHBzOiR7ZGF0YS5jb25kaXRpb25JY29ufWA7XG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGBDb25kaXRpb246ICR7ZGF0YS5jb25kaXRpb259YDtcbiAgZGF0ZUFuZFRpbWUudGV4dENvbnRlbnQgPSBgRGF0ZSAmIFRpbWU6ICR7ZGF0YS5kYXRlQW5kVGltZX1gO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLmh1bWlkaXR5fWA7XG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gc2hvd1RlbXBlcmF0dXJlKGRhdGEpO1xuICB3aW5kRGlyZWN0aW9uLnRleHRDb250ZW50ID0gYFdpbmQgRGlyZWN0aW9uOiAke2RhdGEud2luZERpcmVjdGlvbn1gO1xuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBzaG93V2luZFNwZWVkKGRhdGEpO1xuICBsYXN0VXBkYXRlZC50ZXh0Q29udGVudCA9IGBMYXN0IFVwZGF0ZWQ6ICR7ZGF0YS5sYXN0VXBkYXRlZH1gO1xuXG4gIGN1cnJlbnRXZWF0aGVySW5mby5hcHBlbmQoXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBjb25kaXRpb24sXG4gICAgZGF0ZUFuZFRpbWUsXG4gICAgaHVtaWRpdHksXG4gICAgdGVtcGVyYXR1cmUsXG4gICAgd2luZERpcmVjdGlvbixcbiAgICB3aW5kU3BlZWQsXG4gICAgbGFzdFVwZGF0ZWQsXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YSkge1xuICB0b21vcnJvd1RoaXNIb3VyV2VhdGhlci5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBjb25zdCBjb25kaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBkYXRlQW5kVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgY29uZGl0aW9uSWNvbi5zcmMgPSBgaHR0cHM6JHtkYXRhLmNvbmRpdGlvbkljb259YDtcbiAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gYENvbmRpdGlvbjogJHtkYXRhLmNvbmRpdGlvbn1gO1xuICBkYXRlQW5kVGltZS50ZXh0Q29udGVudCA9IGBEYXRlICYgVGltZTogJHtkYXRhLmRhdGVBbmRUaW1lfWA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGEuaHVtaWRpdHl9YDtcbiAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBzaG93VGVtcGVyYXR1cmUoZGF0YSk7XG4gIHdpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSBgV2luZCBEaXJlY3Rpb246ICR7ZGF0YS53aW5kRGlyZWN0aW9ufWA7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IHNob3dXaW5kU3BlZWQoZGF0YSk7XG5cbiAgdG9tb3Jyb3dUaGlzSG91cldlYXRoZXIuYXBwZW5kKFxuICAgIGNvbmRpdGlvbkljb24sXG4gICAgY29uZGl0aW9uLFxuICAgIGRhdGVBbmRUaW1lLFxuICAgIGh1bWlkaXR5LFxuICAgIHRlbXBlcmF0dXJlLFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGVtcGVyYXR1cmUoLi4uZGF0YSkge1xuICB0ZW1wZXJhdHVyZVNlbGVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlcihkYXRhWzBdKTtcbiAgICBkaXNwbGF5VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YVsxXSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93VGVtcGVyYXR1cmUoZGF0YSkge1xuICBsZXQgdmFsdWU7XG5cbiAgaWYgKHRlbXBlcmF0dXJlU2VsZWN0SW5wdXQudmFsdWUgPT09IFwiZmFocmVuaGVpdFwiKSB7XG4gICAgdmFsdWUgPSBgVGVtcGVyYXR1cmU6ICR7ZGF0YS50ZW1wZXJhdHVyZUZhaHJlbmhlaXR9XFx1MjEwOWA7XG4gIH0gZWxzZSBpZiAodGVtcGVyYXR1cmVTZWxlY3RJbnB1dC52YWx1ZSA9PT0gXCJjZWxzaXVzXCIpIHtcbiAgICB2YWx1ZSA9IGBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXBlcmF0dXJlQ2Vsc2l1c31cXHUyMTAzYDtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVdpbmRTcGVlZCguLi5kYXRhKSB7XG4gIHdpbmRTcGVlZFNlbGVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlcihkYXRhWzBdKTtcbiAgICBkaXNwbGF5VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YVsxXSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93V2luZFNwZWVkKGRhdGEpIHtcbiAgbGV0IHZhbHVlO1xuXG4gIGlmICh3aW5kU3BlZWRTZWxlY3RJbnB1dC52YWx1ZSA9PT0gXCJrcGhcIikge1xuICAgIHZhbHVlID0gYFdpbmQgU3BlZWQ6ICR7ZGF0YS53aW5kU3BlZWRLUEh9a3BoYDtcbiAgfSBlbHNlIGlmICh3aW5kU3BlZWRTZWxlY3RJbnB1dC52YWx1ZSA9PT0gXCJtcGhcIikge1xuICAgIHZhbHVlID0gYFdpbmQgU3BlZWQ6ICR7ZGF0YS53aW5kU3BlZWRNUEh9bXBoYDtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbiIsImltcG9ydCB7XG4gIGRpc3BsYXlMb2NhdGlvbixcbiAgZGlzcGxheUN1cnJlbnRXZWF0aGVyLFxuICBkaXNwbGF5VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIsXG4gIGNoYW5nZVRlbXBlcmF0dXJlLFxuICBjaGFuZ2VXaW5kU3BlZWQsXG59IGZyb20gXCIuL0RPTS1jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24gPSBcImF1dG86aXBcIikge1xuICBjb25zdCBBUElfS0VZID0gXCI0YmU2M2U4MjJkYjQ0YThkODFjNjQ0MzIyMzI2MDhcIjtcbiAgY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY2F0aW9ufSZkYXlzPTJgO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHRyeSB7XG4gICAgICBkaXNwbGF5TG9jYXRpb24oZ2V0TG9jYXRpb24oZGF0YSkpO1xuICAgICAgZGlzcGxheUN1cnJlbnRXZWF0aGVyKGdldEN1cnJlbnRXZWF0aGVyKGRhdGEpKTtcbiAgICAgIGRpc3BsYXlUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihnZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihkYXRhKSk7XG4gICAgICBjaGFuZ2VUZW1wZXJhdHVyZShcbiAgICAgICAgZ2V0Q3VycmVudFdlYXRoZXIoZGF0YSksXG4gICAgICAgIGdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpLFxuICAgICAgKTtcbiAgICAgIGNoYW5nZVdpbmRTcGVlZChcbiAgICAgICAgZ2V0Q3VycmVudFdlYXRoZXIoZGF0YSksXG4gICAgICAgIGdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhbGVydChkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uKGRhdGEpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBgJHtkYXRhLmxvY2F0aW9uLm5hbWV9ICR7ZGF0YS5sb2NhdGlvbi5yZWdpb259ICR7ZGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihkYXRhKSB7XG4gIGNvbnN0IGRhdGVBbmRUaW1lID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgY29uc3QgaHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlQ2Vsc2l1cyA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG4gIGNvbnN0IHRlbXBlcmF0dXJlRmFocmVuaGVpdCA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkYXRhLmN1cnJlbnQud2luZF9kaXI7XG4gIGNvbnN0IHdpbmRTcGVlZEtQSCA9IGRhdGEuY3VycmVudC53aW5kX2twaDtcbiAgY29uc3Qgd2luZFNwZWVkTVBIID0gZGF0YS5jdXJyZW50LndpbmRfbXBoO1xuICBjb25zdCBsYXN0VXBkYXRlZCA9IGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQ7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRlQW5kVGltZSxcbiAgICBjb25kaXRpb24sXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZUNlbHNpdXMsXG4gICAgdGVtcGVyYXR1cmVGYWhyZW5oZWl0LFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkS1BILFxuICAgIHdpbmRTcGVlZE1QSCxcbiAgICBsYXN0VXBkYXRlZCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YSkge1xuICBjb25zdCBob3VyID0gbmV3IERhdGUoZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpLmdldEhvdXJzKCk7XG5cbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0udGltZTtcbiAgY29uc3QgY29uZGl0aW9uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBjb25kaXRpb25JY29uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmNvbmRpdGlvbi5pY29uO1xuICBjb25zdCBodW1pZGl0eSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS5odW1pZGl0eTtcbiAgY29uc3QgdGVtcGVyYXR1cmVDZWxzaXVzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLnRlbXBfYztcbiAgY29uc3QgdGVtcGVyYXR1cmVGYWhyZW5oZWl0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLnRlbXBfZjtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS53aW5kX2RpcjtcbiAgY29uc3Qgd2luZFNwZWVkS1BIID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLndpbmRfa3BoO1xuICBjb25zdCB3aW5kU3BlZWRNUEggPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0ud2luZF9tcGg7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRlQW5kVGltZSxcbiAgICBjb25kaXRpb24sXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZUNlbHNpdXMsXG4gICAgdGVtcGVyYXR1cmVGYWhyZW5oZWl0LFxuICAgIHdpbmREaXJlY3Rpb24sXG4gICAgd2luZFNwZWVkS1BILFxuICAgIHdpbmRTcGVlZE1QSCxcbiAgfTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjcyODA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTVweDtcbn1cblxuaGVhZGVyID4gaDEge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6ICNlNWU3ZWI7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG59XG5cbi5zZWFyY2gtYm94ID4gaW5wdXQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zZWFyY2gtYm94ID4gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMxZjI5Mzc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzFmMjkzNztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbn1cblxuLnNldHRpbmdzLWNvbnRhaW5lciBzZWxlY3Qge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubG9jYXRpb24ge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICMxZjI5Mzc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDAgMzBweDtcbn1cblxuLndlYXRoZXItZGF0YS1jb250YWluZXIge1xuICBjb2xvcjogIzFmMjkzNztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMDBweDtcbn1cblxuLndlYXRoZXItZGF0YS1jb250YWluZXIgPiBkaXYgPiBoMyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53ZWF0aGVyLWRhdGEtY29udGFpbmVyIHVsIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4ud2VhdGhlci1kYXRhLWNvbnRhaW5lciB1bCA+IGltZyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiNzI4MDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5oZWFkZXIgPiBoMSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGNvbG9yOiAjZTVlN2ViO1xcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJveCA+IGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZWFyY2gtYm94ID4gYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMxZjI5Mzc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzFmMjkzNztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciBzZWxlY3Qge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6ICMxZjI5Mzc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggMCAzMHB4O1xcbn1cXG5cXG4ud2VhdGhlci1kYXRhLWNvbnRhaW5lciB7XFxuICBjb2xvcjogIzFmMjkzNztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLndlYXRoZXItZGF0YS1jb250YWluZXIgPiBkaXYgPiBoMyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItZGF0YS1jb250YWluZXIgdWwge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ud2VhdGhlci1kYXRhLWNvbnRhaW5lciB1bCA+IGltZyB7XFxuICB3aWR0aDogNzVweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gXCIuL3dlYXRoZXItZGF0YVwiO1xuaW1wb3J0IHNlYXJjaExvY2F0aW9uIGZyb20gXCIuL0RPTS1jb250cm9sbGVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5nZXRXZWF0aGVyRGF0YSgpO1xuc2VhcmNoTG9jYXRpb24oKTtcbiJdLCJuYW1lcyI6WyJmZXRjaFdlYXRoZXJEYXRhIiwic2VhcmNoTG9jYXRpb25JbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlYXJjaExvY2F0aW9uQnV0dG9uIiwibG9jYXRpb24iLCJjdXJyZW50V2VhdGhlckluZm8iLCJ0b21vcnJvd1RoaXNIb3VyV2VhdGhlciIsInRlbXBlcmF0dXJlU2VsZWN0SW5wdXQiLCJ3aW5kU3BlZWRTZWxlY3RJbnB1dCIsInNlYXJjaExvY2F0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwiYWxlcnQiLCJkaXNwbGF5TG9jYXRpb24iLCJ0ZXh0Q29udGVudCIsImRpc3BsYXlDdXJyZW50V2VhdGhlciIsImRhdGEiLCJyZXBsYWNlQ2hpbGRyZW4iLCJjb25kaXRpb25JY29uIiwiY3JlYXRlRWxlbWVudCIsImNvbmRpdGlvbiIsImRhdGVBbmRUaW1lIiwiaHVtaWRpdHkiLCJ0ZW1wZXJhdHVyZSIsIndpbmREaXJlY3Rpb24iLCJ3aW5kU3BlZWQiLCJsYXN0VXBkYXRlZCIsInNyYyIsInNob3dUZW1wZXJhdHVyZSIsInNob3dXaW5kU3BlZWQiLCJhcHBlbmQiLCJkaXNwbGF5VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIiLCJjaGFuZ2VUZW1wZXJhdHVyZSIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJBcnJheSIsIl9rZXkiLCJ0ZW1wZXJhdHVyZUZhaHJlbmhlaXQiLCJ0ZW1wZXJhdHVyZUNlbHNpdXMiLCJjaGFuZ2VXaW5kU3BlZWQiLCJfbGVuMiIsIl9rZXkyIiwid2luZFNwZWVkS1BIIiwid2luZFNwZWVkTVBIIiwidW5kZWZpbmVkIiwiQVBJX0tFWSIsIlVSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwianNvbiIsIm9rIiwiZ2V0TG9jYXRpb24iLCJnZXRDdXJyZW50V2VhdGhlciIsImdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIm5hbWUiLCJyZWdpb24iLCJjb3VudHJ5IiwibG9jYWx0aW1lIiwiY3VycmVudCIsInRleHQiLCJpY29uIiwidGVtcF9jIiwidGVtcF9mIiwid2luZF9kaXIiLCJ3aW5kX2twaCIsIndpbmRfbXBoIiwibGFzdF91cGRhdGVkIiwiaG91ciIsIkRhdGUiLCJnZXRIb3VycyIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJ0aW1lIiwiZ2V0V2VhdGhlckRhdGEiXSwic291cmNlUm9vdCI6IiJ9