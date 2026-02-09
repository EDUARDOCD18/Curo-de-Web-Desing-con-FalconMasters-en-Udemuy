const personaArreglo = ["Javier", 26, "javier@javier.com".true, false];

const persona = {
  nombre: "Javier",
  edad: 26,
  telefono: "0112",
  correo: "javier@javier.com",
  suscripciones: {
    web: true,
    correo: true,
    boletin: false,
  },
  coloresFavoritos: ["rojo", "blanco", "gris"],
  saludo: function () {
    console.log("Hola, mundo desde la consola de comandos");
  },
};

console.log(persona["edad"]);
console.log(persona.suscripciones.web);
console.log(persona.coloresFavoritos);
persona.saludo()

const variable = "correo"
const variable2 = "suscripciones.web"
console.log(persona[variable]);
console.log(persona[variable2]);

persona.pais = "Venezuela"
persona.pais = "Panamá"

console.log(persona);

