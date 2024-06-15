### Universidad Valle del Momboy
### Ingeniería en Computación; Periodo 2024B
### Frontend I; Unidad III; e-actividad 3.2

# GRUPO ARGICA INC. - Sitio Web Corporativo

Este proyecto trata acerca de un sitio web de presentación para la empresa "GRUPO ARGICA INC." desarrollado utilizando HTML, CSS, JavaScript y Webpack. El objetivo es realizar una página web utilizando el módulo Webpack para compilar y minificar el código. Además, también se utiliza el tipo de diseño web Responsive para que la visualización de la página web sea adaptable a cualquier dispositivo moderno (computadoras de escritorio, celulares, tablets, y más.)

## Contenido

1. [Instalación](#instalación)
2. [Ejecución del Proyecto](#ejecución-del-proyecto)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Diseño HTML y CSS](#diseño-html-y-css)
5. [Lógica del Script](#lógica-del-script)
6. [Configuración de Webpack](#configuración-de-webpack)

## Instalación

Para ejecutar este proyecto, se necesitara tener instalado Node.js y VSCode. Luego, sigue estos pasos:

#### 1. Ejecutar VSCode para clonar el repositorio desde la consola:

```
git clone https://github.com/Luixls/FRONTEND-ea3.2-proyecto
cd FRONTEND-ea3.2-proyecto
```

#### 2. Instalar (o actualiza) las dependencias:

```
npm install
```

## Ejecución del Proyecto

#### 1. Ejecutar la compilación a través de webpack:

```
npm run build
```

#### 2. Abrir el directorio del proyecto:

El directorio se encontrará en tu disco local, carpeta de usuarios (por defecto).
Ejemplo: C:\Usuarios\*tu nombre de usuario\*\FRONTEND-ea3.2-proyecto

#### 3. Abrir el archivo HTML:

Dentro del directorio del proyecto, una vez el código ha sido compilado, la carpeta "dist" es creada y dentro de ella se encuentra el archivo "index.html" que es la página web del proyecto.

## Estructura del Proyecto

```
FRONTEND-ea3.2-proyecto/
│
├── dist/                   # Archivos compilados
├── node_modules/           # Dependencias de Node.js
├── src/                    # Archivos fuente (source)
│   ├── imgs/               # Imágenes del proyecto
│   ├── estilos.css         # Estilos CSS
│   ├── index.html          # Archivo HTML principal
│   ├── index.js            # Punto de entrada para Webpack, lógica
├── package.json            # Configuración del proyecto y dependencias
├── package-lock.json       # Configuración del proyecto y dependencias
└── webpack.config.js       # Configuración de Webpack
```

## Diseño HTML y CSS

### HTML

El archivo `index.html` proporciona la estructura básica del sitio web. Contiene las siguientes secciones principales:

- **Header:** Contiene el nombre de la empresa y la barra de navegación.
- **Sobre Nosotros:** Información sobre la empresa.
- **Carrusel:** Una sección con un carrusel de imágenes destacadas.
- **Servicios:** Lista de servicios ofrecidos por la empresa.
- **Nuestro Equipo:** Información sobre los miembros del equipo.
- **Contáctanos:** Información de contacto de la empresa.

### CSS

El archivo `estilos.css` define los estilos para el sitio web. Aquí se describen algunos aspectos clave del diseño:

- **Fuente y Colores:** Se utilizan fuentes de Google Fonts y una paleta de colores coherente para dar un aspecto moderno y profesional.
- **Carrusel y Parallax:** Estilos para un carrusel de imágenes y un efecto parallax en las imágenes de fondo.
- **Responsividad:** Uso de media queries para asegurar que el sitio sea responsive y se vea bien en dispositivos móviles.
- **Diseño:** Se aprovechan las ventajas de las posibilidades que ofrece CSS para ajustar tamaños, especificar colores y tomar decisiones de diseño.

## Lógica del Script

El archivo `index.js` contiene la lógica de programación para el proyecto. A continuación, se detalla más claramente cada función:

1. **Carrusel de Imágenes:** Esta sección contiene la lógica del carrusel de imágenes. Este carrusel cambia automáticamente las imágenes cada 5 segundos.

```
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
```

2. **Efecto Parallax:** Ajusta la posición de fondo de los elementos con clase `parallax` en función del desplazamiento de la página.

```
window.addEventListener("scroll", function () {
  const parallaxElemento = document.querySelectorAll(".parallax");
  parallaxElemento.forEach(function (element) {
    let posicionScroll = window.pageYOffset;
    element.style.backgroundPositionY = `${posicionScroll * 0.5}px`;
  });
});
```

## Configuración de Webpack

El archivo `webpack.config.js` configura Webpack para empaquetar los recursos del proyecto.

1. **Entrada y Salida:** Define el punto de entrada (`src/index.js`) y el archivo de salida (`dist/bundle.js`).

2. **Modos:** Configura Webpack para operar en modo `production` o `development` según sea necesario.

3. **Reglas:** Configura cómo manejar los archivos CSS y las imágenes. Usa `MiniCssExtractPlugin` para extraer los estilos CSS y procesa las imágenes como recursos.

4. **Plugins:** Utiliza `HtmlWebpackPlugin` para generar el archivo HTML, `MiniCssExtractPlugin` para extraer los estilos CSS y por último `CssMinimizerWebpackPlugin` para minificar el archivo CSS.
