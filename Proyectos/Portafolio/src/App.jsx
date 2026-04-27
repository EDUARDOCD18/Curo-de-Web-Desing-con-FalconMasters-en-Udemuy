import Header from "./components/layout/Header";
import Hero from "./components/layout/hero";
import Clientes from "./components/layout/Clientes";
import Trabajos from "./components/layout/Trabajos";
import AcercaDe from "./components/layout/AcercaDe";

function App() {
  return (
    <>
      <div className="contenedor">
        <Header />
        <Hero />
        <Clientes />
        <Trabajos />
        <AcercaDe />
      </div>
    </>
  );
}

export default App;
