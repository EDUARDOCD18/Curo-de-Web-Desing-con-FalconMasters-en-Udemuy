/* getElementByUd */
const elemento = document.getElementById("contenedor1");
// console.log(elemento);

/* .children */
// console.log(elemento.children);

/* parentElement */
// console.log(elemento.parentElement);

/* getElementByTagName */

// const etiqueta = document.getElementsByTagName("div")
// console.log(etiqueta);
// console.log(etiqueta.length);

/* -- getElementByClassName -- */

// const etiqueta = document.getElementsByClassName("caja")
// console.log(etiqueta);

/* -- querySelector -- */
// const caja = document.querySelector("#contenedor1 .caja")
// console.log(caja);

/* -- querySelectorAll -- */
// const caja = document.querySelectorAll("#contenedor1 .caja");
// console.log(caja);
// caja.forEach((caja) => console.log(caja));

/* -- closest -- */
// const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child");
// console.log(ultimaCaja);
// console.log(ultimaCaja.closest(".contenedor-principal"));

const contenedor2 = document.getElementById("contenedor2");
console.log(contenedor2.querySelectorAll(".caja"));
