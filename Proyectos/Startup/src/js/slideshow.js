const slideshow = document.getElementById("slideshow");
const slides = document.getElementById("slides");
const indicadores = document.getElementById("indicadores");
const btnCambiar = document.getElementById("cambiar");
const velocidadDeCambio = 4000;

let slideActual = 1;

/* -- Función para el cambio del slider --  */
const siguienteSlide = () => {
  // console.log(btnCambiar);
  const primerSlide = slides.children[0];
  const ancho = primerSlide.offsetWidth;
  //   console.log(ancho);

  const velocidad = 300;
  slides.style.transition = `ease-out ${velocidad}ms all`;
  slides.style.transform = `translateX(-${ancho}px)`;

  setTimeout(() => {
    slides.appendChild(primerSlide);
    slides.style.transition = "none";
    slides.style.transform = "translateX(0)";
  }, velocidad);

  // Cambiar los indicadores de los slides
  if (slideActual < slides.children.length) {
    slideActual++;
    indicadores.children[slideActual - 1].classList.add("active");
  } else {
    slideActual = 1;
  }

  indicadores.querySelector(".active").classList.remove("active");
  indicadores.children[slideActual - 1].classList.add("active");
};

/* -- Llamar a la función que cambia los slides cada x segundos */
setInterval(() => {
  siguienteSlide();
}, velocidadDeCambio);
