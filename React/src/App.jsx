function App() {
  const nombre = "Javier Eduardo";

  return (
    <div className="contenedor">
      <header className="header">
        <h1>Hola mundo, soy {nombre}</h1>
        <p> Hoy es {new Date().toLocaleDateString()}</p>
      </header>
    </div>
  );
}

export default App;
