// ==UserScript==
// @name        Suppo
// @namespace   Suppo
// @description Script to assist Yotpo support in daily tasks
// @include     *
// @version     0.0.2
// @grant       none
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//code.jquery.com/jquery-2.2.0.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function main() {
	console.log("version 0.0.2");
}

addJQuery(main);
