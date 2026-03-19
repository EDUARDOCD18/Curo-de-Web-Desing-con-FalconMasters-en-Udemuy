import Header from "./components/Header";
import Lista from "./components/lista";
import LoginForm from "./components/login";
import { useState } from "react";

function App() {
  const nombre = "Javier";

  const amigos = [
    { nombre: "Brian", telefono: "123-011-189" },
    { nombre: "David", telefono: "123-011-189" },
    { nombre: "Robert", telefono: "123-011-189" },
    { nombre: "Daniel", telefono: "123-011-189" },
  ];

  const famosos = [
    { nombre: "Brian", telefono: "123-011-189" },
    { nombre: "David", telefono: "123-011-189" },
    { nombre: "Robert", telefono: "123-011-189" },
    { nombre: "Daniel", telefono: "123-011-189" },
  ];

  // const sesionIniciada = true;
  const [sesionIniciada, setSesionIniciada] = useState(true);

  const cerrarSesion = () => {
    setSesionIniciada(false);
  };

  return (
    <>
      {sesionIniciada ? (
        <div className="contenedor">
          <Header nombre={nombre} />
          <Lista contactos={amigos} />
          <Lista contactos={famosos} />
          <button className="btnCerrarSesion" onClick={cerrarSesion}>
            Cerrar la sesión
          </button>
        </div>
      ) : (
        <LoginForm setSesionIniciada={setSesionIniciada}/>
      )}
    </>
  );
}

export default App;
