const Header = (props) => {
    // console.log(props);
  return (
    /* Header */
    <header className="header">
      <h1>Hola mundo, soy {props.nombre}</h1>
      <p> Hoy es {new Date().toLocaleDateString()}</p>
    </header>
  );
};

/* exportar el componente */
export default Header