window.addEventListener("scroll", function () {
  let menuOpen = document.querySelector(".toggler").checked;

  if (menuOpen) {
    document.querySelector(".toggler").checked = false;
  }
});
