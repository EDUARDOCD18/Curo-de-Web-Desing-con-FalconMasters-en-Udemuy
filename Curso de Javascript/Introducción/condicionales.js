console.log("-- CONDICIONALES -- ");

/* Ejemplo 1 */
const usuario = {
  edad: 27,
  pais: "Venezuela",
  tieneTicket: true,
};

if (usuario.edad >= 18) {
  console.log("Ejemplo 1: Acceso permitido");
} else {
  console.log("Ejemplo 1: Acceso negado");
}

/* Ejemplo 2 */
const usuario2 = {
  edad: 27,
  pais: "Venezuela",
  tieneTicket: false,
};

if (usuario2.edad >= 18 && usuario2.tieneTicket) {
  console.log("Ejemplo 2: Acceso permitido");
} else {
  console.log("Ejemplo 2: Acceso negado");
}

/* Ejemplo 3 */
const usuario3 = {
  edad: 17,
  pais: "Venezuela",
  tieneTicket: true,
};

if (usuario3.edad >= 18) {
  if (usuario3.tieneTicket) {
    console.log("Ejemplo 3: Acceso permitido");
  } else {
    console.log("Ejemplo 3: Acceso negado, sin ticket");
  }
} else {
  console.log("Ejemplo 3: Acceso negado, no posee la edad permitida");
}

/* Ejemplo 4 */
const usuario4 = {
  edad: 17,
  pais: "Peru",
  tieneTicket: true,
};

if ((usuario4.pais ==="Venezuela")) {
  console.log("Ejemplo 4: Es venezolano");
} else if ((usuario4.pais === "Peru")) {
  console.log("Ejemplo 4: Es peruano");
} else {
  console.log("Ejemplo 4: Sin nacionalidad");
}
