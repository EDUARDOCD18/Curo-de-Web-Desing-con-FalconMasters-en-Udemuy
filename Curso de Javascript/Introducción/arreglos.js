const arreglo = [
  "Texto",
  1,
  16.12,
  false,
  { nombre: "Javier" },
  [0, 1, 1, 2, 3, 5, 8, 13],
];
console.log(arreglo);

const amigos = ["Ale", "Vane", "Audry"];
console.log(amigos[1]);
console.log(amigos[2]);

const colores = [];
colores[0] = "Azul";
console.log(colores);

colores[1] = "Naranja";
console.log(colores);

colores[2] = "Negro";
console.log(colores);

colores[3] = "Blanco";
console.log(colores);

console.log("Este arreglo posee " + colores.length + " colores");

colores.push("Verde")
console.log(colores);
console.log("Este arreglo AHORA posee " + colores.length + " colores");

