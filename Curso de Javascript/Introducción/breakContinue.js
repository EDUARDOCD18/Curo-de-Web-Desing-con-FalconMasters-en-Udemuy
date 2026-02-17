const frutas = [
  "Arandano",
  "Arandanos",
  "Coco",
  "Banana",
  "Kiwi",
  "Manzana",
  "Fresa",
  "Melón",
  "Pitalla",
  "Mandarina",
];

/* for (let i = 0; i < frutas.length; i++) {
  if (frutas[i][0] !== "A") {
    console.log(`-- Fin de la ejecución, "${frutas[i]}" no empieza por la letra A --`);
    break;
  }

  console.log(frutas[i]);
}
 */

console.log("-- Lista de frutas permitidas --");
for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === "Fresa") {
    console.log("La fresa está prohibida para ti.");
    continue;
  }
  console.log(frutas[i]);
}
