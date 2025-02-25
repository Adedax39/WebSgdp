document.addEventListener("DOMContentLoaded", function () {
  // Function to dynamically load components (header, footer, content)
  function loadComponent(id, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;

        // If header loads, attach event listeners for navigation links
        if (id === "header-placeholder") {
          attachNavListeners();
        }
      })
      .catch(error => console.error(`Error loading ${filePath}:`, error));
  }

  //function to attach navigation listners
  function attachNavListeners() {

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link, #menu-overlay .nav-link, #profile-link");

    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {

        event.preventDefault();

        const page = link.getAttribute('href');

        // loadComponent("content", `/src/pages/${page}${page}.html`);
        loadComponent("content", page);
        // window.history.pushState({}, "", page);
      });
    });
  }

  // Handle browser back/forward button navigation
  window.addEventListener("popstate", function () {
    loadComponent("content", window.location.pathname);
  });


  // Load Header and Footer once
  loadComponent("header-placeholder", "/src/components/header/header.html");


  // Default content page (Home)
  // const initialPage = window.location.pathname === "/" ? "/src/pages/home/home.html" : window.location.pathname;
  loadComponent("content", "/src/pages/SplashScreen/splashscreen.html");

  setTimeout(() => {
    loadComponent("content", "/src/pages/home/home.html");
  }, 5000); // 4 seconds delay

})
