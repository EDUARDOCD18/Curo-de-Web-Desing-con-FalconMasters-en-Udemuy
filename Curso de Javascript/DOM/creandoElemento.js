const agregarCaja = () => {
  const nuevaCaja = document.createElement("div");

  /* Agregar texto y atributos */
  nuevaCaja.innerText = "Nueva caja";
//   nuevaCaja.setAttribute("id", "nuevo-id");
  nuevaCaja.setAttribute("class", "caja activa");

  /* Agregar elemento al DOM */
  const contenedor = document.getElementById("contenedor1");

  /* appendChild() */
//   contenedor.appendChild(nuevaCaja);

/* -- insertAdjacentElement() */
// contenedor.insertAdjacentElement("afterbegin", nuevaCaja)
// contenedor.insertAdjacentElement("beforebegin", nuevaCaja)
// contenedor.insertAdjacentElement("beforeend", nuevaCaja)
// contenedor.insertAdjacentElement("afterend", nuevaCaja)

/* -- replaceWith() --*/
document.querySelector("#contenedor1 .caja").replaceWith(nuevaCaja)
};
