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

        {/* grilla para los trabajos */}
        <div className="grid">
          <div className="trabajo">
            <a href="#" className="thumb">
              <img
                loading="lazy"
                src="./assets/trabajos/diseño-1.png"
                alt="Trabajo de diseño web"
                srcset=""
              />
            </a>

            <div className="info">
              <div className="textos">
                <a href="#" className="nombre">
                  Trabajo 1
                </a>
                <p className="categoria">Diseño Web</p>
              </div>
              <a href="#" className="btn-ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="trabajo">
            <a href="#" className="thumb">
              <img
                loading="lazy"
                src="./assets/trabajos/diseño-1.png"
                alt="Trabajo de diseño web"
                srcset=""
              />
            </a>

            <div className="info">
              <div className="textos">
                <a href="#" className="nombre">
                  Trabajo 1
                </a>
                <p className="categoria">Diseño Web</p>
              </div>
              <a href="#" className="btn-ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="trabajo">
            <a href="#" className="thumb">
              <img
                loading="lazy"
                src="./assets/trabajos/diseño-1.png"
                alt="Trabajo de diseño web"
                srcset=""
              />
            </a>

            <div className="info">
              <div className="textos">
                <a href="#" className="nombre">
                  Trabajo 1
                </a>
                <p className="categoria">Diseño Web</p>
              </div>
              <a href="#" className="btn-ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="trabajo">
            <a href="#" className="thumb">
              <img
                loading="lazy"
                src="./assets/trabajos/diseño-1.png"
                alt="Trabajo de diseño web"
                srcset=""
              />
            </a>

            <div className="info">
              <div className="textos">
                <a href="#" className="nombre">
                  Trabajo 1
                </a>
                <p className="categoria">Diseño Web</p>
              </div>
              <a href="#" className="btn-ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="trabajo">
            <a href="#" className="thumb">
              <img
                loading="lazy"
                src="./assets/trabajos/diseño-1.png"
                alt="Trabajo de diseño web"
                srcset=""
              />
            </a>

            <div className="info">
              <div className="textos">
                <a href="#" className="nombre">
                  Trabajo 1
                </a>
                <p className="categoria">Diseño Web</p>
              </div>
              <a href="#" className="btn-ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="trabajo">
            <a href="#" className="thumb">
              <img
                loading="lazy"
                src="./assets/trabajos/diseño-1.png"
                alt="Trabajo de diseño web"
                srcset=""
              />
            </a>

            <div className="info">
              <div className="textos">
                <a href="#" className="nombre">
                  Trabajo 1
                </a>
                <p className="categoria">Diseño Web</p>
              </div>
              <a href="#" className="btn-ir">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trabajos;
