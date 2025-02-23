function toggleSideMenu() {
    const overlay = document.getElementById('menu-overlay');
    overlay.classList.toggle('show');
}


function closeSideMenu() {
    document.getElementById("menu-overlay").classList.remove("show");
}
