/* const saludo = (nombre = "Amigo") => {
  console.log(`Hola, Javier ${nombre}`);
};
saludo("Eduardo");
saludo("Edgardo");
saludo("Angelo");
saludo();
 */
/* Múltiples parámetros */
const operacion = (tipo, num1, num2) => {
  if (tipo === "Suma") {
    console.log(num1 + num2);
  } else if (tipo === "Resta") {
    console.log(num1 - num2);
  } else {
    console.log("Tipo de operación no válido.");
  }
};
operacion("Suma", 20, 3);
operacion("Resta", 20, 1);
operacion(52, 78);
