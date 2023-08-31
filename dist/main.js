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

.search-box > input {
  font-size: 1rem;
  background-color: #e5e7eb;
  padding: 6px;
  border: none;
  border-radius: 5px;
  outline-width: 1px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB","sourcesContent":["*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nheader {\n  background-color: #6b7280;\n  padding: 15px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n\nheader > h1 {\n  font-size: 2.5rem;\n  color: #e5e7eb;\n}\n\n.search-box > input {\n  font-size: 1rem;\n  background-color: #e5e7eb;\n  padding: 6px;\n  border: none;\n  border-radius: 5px;\n  outline-width: 1px;\n}\n\n.search-box > button {\n  font-size: 1rem;\n  font-weight: bold;\n  color: #1f2937;\n  background-color: #e5e7eb;\n  padding: 6px 8px;\n  border: none;\n  border-radius: 5px;\n}\n\n.settings-container {\n  font-size: 1rem;\n  color: #1f2937;\n  padding: 5px 10px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.settings-container select {\n  font-size: 0.9rem;\n  padding: 2px 5px;\n  border-radius: 5px;\n  outline: none;\n}\n\n.location {\n  font-size: 1.8rem;\n  color: #1f2937;\n  text-align: center;\n  margin: 20px 0 30px;\n}\n\n.weather-data-container {\n  color: #1f2937;\n  padding: 10px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 100px;\n}\n\n.weather-data-container > div > h3 {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.weather-data-container ul {\n  font-size: 1.2rem;\n  font-weight: 500;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.weather-data-container ul > img {\n  width: 75px;\n  height: auto;\n  margin: 0 auto;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNFO0FBQ3pCO0FBRXJCb0MseURBQWMsQ0FBQyxDQUFDO0FBQ2hCdEUsMkRBQWMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoV2VhdGhlckRhdGEgZnJvbSBcIi4vd2VhdGhlci1kYXRhXCI7XG5cbmNvbnN0IHNlYXJjaExvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLXNlYXJjaC1sb2NhdGlvbi1pbnB1dF1cIixcbik7XG5jb25zdCBzZWFyY2hMb2NhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtc2VhcmNoLWxvY2F0aW9uLWJ1dHRvbl1cIixcbik7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1sb2NhdGlvbl1cIik7XG5jb25zdCBjdXJyZW50V2VhdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLWN1cnJlbnQtd2VhdGhlcl0gPiB1bFwiLFxuKTtcbmNvbnN0IHRvbW9ycm93VGhpc0hvdXJXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS10b21vcnJvdy10aGlzLWhvdXItd2VhdGhlcl0gPiB1bFwiLFxuKTtcbmNvbnN0IHRlbXBlcmF0dXJlU2VsZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLXRlbXBlcmF0dXJlLXNlbGVjdC1pbnB1dF1cIixcbik7XG5jb25zdCB3aW5kU3BlZWRTZWxlY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtd2luZC1zcGVlZC1zZWxlY3QtaW5wdXRdXCIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2hMb2NhdGlvbigpIHtcbiAgc2VhcmNoTG9jYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBmZXRjaFdlYXRoZXJEYXRhKHNlYXJjaExvY2F0aW9uSW5wdXQudmFsdWUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlMb2NhdGlvbih2YWx1ZSkge1xuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRXZWF0aGVyKGRhdGEpIHtcbiAgY3VycmVudFdlYXRoZXJJbmZvLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGRhdGVBbmRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbGFzdFVwZGF0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgY29uZGl0aW9uSWNvbi5zcmMgPSBgaHR0cHM6JHtkYXRhLmNvbmRpdGlvbkljb259YDtcbiAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gYENvbmRpdGlvbjogJHtkYXRhLmNvbmRpdGlvbn1gO1xuICBkYXRlQW5kVGltZS50ZXh0Q29udGVudCA9IGBEYXRlICYgVGltZTogJHtkYXRhLmRhdGVBbmRUaW1lfWA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGEuaHVtaWRpdHl9YDtcbiAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBzaG93VGVtcGVyYXR1cmUoZGF0YSk7XG4gIHdpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSBgV2luZCBEaXJlY3Rpb246ICR7ZGF0YS53aW5kRGlyZWN0aW9ufWA7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IHNob3dXaW5kU3BlZWQoZGF0YSk7XG4gIGxhc3RVcGRhdGVkLnRleHRDb250ZW50ID0gYExhc3QgVXBkYXRlZDogJHtkYXRhLmxhc3RVcGRhdGVkfWA7XG5cbiAgY3VycmVudFdlYXRoZXJJbmZvLmFwcGVuZChcbiAgICBjb25kaXRpb25JY29uLFxuICAgIGNvbmRpdGlvbixcbiAgICBkYXRlQW5kVGltZSxcbiAgICBodW1pZGl0eSxcbiAgICB0ZW1wZXJhdHVyZSxcbiAgICB3aW5kRGlyZWN0aW9uLFxuICAgIHdpbmRTcGVlZCxcbiAgICBsYXN0VXBkYXRlZCxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihkYXRhKSB7XG4gIHRvbW9ycm93VGhpc0hvdXJXZWF0aGVyLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGRhdGVBbmRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBjb25kaXRpb25JY29uLnNyYyA9IGBodHRwczoke2RhdGEuY29uZGl0aW9uSWNvbn1gO1xuICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBgQ29uZGl0aW9uOiAke2RhdGEuY29uZGl0aW9ufWA7XG4gIGRhdGVBbmRUaW1lLnRleHRDb250ZW50ID0gYERhdGUgJiBUaW1lOiAke2RhdGEuZGF0ZUFuZFRpbWV9YDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5odW1pZGl0eX1gO1xuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHNob3dUZW1wZXJhdHVyZShkYXRhKTtcbiAgd2luZERpcmVjdGlvbi50ZXh0Q29udGVudCA9IGBXaW5kIERpcmVjdGlvbjogJHtkYXRhLndpbmREaXJlY3Rpb259YDtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gc2hvd1dpbmRTcGVlZChkYXRhKTtcblxuICB0b21vcnJvd1RoaXNIb3VyV2VhdGhlci5hcHBlbmQoXG4gICAgY29uZGl0aW9uSWNvbixcbiAgICBjb25kaXRpb24sXG4gICAgZGF0ZUFuZFRpbWUsXG4gICAgaHVtaWRpdHksXG4gICAgdGVtcGVyYXR1cmUsXG4gICAgd2luZERpcmVjdGlvbixcbiAgICB3aW5kU3BlZWQsXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUZW1wZXJhdHVyZSguLi5kYXRhKSB7XG4gIHRlbXBlcmF0dXJlU2VsZWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgZGlzcGxheUN1cnJlbnRXZWF0aGVyKGRhdGFbMF0pO1xuICAgIGRpc3BsYXlUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihkYXRhWzFdKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dUZW1wZXJhdHVyZShkYXRhKSB7XG4gIGxldCB2YWx1ZTtcblxuICBpZiAodGVtcGVyYXR1cmVTZWxlY3RJbnB1dC52YWx1ZSA9PT0gXCJmYWhyZW5oZWl0XCIpIHtcbiAgICB2YWx1ZSA9IGBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXBlcmF0dXJlRmFocmVuaGVpdH1cXHUyMTA5YDtcbiAgfSBlbHNlIGlmICh0ZW1wZXJhdHVyZVNlbGVjdElucHV0LnZhbHVlID09PSBcImNlbHNpdXNcIikge1xuICAgIHZhbHVlID0gYFRlbXBlcmF0dXJlOiAke2RhdGEudGVtcGVyYXR1cmVDZWxzaXVzfVxcdTIxMDNgO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlV2luZFNwZWVkKC4uLmRhdGEpIHtcbiAgd2luZFNwZWVkU2VsZWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgZGlzcGxheUN1cnJlbnRXZWF0aGVyKGRhdGFbMF0pO1xuICAgIGRpc3BsYXlUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihkYXRhWzFdKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dXaW5kU3BlZWQoZGF0YSkge1xuICBsZXQgdmFsdWU7XG5cbiAgaWYgKHdpbmRTcGVlZFNlbGVjdElucHV0LnZhbHVlID09PSBcImtwaFwiKSB7XG4gICAgdmFsdWUgPSBgV2luZCBTcGVlZDogJHtkYXRhLndpbmRTcGVlZEtQSH1rcGhgO1xuICB9IGVsc2UgaWYgKHdpbmRTcGVlZFNlbGVjdElucHV0LnZhbHVlID09PSBcIm1waFwiKSB7XG4gICAgdmFsdWUgPSBgV2luZCBTcGVlZDogJHtkYXRhLndpbmRTcGVlZE1QSH1tcGhgO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIiwiaW1wb3J0IHtcbiAgZGlzcGxheUxvY2F0aW9uLFxuICBkaXNwbGF5Q3VycmVudFdlYXRoZXIsXG4gIGRpc3BsYXlUb21vcnJvd1RoaXNIb3VyV2VhdGhlcixcbiAgY2hhbmdlVGVtcGVyYXR1cmUsXG4gIGNoYW5nZVdpbmRTcGVlZCxcbn0gZnJvbSBcIi4vRE9NLWNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiA9IFwiYXV0bzppcFwiKSB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcIjRiZTYzZTgyMmRiNDRhOGQ4MWM2NDQzMjIzMjYwOFwiO1xuICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb259JmRheXM9MmA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgYWxlcnQoZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5TG9jYXRpb24oZ2V0TG9jYXRpb24oZGF0YSkpO1xuICAgIGRpc3BsYXlDdXJyZW50V2VhdGhlcihnZXRDdXJyZW50V2VhdGhlcihkYXRhKSk7XG4gICAgZGlzcGxheVRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpKTtcbiAgICBjaGFuZ2VUZW1wZXJhdHVyZShcbiAgICAgIGdldEN1cnJlbnRXZWF0aGVyKGRhdGEpLFxuICAgICAgZ2V0VG9tb3Jyb3dUaGlzSG91cldlYXRoZXIoZGF0YSksXG4gICAgKTtcbiAgICBjaGFuZ2VXaW5kU3BlZWQoZ2V0Q3VycmVudFdlYXRoZXIoZGF0YSksIGdldFRvbW9ycm93VGhpc0hvdXJXZWF0aGVyKGRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oZGF0YSkge1xuICBjb25zdCBsb2NhdGlvbiA9IGAke2RhdGEubG9jYXRpb24ubmFtZX0gJHtkYXRhLmxvY2F0aW9uLnJlZ2lvbn0gJHtkYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcblxuICByZXR1cm4gbG9jYXRpb247XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGRhdGEpIHtcbiAgY29uc3QgZGF0ZUFuZFRpbWUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgY29uc3QgY29uZGl0aW9uID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBjb25kaXRpb25JY29uID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICBjb25zdCBodW1pZGl0eSA9IGRhdGEuY3VycmVudC5odW1pZGl0eTtcbiAgY29uc3QgdGVtcGVyYXR1cmVDZWxzaXVzID0gZGF0YS5jdXJyZW50LnRlbXBfYztcbiAgY29uc3QgdGVtcGVyYXR1cmVGYWhyZW5oZWl0ID0gZGF0YS5jdXJyZW50LnRlbXBfZjtcbiAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRhdGEuY3VycmVudC53aW5kX2RpcjtcbiAgY29uc3Qgd2luZFNwZWVkS1BIID0gZGF0YS5jdXJyZW50LndpbmRfa3BoO1xuICBjb25zdCB3aW5kU3BlZWRNUEggPSBkYXRhLmN1cnJlbnQud2luZF9tcGg7XG4gIGNvbnN0IGxhc3RVcGRhdGVkID0gZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZDtcblxuICByZXR1cm4ge1xuICAgIGRhdGVBbmRUaW1lLFxuICAgIGNvbmRpdGlvbixcbiAgICBjb25kaXRpb25JY29uLFxuICAgIGh1bWlkaXR5LFxuICAgIHRlbXBlcmF0dXJlQ2Vsc2l1cyxcbiAgICB0ZW1wZXJhdHVyZUZhaHJlbmhlaXQsXG4gICAgd2luZERpcmVjdGlvbixcbiAgICB3aW5kU3BlZWRLUEgsXG4gICAgd2luZFNwZWVkTVBILFxuICAgIGxhc3RVcGRhdGVkLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlcihkYXRhKSB7XG4gIGNvbnN0IGhvdXIgPSBuZXcgRGF0ZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSkuZ2V0SG91cnMoKTtcblxuICBjb25zdCBkYXRlQW5kVGltZSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS50aW1lO1xuICBjb25zdCBjb25kaXRpb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0uY29uZGl0aW9uLnRleHQ7XG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0uY29uZGl0aW9uLmljb247XG4gIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLmh1bWlkaXR5O1xuICBjb25zdCB0ZW1wZXJhdHVyZUNlbHNpdXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0udGVtcF9jO1xuICBjb25zdCB0ZW1wZXJhdHVyZUZhaHJlbmhlaXQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0udGVtcF9mO1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2hvdXJdLndpbmRfZGlyO1xuICBjb25zdCB3aW5kU3BlZWRLUEggPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbaG91cl0ud2luZF9rcGg7XG4gIGNvbnN0IHdpbmRTcGVlZE1QSCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91cltob3VyXS53aW5kX21waDtcblxuICByZXR1cm4ge1xuICAgIGRhdGVBbmRUaW1lLFxuICAgIGNvbmRpdGlvbixcbiAgICBjb25kaXRpb25JY29uLFxuICAgIGh1bWlkaXR5LFxuICAgIHRlbXBlcmF0dXJlQ2Vsc2l1cyxcbiAgICB0ZW1wZXJhdHVyZUZhaHJlbmhlaXQsXG4gICAgd2luZERpcmVjdGlvbixcbiAgICB3aW5kU3BlZWRLUEgsXG4gICAgd2luZFNwZWVkTVBILFxuICB9O1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjcyODA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTVweDtcbn1cblxuaGVhZGVyID4gaDEge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6ICNlNWU3ZWI7XG59XG5cbi5zZWFyY2gtYm94ID4gaW5wdXQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmUtd2lkdGg6IDFweDtcbn1cblxuLnNlYXJjaC1ib3ggPiBidXR0b24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzFmMjkzNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zZXR0aW5ncy1jb250YWluZXIge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMWYyOTM3O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uc2V0dGluZ3MtY29udGFpbmVyIHNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogIzFmMjkzNztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMCAzMHB4O1xufVxuXG4ud2VhdGhlci1kYXRhLWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjMWYyOTM3O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwMHB4O1xufVxuXG4ud2VhdGhlci1kYXRhLWNvbnRhaW5lciA+IGRpdiA+IGgzIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlYXRoZXItZGF0YS1jb250YWluZXIgdWwge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi53ZWF0aGVyLWRhdGEtY29udGFpbmVyIHVsID4gaW1nIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjcyODA7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuaGVhZGVyID4gaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogI2U1ZTdlYjtcXG59XFxuXFxuLnNlYXJjaC1ib3ggPiBpbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZS13aWR0aDogMXB4O1xcbn1cXG5cXG4uc2VhcmNoLWJveCA+IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMWYyOTM3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICMxZjI5Mzc7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIgc2VsZWN0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGNvbG9yOiAjMWYyOTM3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4IDAgMzBweDtcXG59XFxuXFxuLndlYXRoZXItZGF0YS1jb250YWluZXIge1xcbiAgY29sb3I6ICMxZjI5Mzc7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi53ZWF0aGVyLWRhdGEtY29udGFpbmVyID4gZGl2ID4gaDMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWRhdGEtY29udGFpbmVyIHVsIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLndlYXRoZXItZGF0YS1jb250YWluZXIgdWwgPiBpbWcge1xcbiAgd2lkdGg6IDc1cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tIFwiLi93ZWF0aGVyLWRhdGFcIjtcbmltcG9ydCBzZWFyY2hMb2NhdGlvbiBmcm9tIFwiLi9ET00tY29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZ2V0V2VhdGhlckRhdGEoKTtcbnNlYXJjaExvY2F0aW9uKCk7XG4iXSwibmFtZXMiOlsiZmV0Y2hXZWF0aGVyRGF0YSIsInNlYXJjaExvY2F0aW9uSW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hMb2NhdGlvbkJ1dHRvbiIsImxvY2F0aW9uIiwiY3VycmVudFdlYXRoZXJJbmZvIiwidG9tb3Jyb3dUaGlzSG91cldlYXRoZXIiLCJ0ZW1wZXJhdHVyZVNlbGVjdElucHV0Iiwid2luZFNwZWVkU2VsZWN0SW5wdXQiLCJzZWFyY2hMb2NhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImRpc3BsYXlMb2NhdGlvbiIsInRleHRDb250ZW50IiwiZGlzcGxheUN1cnJlbnRXZWF0aGVyIiwiZGF0YSIsInJlcGxhY2VDaGlsZHJlbiIsImNvbmRpdGlvbkljb24iLCJjcmVhdGVFbGVtZW50IiwiY29uZGl0aW9uIiwiZGF0ZUFuZFRpbWUiLCJodW1pZGl0eSIsInRlbXBlcmF0dXJlIiwid2luZERpcmVjdGlvbiIsIndpbmRTcGVlZCIsImxhc3RVcGRhdGVkIiwic3JjIiwic2hvd1RlbXBlcmF0dXJlIiwic2hvd1dpbmRTcGVlZCIsImFwcGVuZCIsImRpc3BsYXlUb21vcnJvd1RoaXNIb3VyV2VhdGhlciIsImNoYW5nZVRlbXBlcmF0dXJlIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkFycmF5IiwiX2tleSIsInRlbXBlcmF0dXJlRmFocmVuaGVpdCIsInRlbXBlcmF0dXJlQ2Vsc2l1cyIsImNoYW5nZVdpbmRTcGVlZCIsIl9sZW4yIiwiX2tleTIiLCJ3aW5kU3BlZWRLUEgiLCJ3aW5kU3BlZWRNUEgiLCJ1bmRlZmluZWQiLCJBUElfS0VZIiwiVVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwib2siLCJhbGVydCIsImVycm9yIiwibWVzc2FnZSIsImdldExvY2F0aW9uIiwiZ2V0Q3VycmVudFdlYXRoZXIiLCJnZXRUb21vcnJvd1RoaXNIb3VyV2VhdGhlciIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwicmVnaW9uIiwiY291bnRyeSIsImxvY2FsdGltZSIsImN1cnJlbnQiLCJ0ZXh0IiwiaWNvbiIsInRlbXBfYyIsInRlbXBfZiIsIndpbmRfZGlyIiwid2luZF9rcGgiLCJ3aW5kX21waCIsImxhc3RfdXBkYXRlZCIsImhvdXIiLCJEYXRlIiwiZ2V0SG91cnMiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwidGltZSIsImdldFdlYXRoZXJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==