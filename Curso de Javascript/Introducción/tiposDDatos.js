const nombre = "Javier";
const parrafo = 'Hola mundo en "párrafo"';
console.log(parrafo);

/* Números */
const numero = 3;
const numero2 = 5;
console.log(numero + numero2);

/* Boolean */
const usuarioConectado = false;
console.log(usuarioConectado);
const mayorQue = 1 < 2;
console.log(mayorQue);

/* Arrays */
const array = [1, 2, 5, "Javier", { propiedad: "Eduardo" }, [2, 2, 2]];
console.log(array);

/* Objeto */
const persona = {
  nombre: "Javier",
  edad: 26,
  numero: 101235813,
  carro: {
    marca: "...",
    color: "blanco",
  },
};

console.log(persona);
console.log(persona.carro.color);

/* Función */
function hola() {
  console.log("Hola");
}

hola();
