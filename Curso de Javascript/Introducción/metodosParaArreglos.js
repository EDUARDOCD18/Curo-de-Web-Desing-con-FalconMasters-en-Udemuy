const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

/* .length */
console.log("Arreglo con " + colores.length + " valores.");

/* .toString */
// document.body.innerHTML = colores.toString();

/* .join */
console.log(colores.join(" // "));

/* .sort */
const letras = ["a", "b", "c", "f", "d", "g"];
console.log(letras.sort());

const numeros = [1, 6, 98, 4, 55, 5, 7, 8, 9];
console.log(numeros.sort());

/* .reverse */
console.log(letras.reverse());
console.log(numeros.reverse());

/* .concat */
const arreglo1 = [1, 2, 4];
const arreglo2 = ["a", "b", "c"];
console.log(arreglo1.concat(arreglo2));

/* .push */
colores.push("naranja")
console.log(colores);

/* .pop */
colores.pop()
console.log(colores);
