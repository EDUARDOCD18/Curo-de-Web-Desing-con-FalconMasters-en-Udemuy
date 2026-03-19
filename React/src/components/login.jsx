const LoginForm = ({ setSesionIniciada }) => {
  const iniciarSesion = () => {
    setSesionIniciada(true);
  };
  return (
    <div className="contenedor">
      <form className="login">
        <h3>Inicia sesión</h3>
        <input type="text" placeholder="Usuario" id="" />
        <input type="text" placeholder="Contraseña" id="" />
        <button onClick={iniciarSesion}>Iniciar la sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
