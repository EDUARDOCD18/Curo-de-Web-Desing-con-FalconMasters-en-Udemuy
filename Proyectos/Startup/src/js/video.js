const btnVideo = document.getElementById("btn-video");
// console.log(btnVideo)
const overlayVideo = document.getElementById("overlay-video");

/* Abrir el overlay del video */
btnVideo.addEventListener("click", () => {
  overlayVideo.classList.add("active");
});

/* Cerrar el overlay del video */
overlayVideo.addEventListener("click", () => {
  overlayVideo.classList.remove("active");
});
