var numero = 18;

var obtenerNumeroLetras = (nombre) => {
  var numero = nombre.length;
  console.log(`El nombre de \'${nombre}\' tiene ${numero} letras.`);

  var funcionAnidada = () => {
    console.log(numero);
  };
  funcionAnidada();
};

obtenerNumeroLetras("Javier Eduardo");

console.log(numero);
