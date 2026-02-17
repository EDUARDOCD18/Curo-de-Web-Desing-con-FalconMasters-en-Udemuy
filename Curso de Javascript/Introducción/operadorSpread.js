//
// const comidaFavorita = ["Pizza", "Sushi", ...frutas];
// console.log(comidaFavorita);

// const datosLogin = {
//   correo: "correo@correo.com",
//   clave: "011235813",
// };

// const usuario = {
//   nombre: "Javier",
//   edad: 26,
//   ciudad: "Carrizal",
//   ...datosLogin
// };

// console.log(usuario);

/* Rest */
// const registrarUsuario = (nombre, correo, ...datosAdicionales) =>{
//     console.log(nombre, correo, datosAdicionales);
// }

// registrarUsuario("Javier", "correo@correo.com")
// registrarUsuario("Javier Eduardo", "correo2@correo.com", 26)

/* Destructuración de objetos */
const frutas = ["Banana", "Kiwi", "Manzana", "Fresa"];
const [primeraFruta, segundaFruta, tercesaFruta] = frutas;
console.log(segundaFruta);

const usuario = {
  nombre: "Javier",
  edad: 26,
  ciudad: "Carrizal"
};

const{nombre, ciudad} = usuario
console.log(nombre, ciudad);