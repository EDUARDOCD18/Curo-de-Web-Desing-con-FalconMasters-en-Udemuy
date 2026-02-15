var nombre = "Javier";
console.log(nombre);

const saludo = () => {
  console.log("Hola,", nombre);
  nombre = "Javier Eduado";
  console.log("Hola,", nombre);
};

saludo();
