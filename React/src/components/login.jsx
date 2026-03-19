import { useState } from "react";

const LoginForm = ({ setSesionIniciada }) => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const handleUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const handleClave = (e) => {
    setClave(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "Javier" && clave === "000") {
      setSesionIniciada(true);
    } else {
      alert("Datos incorrectos");
    }
  };

  return (
    <div className="contenedor">
      <form className="login" onSubmit={handleSubmit}>
        <h3>Inicia sesión</h3>
        <input
          type="text"
          placeholder="Usuario"
          id=""
          onChange={handleUsuario}
          value={usuario}
        />
        <input
          type="password"
          placeholder="Contraseña"
          id=""
          onChange={handleClave}
          value={clave}
        />
        <button>Iniciar la sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
