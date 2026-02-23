const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child");
console.log(ultimaCaja);

ultimaCaja.style.background = "#000";
ultimaCaja.style.color = "#fff";

const cajas = document.querySelectorAll(".caja");
// console.log(cajas);
let size = 24;

const incrementarFuente = () => {
  cajas.forEach((caja) => {
    // console.log(caja);
    caja.style.fontSize = `${size + 1}px`;
    size++;
  });
};

const disminuirFuente = () => {
  cajas.forEach((caja) => {
    // console.log(caja);
    caja.style.fontSize = `${size - 1}px`;
    size--;
  });
};
