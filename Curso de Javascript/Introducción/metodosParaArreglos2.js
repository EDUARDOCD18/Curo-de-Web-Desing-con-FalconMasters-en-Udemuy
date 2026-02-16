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
const resultado = frutas.find((frutas) => {
  if (frutas[0] === "M") {
    return frutas;
  }
});

console.log(resultado);
