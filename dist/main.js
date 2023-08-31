(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nheader {\n  background-color: #6b7280;\n  padding: 15px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n\nheader > h1 {\n  font-size: 2.5rem;\n  color: #e5e7eb;\n}\n\n.search-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.search-box > input {\n  font-size: 1rem;\n  background-color: #e5e7eb;\n  padding: 6px;\n  border: none;\n  border-radius: 5px;\n}\n\n.search-box > button {\n  font-size: 1rem;\n  font-weight: bold;\n  color: #1f2937;\n  background-color: #e5e7eb;\n  padding: 6px 8px;\n  border: none;\n  border-radius: 5px;\n}\n\n.settings-container {\n  font-size: 1rem;\n  color: #1f2937;\n  padding: 5px 10px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.settings-container select {\n  font-size: 0.9rem;\n  padding: 2px 5px;\n  border-radius: 5px;\n  outline: none;\n}\n\n.location {\n  font-size: 1.8rem;\n  color: #1f2937;\n  text-align: center;\n  margin: 20px 0 30px;\n}\n\n.weather-data-container {\n  color: #1f2937;\n  padding: 10px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 100px;\n}\n\n.weather-data-container > div > h3 {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.weather-data-container ul {\n  font-size: 1.2rem;\n  font-weight: 500;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.weather-data-container ul > img {\n  width: 75px;\n  height: auto;\n  margin: 0 auto;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;AACX;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB",sourcesContent:["*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nheader {\n  background-color: #6b7280;\n  padding: 15px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n\nheader > h1 {\n  font-size: 2.5rem;\n  color: #e5e7eb;\n}\n\n.search-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.search-box > input {\n  font-size: 1rem;\n  background-color: #e5e7eb;\n  padding: 6px;\n  border: none;\n  border-radius: 5px;\n}\n\n.search-box > button {\n  font-size: 1rem;\n  font-weight: bold;\n  color: #1f2937;\n  background-color: #e5e7eb;\n  padding: 6px 8px;\n  border: none;\n  border-radius: 5px;\n}\n\n.settings-container {\n  font-size: 1rem;\n  color: #1f2937;\n  padding: 5px 10px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.settings-container select {\n  font-size: 0.9rem;\n  padding: 2px 5px;\n  border-radius: 5px;\n  outline: none;\n}\n\n.location {\n  font-size: 1.8rem;\n  color: #1f2937;\n  text-align: center;\n  margin: 20px 0 30px;\n}\n\n.weather-data-container {\n  color: #1f2937;\n  padding: 10px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 100px;\n}\n\n.weather-data-container > div > h3 {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.weather-data-container ul {\n  font-size: 1.2rem;\n  font-weight: 500;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.weather-data-container ul > img {\n  width: 75px;\n  height: auto;\n  margin: 0 auto;\n}\n"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var A=0;A<n.length;A++){var s=[].concat(n[A]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],A=r.base?d[0]+r.base:d[0],s=a[A]||0,u="".concat(A," ").concat(s);a[A]=s+1;var l=t(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)e[l].references++,e[l].updater(p);else{var f=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),A=0;A<a.length;A++){var s=t(a[A]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=document.querySelector("[data-search-location-input]"),e=document.querySelector("[data-search-location-button]"),r=document.querySelector("[data-location]"),o=document.querySelector("[data-current-weather] > ul"),a=document.querySelector("[data-tomorrow-this-hour-weather] > ul"),i=document.querySelector("[data-temperature-select-input]"),c=document.querySelector("[data-wind-speed-select-input]");function d(n){o.replaceChildren();const e=document.createElement("img"),t=document.createElement("li"),r=document.createElement("li"),a=document.createElement("li"),i=document.createElement("li"),c=document.createElement("li"),d=document.createElement("li"),A=document.createElement("li");e.src=`https:${n.conditionIcon}`,t.textContent=`Condition: ${n.condition}`,r.textContent=`Date & Time: ${n.dateAndTime}`,a.textContent=`Humidity: ${n.humidity}`,i.textContent=s(n),c.textContent=`Wind Direction: ${n.windDirection}`,d.textContent=u(n),A.textContent=`Last Updated: ${n.lastUpdated}`,o.append(e,t,r,a,i,c,d,A)}function A(n){a.replaceChildren();const e=document.createElement("img"),t=document.createElement("li"),r=document.createElement("li"),o=document.createElement("li"),i=document.createElement("li"),c=document.createElement("li"),d=document.createElement("li");e.src=`https:${n.conditionIcon}`,t.textContent=`Condition: ${n.condition}`,r.textContent=`Date & Time: ${n.dateAndTime}`,o.textContent=`Humidity: ${n.humidity}`,i.textContent=s(n),c.textContent=`Wind Direction: ${n.windDirection}`,d.textContent=u(n),a.append(e,t,r,o,i,c,d)}function s(n){let e;return"fahrenheit"===i.value?e=`Temperature: ${n.temperatureFahrenheit}℉`:"celsius"===i.value&&(e=`Temperature: ${n.temperatureCelsius}℃`),e}function u(n){let e;return"kph"===c.value?e=`Wind Speed: ${n.windSpeedKPH}kph`:"mph"===c.value&&(e=`Wind Speed: ${n.windSpeedMPH}mph`),e}async function l(){const n=`https://api.weatherapi.com/v1/forecast.json?key=4be63e822db44a8d81c64432232608&q=${arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto:ip"}&days=2`;try{const t=await fetch(n,{mode:"cors"}),o=await t.json();if(!t.ok)throw new Error(o.error.message);e=function(n){return`${n.location.name} ${n.location.region} ${n.location.country}`}(o),r.textContent=e,d(p(o)),A(f(o)),function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];i.addEventListener("change",(()=>{d(e[0]),A(e[1])}))}(p(o),f(o)),function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];c.addEventListener("change",(()=>{d(e[0]),A(e[1])}))}(p(o),f(o))}catch(n){alert(n)}var e}function p(n){return{dateAndTime:n.location.localtime,condition:n.current.condition.text,conditionIcon:n.current.condition.icon,humidity:n.current.humidity,temperatureCelsius:n.current.temp_c,temperatureFahrenheit:n.current.temp_f,windDirection:n.current.wind_dir,windSpeedKPH:n.current.wind_kph,windSpeedMPH:n.current.wind_mph,lastUpdated:n.current.last_updated}}function f(n){const e=new Date(n.location.localtime).getHours();return{dateAndTime:n.forecast.forecastday[1].hour[e].time,condition:n.forecast.forecastday[1].hour[e].condition.text,conditionIcon:n.forecast.forecastday[1].hour[e].condition.icon,humidity:n.forecast.forecastday[1].hour[e].humidity,temperatureCelsius:n.forecast.forecastday[1].hour[e].temp_c,temperatureFahrenheit:n.forecast.forecastday[1].hour[e].temp_f,windDirection:n.forecast.forecastday[1].hour[e].wind_dir,windSpeedKPH:n.forecast.forecastday[1].hour[e].wind_kph,windSpeedMPH:n.forecast.forecastday[1].hour[e].wind_mph}}var m=t(379),h=t.n(m),E=t(795),C=t.n(E),x=t(569),g=t.n(x),y=t(565),B=t.n(y),b=t(216),v=t.n(b),w=t(589),S=t.n(w),k=t(426),j={};j.styleTagTransform=S(),j.setAttributes=B(),j.insert=g().bind(null,"head"),j.domAPI=C(),j.insertStyleElement=v(),h()(k.Z,j),k.Z&&k.Z.locals&&k.Z.locals,l(),e.addEventListener("click",(()=>{n.value?l(n.value):alert("Please enter your location")}))})()})();
//# sourceMappingURL=main.js.map