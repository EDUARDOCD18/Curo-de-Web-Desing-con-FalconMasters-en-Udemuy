import "./Modal.css"

const Modal = () => {
  return (
    <>
      <div className="overlay" id="overlay">
        <div className="modal">
          <button className="boton-cerrar" id="btn-cerrar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>

          <div className="grid">
            <div className="thumb">
              <img src="./assets/trabajos/1.png" alt="" />
            </div>

            <div className="info">
                <div className="head">
                    <h3 className="titulo">Trabajo 1</h3>

                    <span className="categoria">Categoría 1</span>
                </div>

                <div className="body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam, ad repudiandae eum eaque rem itaque modi ratione ea dicta libero porro excepturi reprehenderit iusto minima aperiam velit asperiores! Ex.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
