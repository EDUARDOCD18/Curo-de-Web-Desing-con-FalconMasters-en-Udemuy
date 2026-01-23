import desierto from "/assets/desierto.png";
import cargarContador from "./contador";
import "../estilos.css";
import clases from "../imagen.module.css";

document.querySelector("#app").innerHTML = `
<h1>Hola, mundo</h1>

<img src="${desierto}" "alt="Imagen de desierto" id="imagen" class="${clases.imagen}">
<h2>Veces cliqueado: <span id="cuenta" class="${clases.contador}">0</span></2>

`;

cargarContador();
