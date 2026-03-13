import Header from "./components/Header";
import Lista from "./components/lista";
import LoginForm from "./components/login";

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

  const sesionIniciada = f;

  return (
    <>
      {sesionIniciada ? (
        <div className="contenedor">
          <Header nombre={nombre} />
          <Lista contactos={amigos} />
          <Lista contactos={famosos} />
          <button className="btnCerrarSesion">Cerrar la sesión</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default App;
