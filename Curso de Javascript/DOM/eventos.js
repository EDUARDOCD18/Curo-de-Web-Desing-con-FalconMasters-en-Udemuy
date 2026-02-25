const boton1 = document.getElementById("boton1");
const primeraCaja = document.querySelector(".caja");
boton1.addEventListener("click", (e) => {
  // console.log("Hola");
  primeraCaja.classList.toggle("activa");
  console.log(e);
});

const caja = document.querySelectorAll(".caja")

caja.forEach((caja) =>{
    caja.addEventListener("click", (e)=>{
        // console.log(e);
        console.log(`Click en la caja ${e.target.innerHTML}`);
    })
})