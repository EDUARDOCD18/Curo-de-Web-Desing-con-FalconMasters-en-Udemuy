import Header from "./components/layout/Header";
import Hero from "./components/layout/hero";
import Clientes from "./components/Clientes";

function App() {
  return (
    <>
      <div className="contenedor">
        <Header />
        <Hero />
        <Clientes />
      </div>
    </>
  );
}

export default App;
