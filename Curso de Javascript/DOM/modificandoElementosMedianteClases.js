const primeraCaja = document.querySelector("#contenedor1 .caja");
console.log(primeraCaja.classList);

const agregarClase = () => {
  primeraCaja.classList.add("activa");
};

const eliminarClase = () => {
  primeraCaja.classList.remove("activa");
};

const toggleClase = () => {
  primeraCaja.classList.toggle("activa");
};


const comprobarClase = () =>{
    if (primeraCaja.classList.contains("activa")) {
        console.log("Activa");
    } else{
        console.log("No activa");
    }

    console.log("Clases del elemento: ");
    primeraCaja.classList.forEach((clase)=>{
        console.log(clase);
    })
}