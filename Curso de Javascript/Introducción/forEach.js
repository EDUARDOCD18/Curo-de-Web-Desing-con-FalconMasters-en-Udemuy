/* forEach */
// const amigos = ["Marco", "Polo", "Borgia"];
// amigos.forEach((nombre, index) => console.log(nombre, index));

/* for in */
/* const persona = {
  nombre: "Javier",
  edad: 26,
  correo: "correo@correo.com.ve",
};

for (propiedad in persona) {
  persona[propiedad] = "";
}
console.log(persona);
 */

/* -- for of -- */
const etiquetas = document.head.children;
// console.log(etiquetas);

/* for (elemento of etiquetas) {
  console.log(elemento);
}
 */

// console.log([...etiquetas]);
[...etiquetas].forEach((elemento) => console.log(elemento));
