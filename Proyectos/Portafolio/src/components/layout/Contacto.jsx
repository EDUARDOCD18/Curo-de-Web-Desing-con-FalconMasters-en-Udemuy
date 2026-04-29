const Contacto = () => {
  return (
    <>
      <section className="contacto" id="contacto">
        <div className="encabezado">
          <h3 className="titulo">Haz real tu idea</h3>
          <p className="subtitulo">
            Contacta conmigo y lleva a la realidad tus ideas y proyectos.
          </p>
        </div>

        {/* -- Formulario de contacto */}
        <form action="" className="formulario">
          {/* - Nombre de la persona -- */}
          <div className="grupo-formulario">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="John Doe"
              required
            />
          </div>
          {/* - Correo de la persona -- */}
          <div className="grupo-formulario">
            <label htmlFor="correo">Correo</label>
            <input
              type="text"
              name="correo"
              id="correo"
              placeholder="correo@correo.com"
              required
            />
          </div>
          {/* - Mensaje de la persona -- */}
          <div className="grupo-formulario">
            <label htmlFor="correo">Mensaje</label>
            <textarea
              name="mensaje"
              id="mensaje"
              placeholder="Redacta acá tu mensaje."
              required
            ></textarea>
          </div>

          {/* - Mensaje de error */}
          <div className="grupo-formulario">
            <p>Error: información inválida</p>
          </div>

          {/* - Botón para enviar el formulario - */}
          <div className="grupo-formulario">
            <div>
              <button className="boton">
                Enviar mensaje
                <div className="icono">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contacto;
