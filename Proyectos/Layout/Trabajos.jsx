const Trabajos = () => {
  return (
    <>
      <section id="trabajos" className="trabajos">
        <div className="encabezado">
          <h3 className="titulo">Mis trabajos</h3>
          <p className="subtitulo">Estos son mis proyectos</p>
        </div>

        {/* Filtros */}
        <div className="filtros">
          <label htmlFor="todos">
            <input type="radio" name="categoria" id="todos" />
            <span className="opcion">Todos</span>
          </label>
          <label htmlFor="diseno-web">
            <input type="radio" name="categoria" id="diseno-web" />
            <span className="opcion">Diseño Web</span>
          </label>
          <label htmlFor="desarrollo-web">
            <input type="radio" name="categoria" id="desarrollo-web" />
            <span className="opcion">Desarrollo Web</span>
          </label>
          <label htmlFor="aplicaciones-moviles">
            <input type="radio" name="categoria" id="aplicaciones-moviles" />
            <span className="opcion">Aplicaciones Móviles</span>
          </label>
          <label htmlFor="desarrollo-software">
            <input type="radio" name="categoria" id="desarrollo-software" />
            <span className="opcion">Desarrollo de Software</span>
          </label>
        </div>
      </section>
    </>
  );
};

export default Trabajos;
