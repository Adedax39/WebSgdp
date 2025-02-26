function toggleSideMenu() {
    console.log("Opening menu...");
    document.getElementById('menu-overlay').classList.add('show');
}

function closeSideMenu() {
    console.log("Closing menu..."); // Debugging log
    document.getElementById("menu-overlay").classList.remove("show");

}

// Close menu overlay when a link is clicked
document.addEventListener("click", function (event) {
    if (event.target.closest("#menu-overlay .nav-link")) {
        closeSideMenu();
    }
});

// window.addEventListener('resize', function () {
//     if (window.innerWidth > 768) {
//         closeSideMenu();
//     }
// })


// Close the overlay when clicking outside of the overlay content
// document.getElementById('menu-overlay').addEventListener('click', function(event) {
//     // Check if the click was outside the overlay content
//     if (event.target === this) {
//         closeSideMenu();
//     }
// });