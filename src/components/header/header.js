function toggleSideMenu() {
  const overlay = document.getElementById("menu-overlay");
  overlay.classList.toggle("show");
}

function closeSideMenu() {
  const overlay = document.getElementById("menu-overlay");
  overlay.classList.remove("show");
}

document.addEventListener("click", function (event) {
  if (event.target.closest(".overlay .nav-link")) {
    closeSideMenu();
  }
});
