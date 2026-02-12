const operacion = (tipo, num1, num2) => {
  if (tipo === "Suma") {
    return num1 + num2;
  } else if (tipo === "Resta") {
    return num1 - num2;
  } else {
    console.log("Tipo de operación no válido.");
  }
};

const miVariable = operacion("Suma", 1455, 11);
console.log(miVariable);
