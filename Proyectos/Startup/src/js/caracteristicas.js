const previews = document.getElementById("previews");
const tabs = document.getElementById("tabs");

tabs.addEventListener("click", (e) => {
  // console.log("Click");
  e.preventDefault;
  //   console.log(e.target.closest(".tab"));
  const selectedTab = e.target.closest(".tab");

  if (selectedTab) {
    // console.log("Ejecutando en pestaña");
    const id = selectedTab.dataset.id;
    // console.log(id);

    /* Cambiar los previews al hacer clic */
    previews.querySelector(".active").classList.remove("active");
    previews.querySelector(`[data-id="${id}"]`).classList.add("active");

    /* Cambiar las tabs al hacer clic */
    tabs.querySelector(".active").classList.remove("active");
    tabs.querySelector(`[data-id="${id}"]`).classList.add("active");
  }
});
