import Header from "./components/layout/Header";
import Hero from "./components/layout/hero";
import Clientes from "./components/layout/Clientes";
import Trabajos from "./components/layout/Trabajos";

function App() {
  return (
    <>
      <div className="contenedor">
        <Header />
        <Hero />
        <Clientes />
        <Trabajos />
      </div>
    </>
  );
}

export default App;
