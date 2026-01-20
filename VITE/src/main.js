import desierto from "/assets/desierto.png";
import cargarContador from "./contador";

document.querySelector("#app").innerHTML = `
<h1>Hola, mundo</h1>

<img src="${desierto}" "alt="Imagen de desierto" id="imagen">
<h2>Veces cliqueado: <span id="cuenta">0</span></2>

`;

cargarContador();
