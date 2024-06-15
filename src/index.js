import "./estilos.css";

console.log("Archivo index.js en ejecución...");

// Importar las imágenes para que Webpack las procese
import "./imgs/equipo1.jpg";
import "./imgs/equipo2.jpg";
import "./imgs/equipo3.jpg";
import "./imgs/carrusel1.jpg";
import "./imgs/carrusel2.jpg";
import "./imgs/carrusel3.jpg";

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
