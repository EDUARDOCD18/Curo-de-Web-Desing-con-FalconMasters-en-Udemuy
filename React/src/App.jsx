import Header from "./components/Header";
import Lista from "./components/lista";

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

  return (
    /* -- Contenedor principal  -- */
    <div className="contenedor">
      <Header nombre={nombre} />

      <Lista contactos={amigos}/>
      <Lista contactos={famosos}/>
    </div>
  );
}

export default App;
