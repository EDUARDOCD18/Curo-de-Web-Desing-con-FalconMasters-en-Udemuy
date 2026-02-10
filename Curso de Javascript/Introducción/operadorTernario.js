const boleto = "vip";
/* let codigoAcceso = "";

if (boleto === "vip") {
  codigoAcceso = "011235813-VIP-LS";
} else {
  codigoAcceso = "13945-43-REG-TS";
}

console.log("El código de acceso es: ", codigoAcceso); */

console.log("-- OPERADOR TERNARIO -- ");

const codigoAcceso = boleto === "vip" ? "011235813-VIP-LS" : "13945-43-REG-TS";

console.log("El código de acceso es: ", codigoAcceso);

boleto === "vip" ? console.log("Es verdadero") : console.log("Es falso");
