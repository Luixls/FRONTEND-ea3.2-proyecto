/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/imgs/equipo1.jpg
const equipo1_namespaceObject = __webpack_require__.p + "imgs/equipo1.jpg";
;// CONCATENATED MODULE: ./src/imgs/equipo2.jpg
const equipo2_namespaceObject = __webpack_require__.p + "imgs/equipo2.jpg";
;// CONCATENATED MODULE: ./src/imgs/equipo3.jpg
const equipo3_namespaceObject = __webpack_require__.p + "imgs/equipo3.jpg";
;// CONCATENATED MODULE: ./src/imgs/carrusel1.jpg
const carrusel1_namespaceObject = __webpack_require__.p + "imgs/carrusel1.jpg";
;// CONCATENATED MODULE: ./src/imgs/carrusel2.jpg
const carrusel2_namespaceObject = __webpack_require__.p + "imgs/carrusel2.jpg";
;// CONCATENATED MODULE: ./src/imgs/carrusel3.jpg
const carrusel3_namespaceObject = __webpack_require__.p + "imgs/carrusel3.jpg";
;// CONCATENATED MODULE: ./src/index.js


console.log("Archivo index.js en ejecución...");

// Importar las imágenes para que Webpack las procese







document.addEventListener("DOMContentLoaded", function () {
  let indice = 0;
  const img = document.querySelectorAll(".carrusel-item");
  const totalImgs = img.length;

  function mostrarImg(indice) {
    img.forEach((item, i) => {
      item.classList.remove("active");
      if (i === indice) {
        item.classList.add("active");
      }
    });
  }

  function siguienteImg() {
    indice = (indice + 1) % totalImgs;
    mostrarImg(indice);
  }

  setInterval(siguienteImg, 5000); // Cambiar imagen cada 5 segundos
  mostrarImg(indice);
});

// Animación de scroll
window.addEventListener("scroll", function () {
  const parallaxElemento = document.querySelectorAll(".parallax");
  parallaxElemento.forEach(function (element) {
    let posicionScroll = window.pageYOffset;
    element.style.backgroundPositionY = `${posicionScroll * 0.5}px`;
  });
});

/******/ })()
;