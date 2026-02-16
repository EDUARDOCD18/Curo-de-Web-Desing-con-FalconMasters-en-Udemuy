/* .indexof() */
const frutas = [
  "Manzana",
  "pera",
  "kiwi",
  "naranaja",
  "kiwi",
  "Melón",
  "Fresa",
  "Arándanos",
];

/* console.log(frutas.indexOf("Fresas"));
console.log(frutas.indexOf("kiwi")); */

/* .lastindexof() */
/* console.log(frutas.lastIndexOf("kiwi")); */

/* .foreach() */
/* frutas.forEach((nombre, index) => {
  console.log(`- ${nombre} (${index}).`);
}); */

/* .find() */
/* const resultado = frutas.find((frutas) => {
  if (frutas[0] === "M") {
    return frutas;
  }
});

console.log(resultado);
 */

/* .map() */
/* const frutarMayusculas = frutas.map((frutas) => frutas.toUpperCase());

console.log(frutarMayusculas); */

/* .filter() */
const frutasCuatroLetras = frutas.filter((nombre) => {
  if (nombre.length === 5) {
    return nombre;
  }
});
console.log(frutasCuatroLetras);
